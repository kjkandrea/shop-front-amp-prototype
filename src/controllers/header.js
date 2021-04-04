import header from '../components/common/header.jsx'

const headerController = {
  init() {
    const headerContainer = document.getElementById('header')
    if (headerContainer) header.render(headerContainer)
  },
}

export default headerController;