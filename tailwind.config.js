/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{
      'barlow': ['Barlow','sans-serif'],
      'barlowCondensed': ['Barlow Condensed','sans-serif'],
      'bellefair': ['Bellefair','serif']
      
    },
    extend: {
      backgroundImage: {
        'bg-home-mobile':"url('/home/background-home-mobile.jpg')",
        'bg-home-tablet':"url('/home/background-home-tablet.jpg')",
        'bg-home-desktop':"url('/home/background-home-desktop.jpg')",
        'dest-mobile':"url('/destination/background-destination-mobile.jpg')",
        'dest-tablet':"url('/destination/background-destination-tablet.jpg')",
        'dest-desktop':"url('/destination/background-destination-desktop.jpg')",
      },
      colors:{
        'lightBlue':'#D0D6F9'
      }
    },
   
  },
  plugins: [],
}