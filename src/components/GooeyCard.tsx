"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React, { CSSProperties } from "react";

export default function GooeyCard({
  children,
  contentStyle,
  className,
  contentClassName,
}: {
  children: React.ReactNode;
  contentStyle?: CSSProperties;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <Card
      className={cn(
        "relative w-full max-w-sm md:max-w-7xl mx-auto h-52 md:h-96 overflow-hidden bg-pink-400 text-white filter drop-shadow-lg",
        "[mask-image:url('/gooey-card.png')]",
        "[mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]",
        className
      )}
    >
      <CardContent className="relative z-10 h-full">
        <div className={cn("absolute", contentClassName)} style={contentStyle}>
          {children}
        </div>
      </CardContent>
    </Card>
  );
}
