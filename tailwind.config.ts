import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        panel: "#111318",
        border: "#222733",
        neon: {
          blue: "#2dd4bf",
          purple: "#8b5cf6",
          pink: "#ec4899"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(45,212,191,0.3), 0 0 24px rgba(45,212,191,0.08)"
      }
    }
  },
  plugins: []
};

export default config;
