// src/index.js
import express, { Express } from 'express'
import homeRoutes from './routes/homeRoutes'
import userRoutes from './routes/userRoutes'
import productsRoutes from "./routes/productsRoutes"

const app: Express = express()
const port = process.env.PORT || 3000

app.use('/', homeRoutes)
app.use('/users', userRoutes)
app.use("/products", productsRoutes)
app.use("/cart", homeRoutes)
app.use("/blog", homeRoutes)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
