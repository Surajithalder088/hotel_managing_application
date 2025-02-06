import axios from "axios"

const api="http://localhost:7070"

export const loginApi=async({email,password})=>{
    try{
         const authData=await axios.post(api+`/api/customer/login`,{email,password},{withCredentials:true})
    return authData.data;

    }catch(error){
        return {
            data:"failed",
            error
        }
    }
   
}