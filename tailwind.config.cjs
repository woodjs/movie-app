/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '380px',
      },
      colors: {
        black: '#191624',
      },
      backgroundImage: {
        brand:
          'linear-gradient(90deg, rgb(213, 76, 0) 8.38%, rgb(245, 102, 0) 52.76%, rgb(255, 146, 70) 100%)',
      },

      textColor: {
        lightGray: '#F1EFEE',
        primary: '#FAFAFA',
        secColor: '#efefef',
        navColor: '#BEBEBE',
      },
      backgroundColor: {
        mainColor: '#fefefe',
        secondaryColor: '#F0F0F0',
        blackOverlay: 'rgba(0, 0 ,0 ,0.3)',
      },
      boxShadow: {
        glow: '0 0 18px rgb(255, 0, 0, 0.7);',
        glowLight: '0 0 24px rgb(255, 0, 0, 0.5)',
      },
      animation: {
        slowMove1: 'slowMove1 10s ease-in-out infinite alternate',
        slowMove2: 'slowMove2 12s ease-in-out infinite alternate',
      },
      keyframes: {
        slowMove1: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(20px, 20px)' },
        },
        slowMove2: {
          '0%': {
            transform: 'translate(-20%, -20%) rotate(45deg)',
            filter: 'blur(80px)',
          },
          '100%': {
            transform: 'translate(30%, 30%) scale(1.5, 1.2) rotate(45deg)',
            filter: 'blur(100px)',
          },
        },
      },
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      robotoCondensed: ['Roboto Condensed', 'sans-serif'],
    },
  },
  plugins: [],
}
