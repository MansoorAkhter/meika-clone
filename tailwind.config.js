/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#131313",
        secondary: "#DF2919",
        mainGray: "#969696",
      },
      animation: {
        'slide-rotate': 'slide-rotate 8s linear infinite',
      },
      keyframes: {
        'slide-rotate': {
          '0%': { transform: 'translateX(0%) rotate(-0deg)' },
          '100%': { transform: 'translateX(-25%) rotate(-0deg)' },
        },
      },
    },
  },
  plugins: [],
};
