import express, { Request, Response } from 'express'
import productService from '../services/productService'
import { Product } from '../models/interfaces/productInterface'

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

const createProduct = (req: Request, res: Response) => {
  const newProduct = req.body as Product
  console.log(req.body)
  res.send(productService.addNewProduct(newProduct))
}

export { getAllProducts, getProductById, createProduct }
