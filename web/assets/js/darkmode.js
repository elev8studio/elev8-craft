const DarkMode = () => {
	window.addEventListener('load', () => {
		const darkmodeToggle = document.querySelector('input[name=theme-toggle]')

		const getTheme = bool => (bool ? 'dark' : 'light')

		const preference = localStorage.getItem('theme')
		const system =
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches

		darkmodeToggle.checked = preference ? preference === 'dark' : system
		document.documentElement.setAttribute(
			'data-theme',
			getTheme(darkmodeToggle.checked)
		)

		darkmodeToggle.addEventListener('change', function () {
			document.documentElement.setAttribute(
				'data-theme',
				getTheme(this.checked)
			)
			localStorage.setItem('theme', getTheme(this.checked))

			setTimeout(
				() =>
					document.querySelector('.header').classList.remove('navigation-open'),
				300
			)
		})
	})
}

export default DarkMode
