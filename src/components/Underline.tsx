"use client";

import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

type UnderlineProps = {
  children: React.ReactNode;
  color?: string;
  delay?: number; // animation delay in milliseconds
};

export default function Underline({
  children,
  color = "rgba(251, 182, 209, 0.7)", // much lighter highlighter pink
  delay = 0,
}: UnderlineProps) {
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!spanRef.current) return;
    let annotation: ReturnType<typeof annotate> | undefined;

    const timer = setTimeout(() => {
      annotation = annotate(spanRef.current!, {
        type: "underline",
        color: color,
        strokeWidth: 3, // much thinner line
        padding: 2,
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
  }, [color, delay]);

  return (
    <span ref={spanRef} className="inline-block align-baseline">
      {children}
    </span>
  );
}


