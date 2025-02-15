/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          800: '#2B5329', // Custom darker green
        },
        yellow: {
          400: '#FFB800', // Custom warm yellow
          300: '#FFC933', // Lighter yellow for hover states
        },
      },
    },
  },
  plugins: [],
};