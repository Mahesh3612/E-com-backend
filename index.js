
import express from "express"
const app = express();
import connect from "./db/config.js"
import cors from "cors"
import product from "./routes/product.js"
import user from "./routes/user.js"
import donenv from "dotenv"

donenv.config()
console.log("hi")

app.use(express.json())
app.use(cors())



app.use("/api/user",user)
app.use("/api/product",product)



app.listen(5000, () => {
    connect()
    console.log("listning on port 5000")
})