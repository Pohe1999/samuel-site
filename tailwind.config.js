/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
}
