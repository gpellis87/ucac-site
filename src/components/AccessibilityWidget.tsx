"use client";

import { Accessibility, Contrast, Minus, Plus, RotateCcw, X, ZapOff } from "lucide-react";
import { useEffect, useState } from "react";

type TextSize = "base" | "large" | "larger";

type AccessibilityPrefs = {
  textSize: TextSize;
  highContrast: boolean;
  reducedMotion: boolean;
};

const STORAGE_KEY = "uccac-accessibility";
const textSizes: TextSize[] = ["base", "large", "larger"];

const defaultPrefs: AccessibilityPrefs = {
  textSize: "base",
  highContrast: false,
  reducedMotion: false,
};

function applyPrefs(prefs: AccessibilityPrefs) {
  const root = document.documentElement;

  root.dataset.a11yText = prefs.textSize;
  root.classList.toggle("a11y-high-contrast", prefs.highContrast);
  root.classList.toggle("a11y-reduced-motion", prefs.reducedMotion);
}

function readStoredPrefs(): AccessibilityPrefs {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return defaultPrefs;
    }

    const parsed = JSON.parse(stored) as Partial<AccessibilityPrefs>;

    return {
      textSize: textSizes.includes(parsed.textSize as TextSize) ? (parsed.textSize as TextSize) : defaultPrefs.textSize,
      highContrast: Boolean(parsed.highContrast),
      reducedMotion: Boolean(parsed.reducedMotion),
    };
  } catch {
    return defaultPrefs;
  }
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<AccessibilityPrefs>(defaultPrefs);

  useEffect(() => {
    const storedPrefs = readStoredPrefs();
    setPrefs(storedPrefs);
    applyPrefs(storedPrefs);
  }, []);

  const updatePrefs = (nextPrefs: AccessibilityPrefs) => {
    setPrefs(nextPrefs);
    applyPrefs(nextPrefs);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextPrefs));
  };

  const changeTextSize = (direction: "down" | "up") => {
    const currentIndex = textSizes.indexOf(prefs.textSize);
    const offset = direction === "up" ? 1 : -1;
    const nextIndex = Math.min(textSizes.length - 1, Math.max(0, currentIndex + offset));

    updatePrefs({ ...prefs, textSize: textSizes[nextIndex] });
  };

  const resetPrefs = () => {
    updatePrefs(defaultPrefs);
  };

  return (
    <div className="fixed right-0 top-1/2 z-[65] -translate-y-1/2">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="accessibility-panel"
        aria-label={`${open ? "Close" : "Open"} accessibility settings`}
        className="flex h-12 w-12 items-center justify-center border border-r-0 border-parchment/25 bg-terracotta text-white shadow-[0_12px_28px_rgba(0,0,0,0.22)] transition hover:w-14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg)]"
      >
        {open ? <X size={20} /> : <Accessibility size={22} />}
      </button>

      <aside
        id="accessibility-panel"
        aria-label="Accessibility settings"
        className={`absolute right-0 top-0 w-[min(18rem,calc(100vw-2rem))] border border-parchment/20 bg-[rgb(var(--theme-surface-strong))] p-4 text-[rgb(var(--theme-text))] shadow-[0_18px_42px_rgba(0,0,0,0.22)] transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-[calc(100%+3.25rem)]"
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">Accessibility</p>
            <p className="mt-1 text-sm text-[rgb(var(--theme-text-muted))]">Adjust the site display.</p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close accessibility settings"
            className="inline-flex h-9 w-9 items-center justify-center border border-[rgb(var(--theme-border)/0.22)] transition hover:border-terracotta hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
          >
            <X size={16} />
          </button>
        </div>

        <div className="mt-5 space-y-3">
          <div className="flex items-center justify-between gap-3 border border-[rgb(var(--theme-border)/0.16)] p-3">
            <div>
              <p className="text-sm font-semibold">Text size</p>
              <p className="text-xs text-[rgb(var(--theme-text-muted))]">{prefs.textSize === "base" ? "Default" : prefs.textSize === "large" ? "Large" : "Larger"}</p>
            </div>
            <div className="flex">
              <button
                type="button"
                onClick={() => changeTextSize("down")}
                disabled={prefs.textSize === "base"}
                aria-label="Decrease text size"
                className="inline-flex h-9 w-9 items-center justify-center border border-[rgb(var(--theme-border)/0.22)] transition hover:border-terracotta hover:text-terracotta disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Minus size={15} />
              </button>
              <button
                type="button"
                onClick={() => changeTextSize("up")}
                disabled={prefs.textSize === "larger"}
                aria-label="Increase text size"
                className="-ml-px inline-flex h-9 w-9 items-center justify-center border border-[rgb(var(--theme-border)/0.22)] transition hover:border-terracotta hover:text-terracotta disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Plus size={15} />
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={() => updatePrefs({ ...prefs, highContrast: !prefs.highContrast })}
            aria-pressed={prefs.highContrast}
            className="flex w-full items-center justify-between gap-3 border border-[rgb(var(--theme-border)/0.16)] p-3 text-left transition hover:border-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
          >
            <span>
              <span className="block text-sm font-semibold">High contrast</span>
              <span className="block text-xs text-[rgb(var(--theme-text-muted))]">Increase foreground and border contrast.</span>
            </span>
            <Contrast size={18} className={prefs.highContrast ? "text-terracotta" : ""} />
          </button>

          <button
            type="button"
            onClick={() => updatePrefs({ ...prefs, reducedMotion: !prefs.reducedMotion })}
            aria-pressed={prefs.reducedMotion}
            className="flex w-full items-center justify-between gap-3 border border-[rgb(var(--theme-border)/0.16)] p-3 text-left transition hover:border-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
          >
            <span>
              <span className="block text-sm font-semibold">Reduce motion</span>
              <span className="block text-xs text-[rgb(var(--theme-text-muted))]">Limit animations and smooth scrolling.</span>
            </span>
            <ZapOff size={18} className={prefs.reducedMotion ? "text-terracotta" : ""} />
          </button>
        </div>

        <button
          type="button"
          onClick={resetPrefs}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 border border-[rgb(var(--theme-border)/0.22)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition hover:border-terracotta hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
        >
          <RotateCcw size={14} />
          Reset
        </button>
      </aside>
    </div>
  );
}
