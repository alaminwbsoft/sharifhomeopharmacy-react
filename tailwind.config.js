/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000', 
        secondary: '#333333', 
        accent: '#F59E0B',
        customGray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
        },
    },
  },
  plugins: [],
}}