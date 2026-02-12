import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          100: "#f9f1d8",
          200: "#f0deaa",
          300: "#e6c67d",
          400: "#ddb055",
          500: "#d4af37", // Base Gold
          600: "#aa8c2c",
          700: "#806921",
          800: "#554616",
          900: "#2b230b",
        },
        charcoal: {
          500: "#2d2d2d",
          800: "#1a1a1a",
          900: "#121212",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/gallery/gold-pour-bg.jpg')", // Placeholder
      },
    },
  },
  plugins: [],
} satisfies Config;
