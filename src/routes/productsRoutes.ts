import express, { Request, Response } from 'express'
import productService from '../services/productService'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
  const products = productService.getAllProducts()
  res.send(products)
})

router.get('/:id', (req: Request, res: Response) => {
  const productId = req.params.id
  const product = productService.getProductById(productId)
  if (product) {
    res.send(product)
  } else {
    res.status(404).send('Product not found')
  }
})

export default router
