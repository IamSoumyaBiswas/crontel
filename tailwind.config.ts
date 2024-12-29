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
         primary:"#FE9411",
         textPrimary:"#292929",
         textSecendory:"#4F4F4F",
         priamryShadow:"#6A6969",
         secendaryShadow:"#BFBFBF",
         lightShadow:"#B9B7B7",
         darkBackground:"#000203"
      },
    },
  },
  plugins: [],
} satisfies Config;
