"use client";

import { useEffect, useState } from "react";

// Mirrors the OS-level prefers-reduced-motion setting, so Framer Motion
// animations — which plain CSS media queries can't reach — respect it
// the same way the rest of the site's CSS transitions do.
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return reduced;
}
