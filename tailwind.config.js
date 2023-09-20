/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        doctor: {
          primary: '#0FCFEC',
          secoandry: "#19D3AE",
          base: "#ffffff",
          neutral: "#3D4451"
        }
      }
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

