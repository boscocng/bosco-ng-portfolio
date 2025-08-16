"use client";

import { useEffect, useRef } from "react";
import { annotate, type RoughAnnotation } from "rough-notation";

type HighlightProps = {
  children: React.ReactNode;
  color?: string; // hex or rgb(a)
  padding?: number | [number, number] | [number, number, number, number];
};

export default function Highlight({
  children,
  color = "rgba(253,230,138,0.45)", // softer yellow
  padding = [1, 3],
}: HighlightProps) {
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!spanRef.current) return;
    let annotation: RoughAnnotation | undefined;
    annotation = annotate(spanRef.current, {
      type: "highlight",
      color,
      multiline: true,
      iterations: 1,
      padding,
      animate: true,
      animationDuration: 500,
    });
    annotation.show();
    return () => {
      try {
        annotation?.remove();
      } catch {
        // ignore
      }
    };
  }, [color, padding]);

  return (
    <span ref={spanRef} className="inline-block align-baseline">
      {children}
    </span>
  );
}


