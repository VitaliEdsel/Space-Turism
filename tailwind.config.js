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
        'background-home-tablet': "url('./assets/home/background-home-tablet.jpg')",
        'background-home-mobile': "url('./assets/home/background-home-mobile.jpg')",
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
