/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        menu: "#0F0F0F"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        oleo: ["Oleo Script", "sans-serif"],
        serrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "grid-mobile": "url('./src/assets/images/rectangle-grid-mobile.png')",
        "grid-desk": "url('./src/assets/images/rectangle-grid.png')",
        "text-gradient": "linear-gradient(to right, #4FC3F7, #FFFFFF)",
      },
    },
  },
  plugins: [],
};
