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
    },
  },
  plugins: [],
}
