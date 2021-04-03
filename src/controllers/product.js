import { products } from '../api'
import detail from '../components/product/detail.jsx'

const productController = {
  data: null,
  async init() {
    const fetchSuccess = await this.fetchData()
    if (!fetchSuccess) return;

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