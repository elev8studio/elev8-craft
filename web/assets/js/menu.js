window.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger-container')
  burger.onclick = () => {
    let header = document.querySelector('.header')
    header.classList.toggle('navigation-open')
  }
})