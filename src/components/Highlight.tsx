"use client";

import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

type HighlightProps = {
  children: React.ReactNode;
  color?: string; // hex or rgb(a)
  padding?: number | [number, number] | [number, number, number, number];
  delay?: number; // animation delay in milliseconds
};

export default function Highlight({
  children,
  color = "rgba(253,230,138,0.45)", // softer yellow
  padding = [1, 3],
  delay = 0,
}: HighlightProps) {
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!spanRef.current) return;
    let annotation: ReturnType<typeof annotate> | undefined;
    
    const timer = setTimeout(() => {
      annotation = annotate(spanRef.current!, {
        type: "highlight",
        color,
        multiline: true,
        iterations: 1,
        padding,
        animate: true,
        animationDuration: 500,
      });
      annotation.show();
    }, delay);

    return () => {
      clearTimeout(timer);
      try {
        annotation?.remove();
      } catch {
        // ignore
      }
    };
  }, [color, padding, delay]);

  return (
    <span ref={spanRef} className="inline-block align-baseline">
      {children}
    </span>
  );
}


