/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
import Proizvod from '../entities/Proizvod'
import Slike from '../entities/Slike'
import { Product } from '../models/interfaces/productInterface'
import products from '../models/productsModel'
import HttpError from '../utils/HttpError'

class ProductService {
  private products: Product[] = products

  async getAllProducts(): Promise<Proizvod[]> {
    return Proizvod.find()
  }

  async getProductById(id: number): Promise<Proizvod> {
    const foundProduct = await Proizvod.findOne({
      relations: {
        slikes: true,
      },
      where: {
        proizvodId: id,
      },
    })
    if (!foundProduct)
      throw new HttpError(404, `Product with id ${id} not found`)
    return foundProduct
  }

  async addNewProduct(product: Proizvod): Promise<Proizvod> {
    const proizvod = Proizvod.create(product)
    return proizvod.save()
  }

  async addNewPicturesToExistingProduct(
    productId: number,
    newPictures: Slike[],
  ): Promise<Proizvod> {
    const product = await this.getProductById(productId)
    for await (const picture of newPictures) {
      const newPictureEntity = Slike.create(picture)
      newPictureEntity.proizvod = product
      await newPictureEntity.save()
    }
    return this.getProductById(productId)
  }
}

export default new ProductService()
