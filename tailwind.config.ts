import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lionzGold:  "#E0B000",
        lionzNavy:  "#001B44",
        lionzDark:  "#111111",
        lionzWhite: "#FFFFFF",
        lionzLight: "#F5F5F5",
      },
      fontFamily: {
        sans: ["Montserrat", "Poppins", "Arial", "sans-serif"],
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        ticker: "ticker 20s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
