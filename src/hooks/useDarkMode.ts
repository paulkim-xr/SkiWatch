import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

const STORAGE_KEY = "skiwatch-theme";

function getInitialMode(): ThemeMode {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function useDarkMode() {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const root = window.document.documentElement;
    root.classList.toggle("dark", mode === "dark");
    window.localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const toggle = () => setMode((prev) => (prev === "dark" ? "light" : "dark"));

  return {
    mode,
    isDark: mode === "dark",
    toggle,
    setMode,
  };
}
