window.addEventListener('DOMContentLoaded', function () {
  openMenu()
  animateHeader()
  darkMode()
})

/**
 * Begin Mobile Menu
 */
let openMenu = () => {
  const burger = document.querySelector('.burger-container')
  burger.onclick = () => {
    let header = document.querySelector('.header')
    header.classList.toggle('navigation-open')
  }
}
/**
 * End Mobile Menu
 */

/**
 * Begin Header Animation
 */
let animateHeader = () => {
  let previous = window.pageYOffset
  document.addEventListener('scroll', () => {
    let header = document.querySelector('.header')
    let windowOffset = window.pageYOffset
    window.pageYOffset > 50
      ? header.classList.add('scroll')
      : header.classList.remove('scroll'),
      windowOffset > previous
        ? header.setAttribute(
        'style',
        'transform: translateY(calc(-100% + 0px)) translateZ(0px)',
        )
        : header.setAttribute('style', 'transform: none'),
      (previous = windowOffset <= 0 ? 0 : windowOffset)
  })
}
/**
 * End Header Animation
 */

/**
 * Begin Dark Mode
 */
let darkMode = () => {
  const darkmodeToggle = document.querySelector('input[name=theme-toggle]')

  darkmodeToggle.addEventListener('change', function () {
    if (this.checked) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }

    let header = document.querySelector('.header')
    if (header.classList.contains('navigation-open')) {
      setTimeout(() => header.classList.remove('navigation-open'), 300);
    }

  })
}
/**
 * End Dark Mode
 */