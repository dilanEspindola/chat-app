/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "320px",
      sm: "400px",
      md: "600px",
      lg: "1000px",
      xl: "1440px",
    },
  },
  plugins: [],
};
