"use client"
import "./style.css"

import { redirect, useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { services } from "@/assets/service";
import { reviews } from "@/assets/review";
import Navbar from '@/app/{component}/Navbar/page';
import { motion, useInView } from 'motion/react'
import axios from "axios";

const links=[
    {id:1,name:"hotel abc",price:450},
    {id:2,name:"hotel tyf",price:450},
    {id:3,name:"hotel kls",price:450},
    {id:4,name:"hotel wrd",price:450}
  ]

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
 const [service,setService]=useState({})
    const {id} =useParams()
   // const service=services.find(l=>l.id===2)
    

    const fetchServiceDetails=async()=>{
      try{
         const data= await axios.get(api+`/api/service/${id}`,{withCredentials:true})
         let obj=data.data.service
         
          setService(obj)
         console.log(obj);
         
      }catch(error){
        console.log(error);
        
      }
    }

    useEffect(() => {
     
      fetchServiceDetails()
    console.log(service);
    
     
    }, [service])
    

  return (
    <>
    
   <Navbar/>
   <div className="nav">navbar</div>

    {
        !service._id?(<div className="loading">
            loading
        </div>)
        :
   ( <div className="service">
     

     
    <div className="orderBtn">
        <button
        onClick={()=>{
          redirect(`/receipt/${id}`)
        
         
        }}
        className="btn">Order Now</button>
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
            <div className="review" key={r.id}>
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