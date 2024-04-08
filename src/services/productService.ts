import { Product } from '../models/interfaces/productInterface'
import products from '../models/productsModel'

class ProductService {
  private products: Product[] = products

  getAllProducts(): Product[] {
    return this.products
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id)
  }
}

export default new ProductService()
