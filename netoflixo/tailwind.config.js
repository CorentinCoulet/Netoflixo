/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradiente': 'linear-gradient(180deg, rgba(0,0,0,0.7) 10%, transparent)',
        'borderOpen': '1px solid #ccc',
      },
      colors: {
        'grayHov': 'rgba(202, 199, 199, 0.863)', 
        'blackNeto': '#141414',
      }
    },
  },
  plugins: [],
}