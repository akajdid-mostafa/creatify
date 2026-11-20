/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/layouts/**/*.{js,jsx}",
    "./src/sections/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        maxH720: { raw: "(max-height: 700px)" },
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
