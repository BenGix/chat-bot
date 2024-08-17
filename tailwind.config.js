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
      },
      textColor: {
        dark: "#051214",
      },
      backgroundColor: {
        lighter: "#F7F8FA",
        light: "#E9ECF1",
        blue: "#3AB9C9",
      },
      boxShadow: {
        dark: " 0px 2px 27.3px 0px rgba(0, 0, 0, 0.10);",
      },
    },
  },
  plugins: [],
};
