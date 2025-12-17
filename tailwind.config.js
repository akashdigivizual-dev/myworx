/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e87a0d',
        'primary-dark': '#e55a2b',
      },
    },
  },
  plugins: [],
}

