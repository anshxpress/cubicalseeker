/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'mine-shaft': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#3d3d3d',
        '950': '#2d2d2d',
    },   
    'sapphire': {
     '50': '#ddffff',
     '100': '#cafbff',
     '200':'#9bf2fc',
     '300':'#67eaf9',
     '400':'#3ee4f6',
     '500':'#22e0f5',
     '600':'#00def5',
     '700':'#00c5da',
     '800': '#00afc4',
     '900':'#0098ab'
    },
    
      }
    },
  },
  plugins: [],
}