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
      darker: '#0e181b',
      dark: '#161f25',
      gunmetal: '#19323c',
      midnight: '#15134f',
      navy: '#292752',
      charcoal: '#124154',
      blue: '#1d6b8a',
      mint: '#177e5d',
      highlight: '#ec2d5b',
      grey: '#cccccc',
      light: '#eeeeee',
      cream: '#f3f7f0',
      white: '#ffffff',
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
