"use client"

import "./style.css"
import { useParams } from 'next/navigation'
import React from 'react'

import { services } from "@/assets/service"
import Service from "@/app/{component}/Service/page"
import Navbar from "@/app/{component}/Navbar/page"

const Hotel= () => {
    const {id}=useParams()
    const hotel=services.find(l=>l.id===Number(id))
  return (
   <>
   <div className="hotelContainer">
    <Navbar/>
    <div className="nav"></div>

    <div className="aboutehotelContainer">
        <div className="aboutehotel">
            <p className="hotelname">{hotel.hotelName}</p>
            <p className="aboute">Totel Service Provided : {hotel.hotelTotalService}</p>
            <p  className="aboute">This hotel is Registered at : {hotel.hotelRegisterd}</p>

        </div>
        <img src="/hotelimg.png" className="hotelimg" />
    </div>
    <div className="allservices">
    {
        services.map(service=>(
       <Service l={service} key={service.id} />
        ))
      }
    </div>
   </div>
   </>
  )
}

export default Hotel