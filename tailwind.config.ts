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
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      orbitron: ['Orbitron', 'sans-serif'],
      redhat: ['Red Hat Display', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
