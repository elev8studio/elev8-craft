const Menu = () => {
	window.addEventListener('DOMContentLoaded', () => {
		const burger = document.querySelector('.burger-container')
		burger.onclick = () => {
			const header = document.querySelector('.header')
			header.classList.toggle('navigation-open')
		}
	})
}

export default Menu
