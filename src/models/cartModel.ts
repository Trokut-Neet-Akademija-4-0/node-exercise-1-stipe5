import ICart from './interfaces/cartInterface'

class Cart implements ICart {
  constructor() {
    this.id = 0
    this.products = []
    this.total = 0
    this.discountedTotal
    this.userId
    this.totalProducts
    this.totalQuantity
  }
}
