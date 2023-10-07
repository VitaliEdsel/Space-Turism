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
        'background-crew-mobile': "url('./assets/crew/background-crew-mobile.jpg')",
        'background-crew-desktop': "url('./assets/crew/background-crew-desktop.jpg')",
        'background-crew-tablet': "url('./assets/crew/background-crew-tablet.jpg')",
        'background-technology-tablet': "url('./assets/technology/background-technology-tablet.jpg')",
        'background-technology-mobile': "url('./assets/technology/background-technology-mobile.jpg')",
        'background-technology-desktop': "url('./assets/technology/background-technology-desktop.jpg')",
        'launch-landscape': "url('./assets/technology/image-launch-vehicle-landscape.jpg')",
        'launch-portrait': "url('./assets/technology/image-launch-vehicle-portrait.jpg')",
        'capsule-landscape': "url('./assets/technology/image-space-capsule-landscape.jpg')",
        'capsule-portrait': "url('./assets/technology/image-space-capsule-portrait.jpg')",
        'spaceport-landscape': 'url("./assets/technology/image-spaceport-landscape.jpg")',
        'spaceport-portrait': 'url("./assets/technology/image-spaceport-portrait.jpg")',
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
