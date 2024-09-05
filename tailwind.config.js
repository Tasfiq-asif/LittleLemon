/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Poppins:"'Poppins',sans-serif",
        'great-vibes': "great-vibes-regular,cursive"
      },
    },
  },
   plugins: [require("daisyui")],
}
