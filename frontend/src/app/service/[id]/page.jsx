"use client"
import "./style.css"

import { redirect, useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { services } from "@/assets/service";
import { reviews } from "@/assets/review";

import { motion, useInView } from 'motion/react'
import axios from "axios";
import {receiptCreate} from "@/utils/api"
import Loading from "@/app/{component}/Loading/page";
import Navbar from "@/app/{component}/Navbar/page";



  const serviceVariant={
    initial:{
      x:-100,
      opacity:0
  },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration:1.5,
        straggerChildren:0.2
      }
    }
  }
  const hotelVariant={
    initial:{
      x:100,
      opacity:0
  },
    animate:{
      x:0,
      opacity:1,
      transition:{
        duration:1.5,
        straggerChildren:0.2
      }
    }
  }

  const api="http://localhost:7070"

const Service = () => {
   const [reviews,setReviews]=useState([])
 const [service,setService]=useState({})
 const [loading,setLoading]=useState(false)
    const {id} =useParams()
   // const service=services.find(l=>l.id===2)
    

    const fetchServiceDetails=async()=>{
      try{
         const data= await axios.get(api+`/api/service/${id}`,{withCredentials:true})
         let obj=data.data.service
         
          setService(obj)
        
         
      }catch(error){
        console.log(error);
        
      }
    }
    const fetchReviewsList=async()=>{
      try{
       const reviews= await axios.get(api+`/api/review/reviewbyserviceid/${id}`,{withCredentials:true})
       
        setReviews(reviews.data.reviews)
       
      }catch(error){
        console.log(error);
        
      }
    }

    const orderHandler=async(e)=>{
      e.preventDefault()
     const receipt=await receiptCreate(service._id)
     console.log(receipt);
     const receiptLink=receipt.data.receipt._id ;
     redirect(`/receipt/${receiptLink}`)
     
    }

    useEffect(() => {
     
      fetchServiceDetails()
    
    fetchReviewsList()
    
     
    }, [service])
    

  return (
    <>
    
   <Navbar/>
   <div className="nav">navbar</div>

    {
        !service._id?(
          <Loading/>
        )
        :
   ( <div className="service">
     

     
    <div className="orderBtn">
        <button
        onClick={orderHandler}
        className="btn">{loading ?"Loading":"Order now"}</button>
       </div>
      <div className="card">
        <motion.div 
        variants={serviceVariant}
        initial='initial'
        animate='animate'
        className="abouteService">
      <div className="id"> Service id :{id}</div> 
        <p><div className="value">Service provided : </div>{service.type}</p>
       <p><div className="value">Total Buyer of this Service : </div>{service.buyer.length}</p>
        <p><div className="value"> Price : </div>{service.price}</p>
        <p><div className="value"> Details of the Service : </div>{service.details}</p>
        <span> Service generated at : {service.createdAt}</span>
        </motion.div>
        <motion.div className="abouteHotel"
        variants={hotelVariant}
        initial='initial'
        animate='animate'
        >
        <p><div className="value"> Name of the Provider : </div> {service.hotel.email}</p>
        <p><div className="value"> Number of Services provided by this provider : </div>{service.hotel.services.length}</p>
        <p><div className="value"> Hotel Registered At : </div>{service.hotel.createdAt}</p>
        </motion.div>
        
       </div>

       <div className="reviewContainer">
        <h3>Customer Ratings:</h3>
        <div className="reviewList">
        {
          reviews.map(r=>(
            <div className="review" key={r._id}>
              <p>customer id :{r.user}</p>
              <p>star : {r.ratings}</p>
              <p>{r.text}</p>
            </div>
          ))
        }
       </div>
       </div>

    </div>)
}

    
    </>
  )
}

export default Service