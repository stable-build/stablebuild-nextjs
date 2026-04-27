import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 20px 80px rgba(250, 101, 30, 0.16)",
        panel: "0 16px 48px rgba(15, 23, 42, 0.08)",
      },
      colors: {
        ember: "#fa651e",
        ink: "#18181b",
        paper: "#f7f7f3",
        line: "#d7d3ca",
        mist: "#efebe4",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(24,24,27,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,24,27,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
