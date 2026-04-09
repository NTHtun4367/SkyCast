/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        orange: "#FF6442",
        skyBlue: "#45BBFC",
        purpleDark: "#182233",
        secondaryDark: "#93A1B9",
      },
    },
  },
  plugins: [],
};
