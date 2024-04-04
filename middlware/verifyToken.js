
const jwtKey = "mahesh"
import jwt from "jsonwebtoken"

function VerifyToken (req,res,next) {
    console.log("middlware")   
    const token = req.headers['authorization']
    if(token){
       jwt.verify(token,process.env.jwtKey,(err,valid)=>{
        if(err){
            res.send({result:"you are not authenticated"})
        }else{
            next()
        }
       }) 
    }else{
        res.send({result:"please add token with header"})
    } 
}

export default VerifyToken;