"use client";

import { useTooltip } from "@/states/tooltip";
import { ReactNode, useEffect, useState } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
  className?: string;
}

export function TooltipOverlay() {
  const { text, visible } = useTooltip();
  const [{ x, y }, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!visible || !text) return null;

  return (
    <div
      className="tooltip"
      style={{
        left: `${x}px`,
        top: `${y + 32}px`,
      }}
    >
      {text}
    </div>
  );
}

export default function Tooltip({
  text,
  children,
  className = "inline-block",
}: TooltipProps) {
  const { setText, setVisibility } = useTooltip();

  const handleMouseEnter = () => {
    setText(text);

    setVisibility(true);
  };

  const handleMouseLeave = () => {
    setVisibility(false);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </span>
  );
}
