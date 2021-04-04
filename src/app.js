import productController from './controllers/product'
import headerController from './controllers/header'
import 'reset-css'
import './app.scss'

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app')
  if(!app) return;
  headerController.init()
  productController.init()
})

