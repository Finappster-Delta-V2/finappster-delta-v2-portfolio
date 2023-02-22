/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fontspring-DEMO-proximanovacond", "sans-serif"],
      },
    },
  },
  plugins: [],
};
