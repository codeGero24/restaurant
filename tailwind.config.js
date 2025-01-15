const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      nunito: ['Nunito', ...fontFamily.sans],
      heebo: ['Heebo', ...fontFamily.sans],
      pacifico: ['Pacifico', ...fontFamily.sans],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1540px',
    },
    extend: {
      colors: {
        primary: '#fea116',
        dark: '#0F172B',
        light: '#f1f8ff',
      },
      animation: {
        'fede-in': 'fede-in 1s ease-out',
        'fede-in-low': 'fede-in-low 1s ease-out',
        'spin-slow': 'spin 30s linear infinite',
        'slide-in-up': 'slide-in-up 1s both',
        'slide-in-down': 'slide-in-down 1s both',
        'slide-in-right': 'slide-in-right 1s both',
        'slide-in-left': 'slide-in-left 1s both',
      },
      keyframes: {
        'fede-in': {
          '0%': { opacity: '0', transform: 'translate3d(0,20px,0)' },
          '100%': { opacity: '1', transform: 'translateZ(0)' },
        },
        'fede-in-low': {
          '0%': { opacity: '0.5', transform: 'translate3d(0,0,0)' },
          '100%': { opacity: '1', transform: 'translateZ(0)' },
        },
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
        'slide-in-up': {
          '0%': {
            transform: 'translate3d(0,100%,0)',
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
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
