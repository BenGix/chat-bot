const { list } = require("postcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(263deg, #3AB9C9 -72.65%, #004F59 99.78%);",
        "gradient-button":
          "linear-gradient(226deg, #3AB9C9 12.73%, #2695A2 92.78%);",
      },
      textColor: {
        dark: "#051214",
        light: "#B0B0B1",
        darkBlue: "#363853",
      },
      backgroundColor: {
        lighter: "#F7F8FA",
        light: "#F7F8FA",
        lightGray: "#E9ECF1",
        mainGray: "#DDDD",
        blue: "#3AB9C9",
      },
      boxShadow: {
        dark: " 0px 2px 27.3px 0px rgba(0, 0, 0, 0.10);",
        blue: "0px 0px 10.4px 3px rgba(58, 185, 201, 0.25)",
      },
    },
  },
  plugins: [],
};
