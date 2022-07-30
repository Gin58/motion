/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#222222",
      },
      keyframes: {},
      /* @keyframes duration | easing-function | delay | iteration-count | direction | fill-mode | play-state | name */
      animation: {},
      fontFamily: {},
    },
  },
  plugins: [],
};
