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

  addNewProduct(product: Product): Product {
    this.products.push(product)
    return product
  }
}

export default new ProductService()
