// const mongoose = require("mongoose");
import mongoose from "mongoose"


let productSchema = new mongoose.Schema({
    name:String,
    price:String,
     category:String,
     userId:String,
     company:String
})


let Product = new mongoose.model("product",productSchema);

 export default Product;