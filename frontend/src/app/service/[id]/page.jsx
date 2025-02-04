"use client"
import "./style.css"

import { redirect, useParams } from 'next/navigation'
import React from 'react'
import { services } from "@/assets/service";
import Navbar from '@/app/{component}/Navbar/page';

const links=[
    {id:1,name:"hotel abc",price:450},
    {id:2,name:"hotel tyf",price:450},
    {id:3,name:"hotel kls",price:450},
    {id:4,name:"hotel wrd",price:450}
  ]

const Service = () => {

    const {id} =useParams()
    const service=services.find(l=>l.id===Number(id))

  return (
    <>
    
   <Navbar/>
   <div className="nav">navbar</div>

   
    <div className="service">
      <div className="card">
        <div className="abouteService">
      <div className="id"> Service id :{id}</div> 
        <p><div className="value">Service provided : </div>{service.type}</p>
       <p><div className="value">Total Buyer of this Service : </div>{service.buyerOfService}</p>
        <p><div className="value"> Price : </div>{service.price}</p>
        <p><div className="value"> Details of the Service : </div>{service.details}</p>
        <span> Service generated at : {service.craeteAt}</span>
        </div>
        <div className="abouteHotel">
        <p><div className="value"> Name of the Provider : </div> {service.hotelName}</p>
        <p><div className="value"> Number of Services provided by this provider : </div>{service.hotelTotalService}</p>
        <p><div className="value"> Hotel Registered At : </div>{service.hotelRegisterd}</p>
        </div>
        
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