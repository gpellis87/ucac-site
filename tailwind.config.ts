import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#1a1a1a",
        parchment: "#f5f0eb",
        navy: "#173f73",
        purple: "#73528f",
        teal: "#2d9aa3",
        orange: "#e86a2a",
        olive: "#a6a33a",
        slatecool: "#677388",
        slatedeep: "#2a3240",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 15px 45px rgba(23, 63, 115, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
