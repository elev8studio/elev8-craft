function Header() {
	window.addEventListener('load', () => {
		let previous = window.pageYOffset
		document.addEventListener('scroll', () => {
			const header = document.querySelector('.header')
			const windowOffset = window.pageYOffset
			if (window.pageYOffset > 50) {
				header.classList.add('scroll')
			} else {
				header.classList.remove('scroll')
			}
			if (windowOffset > previous) {
				header.setAttribute(
					'style',
					'transform: translateY(calc(-100% + 0px)) translateZ(0px)'
				)
			} else {
				header.setAttribute('style', 'transform: none')
			}
			previous = windowOffset <= 0 ? 0 : windowOffset
		})
	})
}

export default Header
