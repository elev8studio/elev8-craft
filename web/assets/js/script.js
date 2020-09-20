(function () {
  const burger = document.querySelector('.burger-container'),
    header = document.querySelector('.header')

  burger.onclick = () => {
    header.classList.toggle('navigation-open')
  }
}())