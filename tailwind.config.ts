import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7B1FA2",
        "primary-variant": "#4A0072",
        "primary-dark": "#BA68CB",

        secondary: "#E040FB",
        "secondary-dark": "#CE93D8",

        background: "#F2F0F5",
        "background-dark": "#121212",

        surface: "#FFFFFF",
        "surface-dark": "#1E1B24",

        "card-inner-bg": "#ECE7F1",
        "card-inner-bg-dark": "#2A2530",

        "text-primary": "#212121",
        "text-primary-dark": "#FFFFFF",

        "text-secondary": "#616161",
        "text-secondary-dark": "#B0B0B0",

        "text-hint": "#9E9E9E",

        divider: "#E0E0E0",
        "divider-dark": "#373737",

        "bottom-nav-bg": "#FFFFFF",
        "bottom-nav-bg-dark": "#1E1E1E",

        "icon-color": "#7B1FA2",
        "icon-color-dark": "#CE93D8",

        green: "#4CAF50",
        "green-dark": "#81C784",

        "green-light": "#C8E6C9",
        "green-light-dark": "#388E3C80", // 45% opacity

        red: "#D32F2F",
        "red-dark": "#EF5350",

        "red-light": "#FFCDD2",
        "red-light-dark": "#B71C1C80", // 45% opacity

        blue: "#2196F3",
        "blue-dark": "#64B5F6",

        yellow: "#FFC107",
        "yellow-dark": "#FFD54F",

        "indicator-selected": "#7B1FA2",
        "indicator-selected-dark": "#CE93D8",

        "indicator-unselected": "#D1C4E9",
        "indicator-unselected-dark": "#555555",

        "button-disabled-bg": "#DDD6E3",
        "button-disabled-bg-dark": "#3A3540",
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
