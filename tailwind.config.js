const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["var(--nimbus)", ...fontFamily.sans],
      // },
      colors: {
        darkYellow: "#ffcd00",
        darkGray: "#252525",
        mediumGray: "#2d2d2d",
        lightBlue: "#0058ad",
        lightYellow: "#ffd733",
      },
    },
  },
  plugins: [],
};
