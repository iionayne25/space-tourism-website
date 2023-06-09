/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
      barlowCondensed: ["Barlow Condensed", "sans-serif"],
      bellefair: ["Bellefair", "serif"],
    },
    extend: {
      screens: {
        'md':'768px',
        "xl": "1440px",
      },
      backgroundImage: {
        "home-mobile": "url('/home/background-home-mobile.jpg')",
        "home-tablet": "url('/home/background-home-tablet.jpg')",
        "home-desktop": "url('/home/background-home-desktop.jpg')",
        "dest-mobile": "url('/destination/background-destination-mobile.jpg')",
        "dest-tablet": "url('/destination/background-destination-tablet.jpg')",
        "dest-desktop":
          "url('/destination/background-destination-desktop.jpg')",
        "crew-mobile": "url('/crew//background-crew-mobile.jpg')",
        "crew-tablet": "url('/crew//background-crew-tablet.jpg')",
        "crew-desktop": "url('/crew//background-crew-desktop.jpg')",
        "tech-mobile": "url('/technology/background-technology-mobile.jpg')",
        "tech-tablet": "url('/technology/background-technology-tablet.jpg')",
        "tech-desktop": "url('/technology/background-technology-desktop.jpg')",
      },
      colors: {
        lightBlue: "#D0D6F9",
        darkGray: "#383B4B",
        offBlack: "#0B0D17",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
