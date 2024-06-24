/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{vue, js, ts, jsx, tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'alata': ['Alata', 'sans-serif'],
        'josefin-sans': ['Josefin Sans', 'sans-serif']
      },
      colors: {
        'white': 'hsl(0, 0%, 100%)',
        'black': 'hsl(0, 0%, 0%)',
        'dark-grey': 'hsl(0, 0%, 55%)',
        'very-dark-grey': 'hsl(0, 0%, 41%)'
      },
      margin: {
        '-12': '-12%',
      }
    },
  },
  plugins: [],
}

