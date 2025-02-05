"use client"
import "./style.css"

import { redirect, useParams } from 'next/navigation'
import React from 'react'
import { services } from "@/assets/service";
import Navbar from '@/app/{component}/Navbar/page';
import { motion, useInView } from 'motion/react'

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

const Service = () => {

    const {id} =useParams()
    const service=services.find(l=>l.id===Number(id))

  return (
    <>
    
   <Navbar/>
   <div className="nav">navbar</div>

   
    <div className="service">
      <div className="card">
        <motion.div 
        variants={serviceVariant}
        initial='initial'
        animate='animate'
        className="abouteService">
      <div className="id"> Service id :{id}</div> 
        <p><div className="value">Service provided : </div>{service.type}</p>
       <p><div className="value">Total Buyer of this Service : </div>{service.buyerOfService}</p>
        <p><div className="value"> Price : </div>{service.price}</p>
        <p><div className="value"> Details of the Service : </div>{service.details}</p>
        <span> Service generated at : {service.craeteAt}</span>
        </motion.div>
        <motion.div className="abouteHotel"
        variants={hotelVariant}
        initial='initial'
        animate='animate'
        >
        <p><div className="value"> Name of the Provider : </div> {service.hotelName}</p>
        <p><div className="value"> Number of Services provided by this provider : </div>{service.hotelTotalService}</p>
        <p><div className="value"> Hotel Registered At : </div>{service.hotelRegisterd}</p>
        </motion.div>
        
       </div>
       <div className="orderBtn">
        <button
        onClick={()=>{
          redirect(`/receipt/${id}`)
        }}
        className="btn">Order Now</button>
       </div>
    </div>
    
    </>
  )
}

export default Service