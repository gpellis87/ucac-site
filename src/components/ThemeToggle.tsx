"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "uccac-theme";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export default function ThemeToggle({ mobile = false }: { mobile?: boolean }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const nextTheme: Theme = stored === "dark" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      className={
        mobile
          ? "ghost-btn w-full justify-center gap-2 text-center"
          : "inline-flex h-10 w-10 items-center justify-center border transition hover:-translate-y-[1px]"
      }
      style={
        mobile
          ? undefined
          : {
              borderColor: "rgb(var(--theme-border) / 0.25)",
              background: "rgb(var(--theme-surface) / 0.7)",
              color: "rgb(var(--theme-text))",
            }
      }
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
      {mobile ? (theme === "light" ? "Dark Theme" : "Light Theme") : null}
    </button>
  );
}
