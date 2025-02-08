"use client"

import "./style.css"
import { useParams } from 'next/navigation'
import React ,{useEffect, useState} from 'react'

import { services } from "@/assets/service"
import Service from "@/app/{component}/Service/page"
import Navbar from "@/app/{component}/Navbar/page"
import axios from 'axios'



const api="http://localhost:7070"


const Hotel= () => {
    const {id}=useParams()
   // const hotel=services.find(l=>l.id===1)
   const [hotel,setHotel]=useState(null)
   const [services,setServices]=useState([])

    const hotelByid=async()=>{
     const data= await axios.get(api+`/api/hotel/hotelbyid/${id}`,{withCredentials:true})
     console.log(data.data);
     setHotel(data.data.hotel)
     setServices(data.data.services)
    }
    useEffect(() => {
      hotelByid()
    
    }, [])
    
  return (
   <>
   <div className="hotelContainer">
    <Navbar/>
    <div className="nav"></div>

    <div className="aboutehotelContainer">
      {
        !hotel ?(
          <div className="aboutehotel">
            <p>failed to get hotel data</p>
          </div>
        ):(

        
        <div className="aboutehotel">
            <p className="hotelname">{hotel.email}</p>
          
            <p className="aboute">Totel Service Provided : {hotel.services.length}</p>
            <p  className="aboute">This hotel is Registered at : {hotel.createdAt}</p>

        </div>
        )
      }
        <img src="/hotelimg.png" className="hotelimg" />
    </div>
    {
      (services.length===0)?(
        <div className="allservices">
         <p> no services provided</p>
        </div>
      ):(

     
    <div className="allservices">
   {
        services.map(service=>(
       <Service l={service} key={service.id} />
        ))
        
      }
    </div>
     )
    }
   </div>
   </>
  )
}

export default Hotel