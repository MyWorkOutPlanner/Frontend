/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7C4DFF",
          100 : "#81809E"
        },
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E22",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
          200: "#F3F6FB",
          300: "#F4F4F6"
        },

      },
      fontFamily: {
        pthin: ["Overpass-Thin", "sans-serif"],
        pextralight: ["Overpass-ExtraLight", "sans-serif"],
        plight: ["Overpass-Light", "sans-serif"],
        pregular: ["Overpass-Regular", "sans-serif"],
        pmedium: ["Overpass-Medium", "sans-serif"],
        psemibold: ["Overpass-SemiBold", "sans-serif"],
        pbold: ["Overpass-Bold", "sans-serif"],
        pextrabold: ["Overpass-ExtraBold", "sans-serif"],
        pblack: ["Overpass-Black", "sans-serif"],
       
      },
    },
  },
  plugins: [],
}

