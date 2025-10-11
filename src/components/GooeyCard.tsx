"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React, { CSSProperties } from "react";

export default function GooeyCard({
  children,
  contentStyle,
  className,
}: {
  children: React.ReactNode;
  contentStyle?: CSSProperties;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "relative w-full max-w-sm mx-auto h-54 md:h-60 overflow-hidden bg-pink-400 text-white filter drop-shadow-lg",
        className
      )}
      style={{
        WebkitMaskImage:
          "url('/Gemini_Generated_Image_7gk4637gk4637gk4__1_-removebg-preview.png')",
        maskImage:
          "url('/Gemini_generated_Image_7gk4637gk4637gk4__1_-removebg-preview.png')",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
      }}
    >
      <CardContent className="relative z-10 h-full">
        <div className="absolute" style={contentStyle}>
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
