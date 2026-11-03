/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        cream: '#fff7fa',
        sand: '#f5e4eb',
        clay: '#bd6486',
        rose: '#e8b6c0',
        mocha: '#954267',
        ink: '#000000',
      },
    },
  },
  plugins: [],
};

export default config;
