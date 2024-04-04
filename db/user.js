// const mongoose = require("mongoose");
import mongoose from "mongoose"


let userSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String,
})


export default mongoose.model("user",userSchema)