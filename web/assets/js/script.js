window.addEventListener('DOMContentLoaded', function () {
  openMenu()
  animateHeader()
  toggleDarkMode()

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
