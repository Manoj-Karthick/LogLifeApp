/** @type {import('tailwindcss').Config} */

const {
  iconsPlugin,
  getIconCollections,
} = require("@egoist/tailwindcss-icons");

export default {
  darkMode: "class",
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["circum"]),
    }),
  ],
};
