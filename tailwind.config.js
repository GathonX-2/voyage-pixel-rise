/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['"Oswald"', 'sans-serif'],
        lato: ['"Lato"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0f172a',
          DEFAULT: '#0ea5e9',
          light: '#e0f2fe',
        },
        accent: {
          DEFAULT: '#ffa500', // orange thème original
          soft: '#e69500',
        },
      },
      boxShadow: {
        soft: '0 8px 30px rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [],
}
