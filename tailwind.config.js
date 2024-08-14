/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
    },

    extend: {
      colors: {
        darkgray: 'hsl(0, 0%, 63%)',
        Black: "hsl(0, 0%, 0%)",
        White: "hsl(0, 0%, 100%)",
        veryDarkGray: "hsl(0, 0%, 27%)"
      },
      fontFamily: {
       'spartan': ['"League Spartan"', 'sans-serif'],
      },
      letterSpacing: {
        '15px': '15px',
        "5px" :"5px",
        "2px":'2px'
      },
      fontSize:{
        "11px":"11px",
        "10px": '10px'
      },
      lineHeight:{
        "1.2":"1.2"
      }
    },
  },
  plugins: [],
}