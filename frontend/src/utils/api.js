import axios from "axios"

const api=process.env.NEXT_PUBLIC_API_URL

export const receiptCreate=async(id)=>{
   
    try{
      
     const receipt= await axios.get(api+`/api/receipt/receipt-create/${id}`,{withCredentials:true})
    
     return (receipt)
 
    }catch(error){
    
      return (error)
     
    }
  }

