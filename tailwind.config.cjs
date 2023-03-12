/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      screens: {
        'ms': '320px',

        'mm': '375px',

        'ml': '425px',

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        godfather: "url('/src/vetores/fundoGodfather.jpg')",
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        purple: {
          700: '#180C1C',
        },
        red: {
          500: '#FF2511',
        },
        orange: {
          300: '#FF844B',
          500: '#FD3920',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          400: '#323238',
          500: '#29292E',
          600: '#121214',
          700: '#262428',
          800: '#1B1A1D',
          900: '#09090A',
        }
      },
    },
  },
  plugins: [],
}
