/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        my_bg_image: "url('/background.png')",
      },
      fontFamily: {
        coder: ["coder"],
      },
    },
  },
  plugins: [],
};
