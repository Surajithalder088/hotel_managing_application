import mongoose from "mongoose";

const receiptSchema= new mongoose.Schema({
    type:{
        type:String,
        require:true,
      },
      hotel:{
        type:String,
        require:true
      },
      buyer:{
        type:String,
        require:true
      },
      price:{
        type:Number,
        require:true
      },
      details:{
        type:String,
        require:true
      }
},{timestamps:true})


const receipt=new mongoose.model('receipt',receiptSchema);

export default receipt;