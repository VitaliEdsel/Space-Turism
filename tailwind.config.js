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
        'background-destination-desktop': "url('./assets/destination/background-destination-desktop.jpg')",
        'background-destination-tablet': "url('./assets/destination/background-destination-tablet.jpg')",
        'background-destination-mobile': "url('./assets/destination/background-destination-mobile.jpg')",
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
