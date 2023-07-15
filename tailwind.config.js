/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "r-primary": "30px",
        "r-secondary": "20px",
      },
      colors: {
        "c-primary": "#37383D",
        "c-secondary": "#242529",
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
