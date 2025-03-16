/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2a4c9e',
        secondary: '#6b7db3',
        light: '#e6e6f2',
        dark: '#333333',
      }
    },
  },
  plugins: [],
}