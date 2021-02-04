const Theme = () => {
  const setToggle = dark => {
    document.querySelector("[data-behaviour='Theme']").checked = dark
  }

  const setClass = dark =>
    dark
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')

  const setLocalStorage = dark => {
    localStorage.theme = dark ? 'dark' : 'light'
  }

  const delayHeaderClose = () => {
    setTimeout(
      () =>
        document.querySelector('.header').classList.remove('navigation-open'),
      300
    )
  }

  // Manual theme toggle
  const toggleTheme = () => {
    document
      .querySelector("[data-behaviour='Theme']")
      .addEventListener('click', e => {
        setLocalStorage(e.target.checked)
        setClass(e.target.checked)
        delayHeaderClose()
      })
  }

  // Auto theme set
  const setInitialTheme = () => {
    const dark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    setToggle(dark)
    setLocalStorage(dark)
    setClass(dark)
  }

  // Reset site theme when system theme changes
  const resetTheme = () => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        setToggle(e.matches)
        setLocalStorage(e.matches)
        setClass(e.matches)
      })
  }

  toggleTheme()
  setInitialTheme()
  resetTheme()
}

export default Theme
