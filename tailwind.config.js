/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        colors: {
          primary: '#0A192F',
          secondary: '#64ffda',
          accent: '#112240',
          muted: '#8892b0',
        },
      },
    },
    darkMode: 'class',
    plugins: [],
  }
  