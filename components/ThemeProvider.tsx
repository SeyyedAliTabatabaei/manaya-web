"use client";

import { createContext, useContext, useEffect, useState } from "react";

function getPreferredDark(): boolean {
    if (typeof window === "undefined") return false;
    try {
        const stored = localStorage.getItem("theme");
        if (stored === "dark") return true;
        if (stored === "light") return false;
    } catch {}
    return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );
}

type ThemeContextType = {
    isDark: boolean;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
    isDark: false,
    toggleTheme: () => {},
});

type ThemeProviderProps = {
    children: React.ReactNode;
    attribute?: string;
    defaultTheme?: "light" | "dark" | "system";
    enableSystem?: boolean;
};

export function ThemeProvider({
                                  children,
                                  attribute,
                                  defaultTheme = "system",
                                  enableSystem = true,
                              }: ThemeProviderProps) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (defaultTheme === "system") {
            setIsDark(getPreferredDark());
        } else {
            setIsDark(defaultTheme === "dark");
        }
    }, [defaultTheme]);

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add(attribute || "dark");
            try {
                localStorage.setItem("theme", "dark");
            } catch {}
        } else {
            root.classList.remove(attribute || "dark");
            try {
                localStorage.setItem("theme", "light");
            } catch {}
        }
    }, [isDark, attribute]);

    const toggleTheme = () => setIsDark((v) => !v);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}


export function useThemeCustom() {
    return useContext(ThemeContext);
}
