const { fontFamily, colors } = require("tailwindcss/defaultTheme");
const Unfonts = require("unplugin-fonts");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito", ...fontFamily.sans],
      heebo: ["Heebo", ...fontFamily.sans],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#fea116",
        dark: "#0F172B",
        white: "#fff",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
