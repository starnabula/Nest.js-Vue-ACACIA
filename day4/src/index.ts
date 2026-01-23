
// const app = () => {
//   console.log("Hello via Bun 888!")
// };

// app()

import express from 'express'

import testRoutes from './routes/testRoutes'
import productRoutes from './routes/productRoutes'
import dbtestRoutes from './routes/dbtestRoutes'

const app = express()

app.use(express.json())

app.use('/api', testRoutes)
app.use('/api', dbtestRoutes)
app.use('/api', productRoutes)
  
app.listen(3000, () => {
  console.log("Server is running on port 3000")
})

export default app