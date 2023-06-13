/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kanit", "sans-serif"],
      },
      colors: {
        primary: {
          500: "#B5EDF8",
          600: "#93D3DF",
          700: "#76B9C7",
        },
        secondary: {
          500: "#AAE3C6",
          600: "#80C2A1",
          700: "#569F7A",
        },
        accent: {
          500: "#569F7A",
          600: "#8F6540",
          700: "#754822",
        },
      },
    },
  },
  plugins: [],
};
