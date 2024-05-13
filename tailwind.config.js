/** @type {import('tailwindcss').Config} */

const {
  iconsPlugin,
  getIconCollections,
} = require("@egoist/tailwindcss-icons");

export default {
  content: [],
  theme: {
    extend: {
      // colors: {
      //   gray: {
      //     50: "#f6f6f6",
      //     100: "#e7e7e7",
      //     200: "#d1d1d1",
      //     300: "#b0b0b0",
      //     400: "#888888",
      //     500: "#6d6d6d",
      //     600: "#5d5d5d",
      //     700: "#4f4f4f",
      //     800: "#454545",
      //     900: "#3d3d3d",
      //     950: "#303030",
      //   },
      //   primary: {
      //     50: "#EFFDF5",
      //     100: "#D9FBE8",
      //     200: "#B3F5D1",
      //     300: "#75EDAE",
      //     400: "#00DC82",
      //     500: "#00C16A",
      //     600: "#00A155",
      //     700: "#007F45",
      //     800: "#016538",
      //     900: "#0A5331",
      //     950: "#052e16",
      //   },
      // },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    iconsPlugin({
      collections: getIconCollections(["circum"]),
    }),
  ],
};
