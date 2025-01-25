import customerModel from "../models/customer.js";
import hotelModel from "../models/hotel.js";
import serviceModel from "../models/service.js";


export const allServices=async(req,res)=>{
   try{
    res.status(500).json({message:"all services"})
   }catch(error){
    res.status(500).json({message:"internal server error",error})
   }
}
export const serviceById=async(req,res)=>{
    try{
     res.status(500).json({message:" service by id"})
    }catch(error){
     res.status(500).json({message:"internal server error",error})
    }
 }
 export const serviceCreate=async(req,res)=>{
    try{
     res.status(500).json({message:" service create"})
    }catch(error){
     res.status(500).json({message:"internal server error",error})
    }
 }
 export const updateService=async(req,res)=>{
    try{
     res.status(500).json({message:" service updated"})
    }catch(error){
     res.status(500).json({message:"internal server error",error})
    }
 }

 export const deleteService=async(req,res)=>{
    try{
     res.status(500).json({message:" service deleted"})
    }catch(error){
     res.status(500).json({message:"internal server error",error})
    }
 }