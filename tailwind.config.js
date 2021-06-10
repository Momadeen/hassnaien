module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      textGray: "#767676",
      backgroundGray: "#f8f8f8",
      black: "#000",
      white: "#fff",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
  },
};
