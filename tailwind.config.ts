import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#D0103A",
        secondary: "#003F57",
        opac: "rgba(255, 255, 255, 0.08)",
        transparent: "rgba(255, 255, 255, 0.15)",
        shad: "rgba(128, 159, 171, 0.2)",
        aboutBg: "rgba(22, 51, 0, 0.12)",
        offerLine: "rgba(255, 255, 255, 0.3)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
