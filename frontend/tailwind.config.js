/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0A192F',
        steelGrey: '#8892B0',
        lightGrey: '#CCD6F6',
        accent: '#64FFDA',
      }
    },
  },
  plugins: [],
}
