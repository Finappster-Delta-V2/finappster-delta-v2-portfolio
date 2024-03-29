/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["nagel-variable", "sans-serif"],
      },
      colors: {
        primary: "#BE1E2D",
      },
    },
  },
  plugins: [],
};
