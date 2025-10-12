"use client";

import React, { useEffect, useRef } from 'react';

interface InstagramPostProps {
  url: string;
  className?: string;
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const InstagramPost: React.FC<InstagramPostProps> = ({ url, className }) => {
  const ref = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const scriptId = 'instagram-embed-script';

    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }

    const processInstagramEmbeds = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    if (script.getAttribute('data-loaded')) {
      processInstagramEmbeds();
    } else {
      script.onload = () => {
        processInstagramEmbeds();
        script.setAttribute('data-loaded', 'true');
      };
    }
  }, []);

  return (
    <blockquote ref={ref} className={`instagram-media ${className || ''}`} data-instgrm-permalink={url} data-instgrm-version="14" style={{ width: '100%' }}></blockquote>
  );
};

export default InstagramPost;