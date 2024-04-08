import express, { Request, Response } from 'express'
import {
  addProductToCart,
  getCart,
  removeProductFromCart,
} from '../controllers/cartController'

const router = express.Router()

// dohvat cije kosarice
router.get('/', getCart)

// dodavanje proizvoda na kosaricu pomocu product id-a
router.get('/add/:productId', addProductToCart)

// skidanje produkta sa kosarice pomocu product id-a
router.delete('/remove/:productId', removeProductFromCart)

export default router
