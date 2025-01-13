const { fontFamily, colors } = require('tailwindcss/defaultTheme');
const Unfonts = require('unplugin-fonts');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      nunito: ['Nunito', ...fontFamily.sans],
      heebo: ['Heebo', ...fontFamily.sans],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#fea116',
        dark: '#0F172B',
        white: '#fff',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'slide-in-up': 'slide-in-up 1s both',
        'slide-in-down': 'slide-in-down 1s both',
        'slide-in-right': 'slide-in-right 1s both',
        'slide-in-left': 'slide-in-left 1s both',
      },
      keyframes: {
        'slide-in-left': {
          '0%': {
            transform: 'translate3d(-100%,0,0)',
            visibility: 'visible',
          },
          '100%': {
            transform: 'translateZ(0)',
          },
        },
        'slide-in-down': {
          '0%': {
            transform: 'translate3d(0,-100%,0)',
            visibility: 'visible',
          },
          '100%': {
            transform: 'translateZ(0)',
          },
        },
        'slide-in-right': {
          '0%': {
            transform: 'translate3d(100%,0,0)',
            visibility: 'visible',
          },
          '100%': {
            transform: 'translateZ(0)',
          },
        },
        'slide-in-up': {
          '0%': {
            transform: 'translate3d(0,100%,0)',
            visibility: 'visible',
          },
          '100%': {
            transform: 'translateZ(0)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
