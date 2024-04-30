import { Request, Response } from 'express'
import productService from '../services/productService'
import Proizvod from '../entities/Proizvod'
import Slike from '../entities/Slike'

const getAllProducts = async (req: Request, res: Response) => {
  res.send(await productService.getAllProducts())
}

const getProductById = async (req: Request, res: Response) => {
  res.send(
    await productService.getProductById(Number.parseInt(req.params.id, 10)),
  )
}

const createProduct = async (req: Request, res: Response) => {
  const newProduct = req.body as Proizvod
  res.send(await productService.addNewProduct(newProduct))
}

const addProductPictures = async (req: Request, res: Response) => {
  const productId = Number.parseInt(req.params.id, 10)
  const newPictures = req.body as Slike[]
  res.send(
    await productService.addNewPicturesToExistingProduct(
      productId,
      newPictures,
    ),
  )
}

export { getAllProducts, getProductById, createProduct, addProductPictures }
