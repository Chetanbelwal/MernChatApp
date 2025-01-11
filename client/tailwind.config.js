/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}", // Ensure JSX files are included
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
