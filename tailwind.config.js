/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-violet": "hsl(273, 75%, 66%)",
        "soft-blue": "hsl(240, 73%, 65%)",
        "soft-red": "hsl(14, 88%, 65%)",
        "desaturated-blue": "hsl(238, 29%, 16%)",
      },
    },
    screens: {
      msm: { max: "640px" },
      sm: "640px",
    },
  },
  plugins: [],
};
