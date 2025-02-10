"use client"

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const api=process.env.NEXT_PUBLIC_API_URL

const hotelOrders = () => {
    const [orders,setOrders]=useState([])

    const {id}=useParams()

    const fetchHotelData=async()=>{
        
        try{
            const res= await axios.get(api+`/api/hotel/profile/${id}`,{withCredentials:true})
            console.log(res.data.receipts);
            setOrders(res.data.receipts)
            
        }catch(error){
            console.log(error);
            
        }
    }

    useEffect(() => {
      fetchHotelData()
    }, [])
    
      return (
        <>
    <div>hotelOrders of hotel id :{id}</div>
   {
    orders.map((o)=>(
        <div>
            <p>order Id : {o._id}</p>
            <p>order type : {o.type}</p>
            <p>customer id : {o.buyer}</p>
            <p>total price : {o.price}</p>
            <p>ordered at : {o.createdAt}</p>
            <p>order details : {o.details}</p>
            <p>order payment: {o.paid?"paid":"pending"}</p>
        </div>
    ))
   }
    
    </>
  )
}

export default hotelOrders