"use client";

import { useEffect, useState } from "react";

// Mirrors the OS-level prefers-reduced-motion setting AND the site's own
// accessibility-widget toggle (which sets html.a11y-reduced-motion),
// so Framer Motion animations — which the widget's CSS override can't
// reach — respect both signals the same way plain CSS transitions do.
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;

    const update = () => {
      setReduced(mediaQuery.matches || root.classList.contains("a11y-reduced-motion"));
    };

    update();

    mediaQuery.addEventListener("change", update);
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => {
      mediaQuery.removeEventListener("change", update);
      observer.disconnect();
    };
  }, []);

  return reduced;
}
