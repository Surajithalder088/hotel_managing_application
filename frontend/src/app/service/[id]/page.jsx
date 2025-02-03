"use client"

import { useParams } from 'next/navigation'
import React from 'react'
import { services } from "@/assets/service";

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
    
   
    <div> Service id :{id}</div> 
    <div className="service">

        <p>{service.type}</p>
        <spam>{service.price}</spam>
    </div>
    
    </>
  )
}

export default Service