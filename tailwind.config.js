/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom__primary': '#B3CC59',
        'custom__secondary': '#E6EBD0',
        'custom__third': '#FFF8DC',
        'custom__alert': '#D02424',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
