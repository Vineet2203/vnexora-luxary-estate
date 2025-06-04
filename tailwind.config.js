/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
  extend: {
    fontFamily: {
      heading: ['"Playfair Display"', 'serif'],
    },
    colors: {
      gold: '#D4AF37',
      brown: '#3B1F0D',
    },
  },
},
  plugins: [],
}


