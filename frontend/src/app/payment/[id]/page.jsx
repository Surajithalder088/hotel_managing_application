"use client"
import "./style.css"
import { useParams } from 'next/navigation'
import React from 'react'
import axios from "axios"

const api=process.env.NEXT_PUBLIC_API_URL

const Payment = () => {
  const {id}=useParams()

  const payBill=async ()=>{
    try{ 
      const data= await axios.get(api+`/api/receipt/receipt-pay/${id}`, {withCredentials:true})
      console.log(data.data);
      

    }catch(error){
      console.log(error);
      
    }
  
  }
  return (
    <>
    <div className="paymentContainer">
    <div>Payment for Receipt Id  :{id}</div>
    <div className="paymentForm"
    onClick={payBill}
    >
      <button className="btn">Pay</button>
    </div>
    </div>
    </>
  )
}

export default Payment