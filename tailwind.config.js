/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          '800': '#272727'
        },
        blue: {
          '900': '#0e0c16'
        }
      },
      boxShadow: {
        'boxSm': '2px 3px 8px 1px #adadad',
        'boxPurple': '4px 4px 10px 2px #2c55acab',
        'headBottomPurple': '0 4px 6px #1e4d8bde',
      }
    },
    keyframes: {
      
    },
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
      
      'cel': {'max': '639px'},
    },
  },
  plugins: [],
}
