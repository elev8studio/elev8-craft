import Headroom from 'headroom.js'

function Header() {
  const header = document.getElementById('header')

  const headroom = new Headroom(header, {
    offset: 50,
    tolerance: {
      up: 0,
      down: 0,
    },
    classes: {
      initial: 'header--fixed',
      pinned: 'header--slide-down',
      unpinned: 'header--slide-up',
      top: 'header--top',
      notTop: 'header--not-top',
    },
  })

  headroom.init()
}

export default Header
