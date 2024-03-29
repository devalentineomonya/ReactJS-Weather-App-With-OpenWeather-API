/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode:"class",
    extend: {},
    fontFamily:{
      Chakra:["Chakra Petch"],
      Titillium:["Titillium Web"]

    }
  },
  plugins: [],
}