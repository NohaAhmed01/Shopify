/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './templates/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './layout/**/*.liquid',
  ],
  theme: {
    extend: {
      height: {
        '94': '22rem', // your custom h-94
      },
    },
  },
  plugins: [],
}
