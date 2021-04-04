import { products } from '../api'
import detail from '../components/product/detail.jsx'
import gallery from '../components/product/gallery.jsx'
import buyButton from '../components/product/buyButton.jsx'

const productController = {
  data: null,
  productSummaryEl: document.getElementById('product-summary'),
  async init() {
    const fetchSuccess = await this.fetchData()
    if (!fetchSuccess) return;

    detail.render(this.data)
    gallery.render(this.data.images)
    buyButton.render(this.productSummaryEl)
  },
  async fetchData() {
    try {
      this.data = await products.fetch()
      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }
}

export default productController;