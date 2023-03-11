/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}","*.html","./js/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom__primary': '#B3CC59',
        'custom__secondary': '#E6EBD0',
        'custom__third': '#FFF8DC',
        'custom__alert': '#D02424',
      },
      minHeight: {
        '1/2': '50%',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
