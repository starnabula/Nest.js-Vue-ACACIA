
import express  from 'express'
import  { Request, Response } from 'express'

const router = express.Router()

interface product {
    id: number
    name: string
    price: number
}

const products: product[] = []

router.get('/products', (_: Request, res: Response): void => {
    res.json(products)
})

router.get('/products/:id', (req: Request<{ id: string }>, res: Response): void => {
   // console.log(req.params.id)
    const id = parseInt(req.params.id)

    const product = products.find(product => product.id === id)



    if (!product) {
        res.status(404).json({ error: "Product not found" })
        return
    }

    res.json(product)
})

router.post('/products', (req: Request, res: Response): void => {

    if (!req.body) {
        res.status(400).json({ error: 'Missing required fields: id, name, price' })
        return
    }

    const { id, name, price } = req.body    

    if (!id || !name || !price) {
        res.status(400).json({ error: 'Missing required fields: id, name, price' })
        return
    }

   
})


export default  router