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
        brand: {
          blue: "#1468E8",
          navy: "#07152F",
          "light-blue": "#EAF3FF",
        },
        surface: {
          light: "#FFFFFF",
          subtle: "#F7F9FC",
          dark: "#050D1A",
        },
        text: {
          muted: "#5A6E85",
        },
      },
    },
  },
  plugins: [],
};
export default config;