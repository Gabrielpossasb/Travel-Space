/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          '200': '#a0a0a0',
          '600': '#2e2e2e',
          '700': '#2B2B2B',
          '800': '#232323',
        },
        blue: {
          '100': '#89abc5',
          '200': '#6D98CB',
          '300': '#456379',
          '400': '#2F414E',
          '600': '#23303a',
          '800': '#20292F',
          '900': '#151b1f',
        }
      },
      boxShadow: {
        'boxSmBlue': '2px 2px 8px 3px #182025ff',
        'boxSm': '3px 3px 8px 2px #0000004b',
        'boxMd': '4px 4px 14px 4px #0000004b',
        'boxLg': '8px 8px 30px #0000006e',
        'boxXl': '29px 16px 26px #0000003D',
        'box2xl-y': '0px -12px 24px 8px #00000066 , 0px 12px 24px 8px #00000066',

        'card': '15px 15px 30px 10px #0000006e',
        'topMd': '-20px -20px 12px #00000088',
        'bottomMd': '0 8px 10px #00000077',

        'insetTitle': 'inset 5px 5px 15px #00000065',
        'insetSm': 'inset 2px 4px 7px #000000bd , 6px 6px 10px #00000079',
      },
      animation: {
        'rotateSmooth': 'rotateSmooth 1s ease-in-out',
        'selectMoviment': 'selectMoviment 4s infinite ease-in-out',
        'rotate': 'rotate 1s infinite ease forwards',
      }
    },
    keyframes: {
      'rotateSmooth': {
        '0%': { transform: 'rotate(0deg)' },
        '30%': { transform: 'rotate(210deg)' },
        '50%': { transform: 'rotate(140deg)' },
        '70%': { transform: 'rotate(195deg)' },
        '80%': { transform: 'rotate(165deg)' },
        '90%': { transform: 'rotate(185deg)' },
        '95%': { transform: 'rotate(175deg)' },
        '100%': { transform: 'rotate(180deg)' },
      },
      'selectMoviment': {
        '0%': { transform: 'translate(0px, 0px)' },
        '17%': { transform: 'translate(8px, 5x)' },
        '34%': { transform: 'translate(8px, -5px)' },
        '50%': { transform: 'translate(0px, 0px)' },
        '67%': { transform: 'translate(-8px, -5px)' },
        '84%': { transform: 'translate(-8px, 5px)' },
        '100%': { transform: 'translate(0px, 0px)' },
      },
      'rotate': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      }
    },
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
      
      'cel': {'max': '639px'},

      'cel500': {'max': '500px'},

      'mdMax': {'max': '767px'},
    },
  },
  plugins: [],
}
