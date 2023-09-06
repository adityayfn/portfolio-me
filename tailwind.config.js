/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00DD83",

          secondary: "#12b488",

          accent: "#f970f5",

          neutral: "#252d41",

          "base-100": "#222",

          info: "#7abbf0",

          success: "#1a8454",

          warning: "#e78b13",

          error: "#ff0000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
