"use client";

import Image from "next/image";
import { useThemeCustom } from "./ThemeProvider";

export default function ThemeToggle() {
    const { isDark, toggleTheme } = useThemeCustom();

    return (
        <button
            type="button"
            aria-label={isDark ? "تغییر به حالت روشن" : "تغییر به حالت تیره"}
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-text-secondary hover:text-primary transition"
        >
            {isDark ? (
                <Image
                    src="/icons/Sun1-Linear-32px.svg"
                    alt="مانایا"
                    width={24}
                    height={24}
                />
            ) : (
                <Image
                    src="/icons/Moon-Linear-32px.svg"
                    alt="مانایا"
                    width={24}
                    height={24}
                />
            )}
        </button>
    );
}
