import productController from './controllers/product'
import headerController from './controllers/header'
import 'reset-css'
import './app.scss'

document.addEventListener('DOMContentLoaded', () => {
  const isAmpPage = window.location.pathname.includes('amp')
  if(isAmpPage) return;
  headerController.init()
  productController.init()
})

