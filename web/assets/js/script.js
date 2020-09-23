window.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger-container')
  const header = document.querySelector('.header')

  burger.onclick = () => {
    header.classList.toggle('navigation-open')
  }

  let previous = window.pageYOffset
  document.addEventListener('scroll', () => {
      let windowOffset = window.pageYOffset
      window.pageYOffset > 50
        ? header.classList.add('scroll')
        : header.classList.remove('scroll'),
        windowOffset > previous
          ? header.setAttribute('style',
          'transform: translateY(calc(-100% + 0px)) translateZ(0px)')
          : header.setAttribute('style', 'transform: none'),
        previous = windowOffset <= 0 ? 0 :windowOffset
    },
  )
})