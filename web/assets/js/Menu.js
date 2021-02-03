const Menu = () => {
  document
    .querySelector("[data-behaviour='Menu']")
    .addEventListener('click', () => {
      document.getElementById('header').classList.toggle('navigation-open')
    })
}

export default Menu
