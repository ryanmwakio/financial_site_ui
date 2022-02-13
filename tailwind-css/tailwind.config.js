const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      //custom colors start here
      blue: colors.blue,
      darkGreen: "#043a40",
      mediumGreen: "#06818f",
      lightGreen: "#23acba",
      white: "#fff",
      lightGrey: "#fff5fe",
      brown: "#f1ab6c",
      orange: "#f89521",
      grey: "hsl(233, 8%, 62%)",
      blackBluish: "#122344",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
