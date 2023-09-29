/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-home-desktop': "url('./assets/home/background-home-desktop.jpg')",
      },
      width: {
        '125': '500px',
        '68px': '68px',
      },
      height: {
        '0.25': '1px'
      },
    },
  },
  plugins: [],
}
