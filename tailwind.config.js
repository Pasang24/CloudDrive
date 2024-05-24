/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        120: "repeat(auto-fill, minmax(120px, 1fr))",
        160: "repeat(auto-fill, minmax(160px, 1fr))",
        200: "repeat(auto-fill, minmax(200px, 1fr))",
        220: "repeat(auto-fill, minmax(220px, 1fr))",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({ preferredStrategy: "pseudoelements" }),
  ],
};
