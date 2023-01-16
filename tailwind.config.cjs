/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#146EB4",
        secondary: "#FAFAFA",
        dark: "#1A181E",
        medium: "#4D4D4D",
        light: "#F2F2F2",
      },
      width: {
        layout: "1120px",
      },
    },
  },
  plugins: [],
};
