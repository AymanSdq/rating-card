/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        orangeColor : "hsl(25, 97%, 53%)",
        lightGrey : "hsl(217, 12%, 63%)",
        mediumGrey : "hsl(216, 12%, 54%)",
        lightBlue : "hsl(213, 19%, 14%)",
        darkBlue : "hsl(213, 19%, 18%)",
        veryDarkBlue : "hsl(216, 12%, 8%)"
      }
    },
  },
  plugins: [],
}

