import axios from "axios"

const api="http://localhost:7070"

export const receiptCreate=async(id)=>{
   
    try{
      
     const receipt= await axios.get(api+`/api/receipt/receipt-create/${id}`,{withCredentials:true})
    
     return (receipt)
 
    }catch(error){
    
      return (error)
     
    }
  }

