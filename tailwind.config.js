/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1d6c9e",
        "background-light": "#ffffff",
        "background-dark": "#0f172a",
      },
      fontFamily: {
        display: ["Orbitron", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
