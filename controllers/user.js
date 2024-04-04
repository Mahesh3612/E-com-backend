
import User from "../db/user.js"
import jwt from "jsonwebtoken"


const jwtKey = 'mahesh'

export const register = async (req, res) => {
            let result = await new User(req.body);
            result = await result.save();
            result = result.toObject()
            delete result.password;
            res.send(result)
        }

        export const login = async (req, res) => {
            try {
                if (req.body.password && req.body.email) {
                    let result = await User.findOne(req.body).select("-password");
                    if (result) {
                        jwt.sign({result},jwtKey,{expiresIn:"1h"},(err,token)=>{
                            if(err){
                                res.send({result:"User not found"})
                            }else{
                                res.send({result,auth:token})
                            }  
                        })
                    } else {
                        res.send({ result: "user not found" })
                    }
                } else {
                    res.send({ result: "user not found" })
                }
            } catch (e) {
                res.send(e)
            }
        }

        export const profile = async(req,res)=>{
            let result = await User.findById(req.params.id)
            res.send(result)
        }


        