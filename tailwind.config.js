/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
      },
      backgroundImage: {
        "radial-dark": "radial-gradient(#303b37, #1a1f1d)", // Custom radial gradient
      },
    },
  },
  plugins: [],
};