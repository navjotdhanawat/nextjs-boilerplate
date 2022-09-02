/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {},
      spacing: {
        88: "22rem",
        112: "28rem",
        128: "32rem",
        160: "40rem",
      },
    },
  },
  plugins: [],
});
