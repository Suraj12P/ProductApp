import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { connectDB } from './config/db.js'
import productRoutes from "./routes/product.route.js"


const app = express()



app.use(express.json())

app.use("/api/products",productRoutes)

const PORT=process.env.PORT || 5000



app.listen(PORT,()=>{
    connectDB();
    console.log("server started at http://localhost:"+PORT)
})