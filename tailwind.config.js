/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#252227', // Brand Black
          light: '#36343B', // Slightly lighter brand black
        },
        secondary: {
          DEFAULT: '#EFEEF0', // Off White
          dark: '#E5E4E6', // Slightly darker off-white
        },
        accent: {
          DEFAULT: '#DFEF00', // Brand Yellow
          light: '#E5F333', // Slightly lighter yellow
        },
        white: '#FFFFFF', // Pure white for accents
      },
    },
  },
  plugins: [],
};