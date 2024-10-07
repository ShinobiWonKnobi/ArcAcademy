/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sage': '#AEB4A9',
        'pale-dogwood': '#E0C1B3',
        'pastel-pink': '#D89A9E',
        'blue-ryb': '#5386E4',
        'gunmetal': '#223843',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}