import mongoose from "mongoose";

const customerSchema= new mongoose.Schema({
  email:{
    type:String,
    require:true,
    unique:true,

  },
  password:{
    type:String,
    require:true
  },
  takenServices:[{
    type:String,
  }],
  receipts:[{
    type:String
  }]
},{timestamps:true})


const customer=new mongoose.model('customer',customerSchema);

export default customer;