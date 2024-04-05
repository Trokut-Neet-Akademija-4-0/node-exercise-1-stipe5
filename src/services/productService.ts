import { Product } from '../models/interfaces/productInterface'
import products from '../models/productsModel'

class ProductService {
  private products: Product[] = products

  getAllProducts(): Product[] {
    return this.products
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(
      (product) => product.id === Number.parseInt(id, 10),
    )
  }
}

export default new ProductService()
