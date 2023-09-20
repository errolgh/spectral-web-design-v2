/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        efferBlue: '#00315A',
        darkEfferBlue: '#002c58',
      },
      fontFamily: {
        ubuntu: ["Ubuntu, sans-serif"],
        poppins: ["Poppins, sans-serif"],
      },
    },
  },
  plugins: [],
}
