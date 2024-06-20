import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    container: {
      padding: {
        DEFAULT: "16px"
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1310px",
    },
    extend: {
      fontFamily: {
        alexBrush: [`var(--font-alexBrush)`, "sans-serif"],
        montserrat: [`var(--font-montserrat)`, "sans-serif"]
      },
      colors: {
        primary: "#06062a",
        secondary: "#151538",
        tertiary: "#242445",
        accent: {
          DEFAULT: "#7f1cfc",
          hover: "#6519c6"
        }
      },
      keyframes: {
        'lds-ellipsis1': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        'lds-ellipsis2': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(24px, 0)' },
        },
        'lds-ellipsis3': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
      },
      animation: {
        'lds-ellipsis1': 'lds-ellipsis1 0.6s infinite cubic-bezier(0, 1, 1, 0)',
        'lds-ellipsis2': 'lds-ellipsis2 0.6s infinite cubic-bezier(0, 1, 1, 0)',
        'lds-ellipsis3': 'lds-ellipsis3 0.6s infinite cubic-bezier(0, 1, 1, 0)',
      },
    },
  },
  plugins: [],
};
export default config;
