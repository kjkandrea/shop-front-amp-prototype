import { products } from '../api'
import detail from '../components/product/detail.jsx'
import gallery from '../components/product/gallery.jsx'

const productController = {
  data: null,
  async init() {
    const fetchSuccess = await this.fetchData()
    if (!fetchSuccess) return;

    gallery.render(this.data.images)
    detail.render(this.data)
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