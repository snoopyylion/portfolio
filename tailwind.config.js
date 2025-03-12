/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '200px', // custom breakpoint for very small screens
      },
      colors: {
        customGray: "#ddd", // Added custom gray color
      },
    },
  },
  plugins: [],
};
