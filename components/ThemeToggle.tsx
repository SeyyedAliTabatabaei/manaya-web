"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

function getPreferredDark(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") return true;
    if (stored === "light") return false;
  } catch { }
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(getPreferredDark());
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      try { localStorage.setItem("theme", "dark"); } catch { }
    } else {
      root.classList.remove("dark");
      try { localStorage.setItem("theme", "light"); } catch { }
    }
  }, [isDark]);

  return (
    <button
      type="button"
      aria-label={isDark ? "تغییر به حالت روشن" : "تغییر به حالت تیره"}
      title={isDark ? "روشن" : "تیره"}
      onClick={() => setIsDark((v) => !v)}
      className="inline-flex items-center gap-2 rounded-full border border-divider bg-surface px-3 py-1.5 text-sm text-text-secondary hover:text-primary transition"
    >
      {isDark ? (
        // Sun icon
        <Image src="/icons/Sun1-Linear-32px.svg" alt="مانایا" className="text-primary-variant" width={20} height={20} />
      ) : (
        // Moon icon
        <Image src="/icons/Moon-Linear-32px.svg" alt="مانایا" className="text-primary-variant" width={20} height={20} />
      )}
      {/* <span className="hidden sm:inline">{isDark ? "روشن" : "تیره"}</span> */}
    </button>
  );
}
