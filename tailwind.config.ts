import type { Config } from "tailwindcss";
import tailwindAnimatePlugin from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" }, // => @media (max-width: 1535px) { ... }
      xl: { max: "1279px" }, // => @media (max-width: 1279px) { ... }
      lg: { max: "1023px" }, // => @media (max-width: 1023px) { ... }
      md: { max: "767px" }, // => @media (max-width: 767px) { ... }
      sm: { max: "639px" }, // => @media (max-width: 639px) { ... }
      xs: { max: "500px" },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-black": "rgb(34,34,35)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "custom-banner": "url('/banner.webp')",
      },
    },
  },
  plugins: [tailwindAnimatePlugin],
} satisfies Config;
