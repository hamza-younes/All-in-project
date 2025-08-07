/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#e0f2fe",
      },

      fontFamily:{
        bodyfont:['Libertinus']
      }
    },
  },
  plugins: [],
}

