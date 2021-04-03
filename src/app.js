import productController from './controllers/product'
import headerController from './controllers/header'
import 'reset-css'
import './app.scss'

document.addEventListener('DOMContentLoaded', () => {
  headerController.init()
  productController.init()
})

