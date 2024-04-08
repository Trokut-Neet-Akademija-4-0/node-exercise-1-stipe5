import express, { Request, Response } from 'express'
import productService from '../services/productService'

const getAllProducts = (req: Request, res: Response) => {
  const products = productService.getAllProducts()
  res.send(products)
}

const getProductById = (req: Request, res: Response) => {
  const productId = Number.parseInt(req.params.id)
  const product = productService.getProductById(productId)
  if (product) {
    res.send(product)
  } else {
    res.status(404).send('Product not found')
  }
}

export { getAllProducts, getProductById }
