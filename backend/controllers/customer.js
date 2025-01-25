import customerModel from "../models/customer.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const register=async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({message:"all field required"})
    }
    try{
        const existingUser=await customerModel.findOne({email:email})
        if(existingUser){
            return res.status(400).json({message:"user already exist"})
        }
        const hashPassword= await bcrypt.hash(password,10)
        const newUser= await customerModel.create({email,password:hashPassword})
        const token=jwt.sign({email:newUser.email},"jwt-secret",{expiresIn:'24h'})
        
       
        res.status(201).cookie('token',token,{
            httpOnly:true,
            secure:false,
            maxAge:60*60*24,
        }).json({message:"new customer created ",newUser,token})


    }catch(error){
        res.status(500).json({message:"internal server error",error})
    }

    
}
export const login=async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({message:"all field required"})
    }
    try{
        const existingUser=await customerModel.findOne({email:email})
        if(!existingUser){
            return res.status(400).json({message:"user does not  exist"})
        }
        const matched= await bcrypt.compare(password,existingUser.password)
        if(!matched){
            return res.status(400).json({message:"wrong credentials"})
        }
        const token=jwt.sign({email:existingUser.email},"jwt-secret",{expiresIn:'24h'})
        
       
        res.status(200).cookie('token',token,{
            httpOnly:true,
            secure:false,
            maxAge:60*60*24,
        }).json({message:" user loggedin",token})


    }catch(error){
        res.status(500).json({message:"internal server error",error})
    }

    
}

export const profile=async (req,res)=>{

    const authUser=req.user ||"hhhhhh"
    res.status(200).json({authUser:authUser})
    
}