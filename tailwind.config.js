/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
      './public/index.html',
      './src/**/*.{js,jsx,ts,tsx}'
    ],
  theme: {
    fontFamily:{
      'PFont':['"P Font"', 'Poppins'],
      'LatoFont':['"Lato Font"', 'Lato'],      
    },
    extend: {},
  },
  plugins: [   
    // ...
  ]
}