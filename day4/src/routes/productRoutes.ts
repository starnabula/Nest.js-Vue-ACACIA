
import express from 'express'
import * as ProductController from '../controllers/productControllers'
import Product from './../models/productModel';


const router = express.Router()

router.get('/Products', ProductController.getAllProducts)

router.get('/Products/:id', ProductController.getProductById)

router.post('/Products', ProductController.createProduct)

router.put('/Products/:id', ProductController.updateProduct)

router.delete('/Products/:id', ProductController.deleteProduct)

export default router