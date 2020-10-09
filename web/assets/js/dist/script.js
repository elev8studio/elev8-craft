window.addEventListener('load', function () {
  const darkmodeToggle = document.querySelector('input[name=theme-toggle]')

  let getTheme = (bool) => bool ? 'dark' : 'light'

  let preference = localStorage.getItem('theme')
  let system = window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

  darkmodeToggle.checked = preference ? preference === 'dark' : system
  document.documentElement.setAttribute('data-theme',
    getTheme(darkmodeToggle.checked))

  darkmodeToggle.addEventListener('change', function () {
    document.documentElement.setAttribute('data-theme', getTheme(this.checked))
    localStorage.setItem('theme', getTheme(this.checked))

    setTimeout(() => document.querySelector('.header')
      .classList
      .remove('navigation-open'), 300)
  })
})

window.addEventListener('load', function () {
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
})
window.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger-container')
  burger.onclick = () => {
    let header = document.querySelector('.header')
    header.classList.toggle('navigation-open')
  }
})