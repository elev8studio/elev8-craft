module.exports = {
  purge: ['./templates/**/*.twig'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '450px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      black: '#111111',
      white: '#ffffff',
      highlight: '#ec2d5b',
      dark: '#222222',
      darker: '#151515',
      lighter: '#aaaaaa',
      light: '#eeeeee',
      grey: '#eeeeee',
      navy: '#292752',
      midnight: '#15134f',
      slate: '#373e51',
      lightest: '#f7f7f7',
      mint: '#177e72',
      transparent: 'transparent',
    },
    fontFamily: {
      sans: ['muli', 'sans-serif'],
      serif: ['PlayfairDisplay', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
