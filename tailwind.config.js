/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
      },
      colors: {
        testRed: "#ff0000",
        gold: "#D4AF37",
        brown: '#3B1F0D',
        darkBrown: "#3B1F0D",
        bronzeGold: "#D4AF37",
        warmBeige: "#F5E9D3",
        burntGold: "#AD8328",
        deepBlack: "#1A120B",
        darkPink: "#970747"
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      }
    },
  },
  plugins: [],
  safelist: [
    'text-testRed',
    'text-warmBeige',
    'text-bronzeGold',
    'hover:text-darkPink'
  ],
}



