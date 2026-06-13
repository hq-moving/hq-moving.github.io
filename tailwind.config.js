/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      colors: {
        brand: {
          DEFAULT: '#003087',
          dark: '#002566',
          light: '#E6EDF5',
        },
        accent: {
          DEFAULT: '#29abe2',
          dark: '#2196c9',
          light: '#E8F6FC',
        },
      },
    },
  },
  plugins: [],
};
