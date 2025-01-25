import mongoose from "mongoose";

const serviceSchema= new mongoose.Schema({
  type:{
    type:String,
    require:true,
  },
  hotel:{
    type:String,
    require:true
  },
  buyer:[{
    type:String,
  }],
  price:{
    type:Number,
    require:true
  },
  details:{
    type:String,
    require:true
  }
},{timestamps:true})


const service=new mongoose.model('service',serviceSchema);

export default service;