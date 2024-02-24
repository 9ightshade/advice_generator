/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    color:{
LightCyan:"hsl(193, 38%, 86%)",
NeonGreen: "hsl(150, 100%, 66%)",
GrayishBlue: "hsl(217, 19%, 38%)",
DarkGrayishBlue: "hsl(217, 19%, 24%)",
DarkBlue: "hsl(218, 23%, 16%)"
    },
font:{
  fontSize:"200px",
  fontFamily:"Manrope",
  fontWeight:800
},

    extend: {
      
    },
  },
  plugins: [],
}

