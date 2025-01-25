import jwt from "jsonwebtoken"
import customerModel from "../models/customer.js";

export const verifyUser =async(req,res,next)=>{

    try{
const {token}=req.cookies;
    const user=jwt.verify(token,"jwt-secret")
    if(!user){
       return res.status(400).json({message:" token not find"})
    }
    console.log(user.email);
    const authUser= await customerModel.findOne({email:user.email})
    if(!authUser){
        return res.status(400).json({message:" user not find"})
     }
    req.user=authUser;


    next();
    }catch(error){
        res.status(500).json({message:" error to verify user",error})
    }
    
}