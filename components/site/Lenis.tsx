"use client";

import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function Lenis() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    const raf = requestAnimationFrame(() => lenis?.resize());

    return () => cancelAnimationFrame(raf);
  }, [pathname, lenis]);

  return <></>;
}
