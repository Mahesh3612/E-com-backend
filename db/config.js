// const mongoose = require("mongoose");
import mongoose from "mongoose"



const connect = ()=>{
    mongoose.connect("mongodb+srv://mahesh:mahesh@cluster0.8aap4sx.mongodb.net/e-com")
    .then(()=>console.log("connected to db"))
    .catch((e)=>console.log(e))
    
}

export default connect