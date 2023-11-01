/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Alfa Slab One"],
    },
  },
  plugins: [
    require("tailwindcss-brand-colors"),
  
  ],
};
