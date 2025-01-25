import mongoose from "mongoose";

const hotelSchema= new mongoose.Schema({
  email:{
    type:String,
    require:true,
    unique:true,

  },
  password:{
    type:String,
    require:true
  },
  services:[{
    type:String,
  }],
  
},{timestamps:true})


const hotel=new mongoose.model('hotel',hotelSchema);

export default hotel;