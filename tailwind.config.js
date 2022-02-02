module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caption: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#82AB2C",
        background: "#efefef",
      },
      screens: {
        container: "1440px",
      },
    },
  },
  plugins: [],
};
