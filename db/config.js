// const mongoose = require("mongoose");
import mongoose from "mongoose"



const connect = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/e-commercePractice")
    .then(()=>console.log("connected to db"))
    .catch((e)=>console.log(e))
    
}

export default connect