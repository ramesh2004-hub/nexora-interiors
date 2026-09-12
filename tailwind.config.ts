import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#201C18",
        sand: "#E9E0D2",
        cream: "#F7F4EE",
        clay: "#A98261",
        olive: "#67695B"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-cormorant)", "serif"]
      }
    }
  },
  plugins: []
};
export default config;
