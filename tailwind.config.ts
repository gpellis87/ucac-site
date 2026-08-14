import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#1a1a1a",
        parchment: "#f5f0eb",
        navy: "#0c2c5c",
        purple: "#663e7f",
        teal: "#0f6883",
        orange: "#e0611f",
        olive: "#949635",
        slatecool: "#677388",
        slatedeep: "#2a3240",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        logo: ["var(--font-logo)", "Arial", "sans-serif"],
      },
      boxShadow: {
        glow: "0 15px 45px rgba(12, 44, 92, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
