import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-variant": "var(--color-primary-variant)",
        "primary-dark": "var(--color-primary-dark)",

        secondary: "var(--color-secondary)",
        "secondary-dark": "var(--color-secondary-dark)",

        background: "var(--color-background)",
        "background-dark": "var(--color-background-dark)",

        surface: "var(--color-surface)",
        "surface-dark": "var(--color-surface-dark)",

        "card-inner-bg": "var(--color-card-inner-bg)",
        "card-inner-bg-dark": "var(--color-card-inner-bg-dark)",

        "text-primary": "var(--color-text-primary)",
        "text-primary-dark": "var(--color-text-primary-dark)",

        "text-secondary": "var(--color-text-secondary)",
        "text-secondary-dark": "var(--color-text-secondary-dark)",

        "text-hint": "var(--color-text-hint)",

        divider: "var(--color-divider)",
        "divider-dark": "var(--color-divider-dark)",

        "bottom-nav-bg": "var(--color-bottom-nav-bg)",
        "bottom-nav-bg-dark": "var(--color-bottom-nav-bg-dark)",

        "icon-color": "var(--color-icon-color)",
        "icon-color-dark": "var(--color-icon-color-dark)",

        green: "var(--color-green)",
        "green-dark": "var(--color-green-dark)",

        "green-light": "var(--color-green-light)",
        "green-light-dark": "var(--color-green-light-dark)", // 45% opacity

        red: "var(--color-red)",
        "red-dark": "var(--color-red-dark)",

        "red-light": "var(--color-red-light)",
        "red-light-dark": "var(--color-red-light-dark)", // 45% opacity

        blue: "var(--color-blue)",
        "blue-dark": "var(--color-blue-dark)",

        yellow: "var(--color-yellow)",
        "yellow-dark": "var(--color-yellow-dark)",

        "indicator-selected": "var(--color-indicator-selected)",
        "indicator-selected-dark": "var(--color-indicator-selected-dark)",

        "indicator-unselected": "var(--color-indicator-unselected)",
        "indicator-unselected-dark": "var(--color-indicator-unselected-dark)",

        "button-disabled-bg": "var(--color-button-disabled-bg)",
        "button-disabled-bg-dark": "var(--color-button-disabled-bg-dark)",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
