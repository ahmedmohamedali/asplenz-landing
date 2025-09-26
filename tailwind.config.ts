
import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
  theme: {
    extend: { colors: { brand: { DEFAULT:"#0F172A", accent:"#6EE7B7" } } }
  },
  plugins: [],
};
export default config;
