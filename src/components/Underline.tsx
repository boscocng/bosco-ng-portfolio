"use client";

import { useEffect, useRef } from "react";
import { annotate, type RoughAnnotation } from "rough-notation";

type UnderlineProps = {
  children: React.ReactNode;
  color?: string;
  padding?: number | [number, number] | [number, number, number, number];
};

export default function Underline({
  children,
  color = "rgba(185,28,28,0.9)",
  padding = [0, 2],
}: UnderlineProps) {
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!spanRef.current) return;
    const annotation: RoughAnnotation = annotate(spanRef.current, {
      type: "underline",
      color,
      multiline: false,
      iterations: 1,
      padding,
      animate: true,
      animationDuration: 500,
      strokeWidth: 2,
    });
    annotation.show();
    return () => {
      try {
        annotation.remove();
      } catch {}
    };
  }, [color, padding]);

  return (
    <span ref={spanRef} className="inline-block align-baseline">
      {children}
    </span>
  );
}


