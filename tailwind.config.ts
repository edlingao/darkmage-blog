import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      text: '#fafafa',
      background: '#050505',
      primary: '#ae003c',
      secondary: '#001033',
      accent: '#e066ff',
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
