"use client"

import "./style.css"
import { useParams } from 'next/navigation'
import React ,{useEffect, useState} from 'react'

import { services } from "@/assets/service"
import Service from "@/app/{component}/Service/page"
import Navbar from "@/app/{component}/Navbar/page"
import axios from 'axios'



const api=process.env.NEXT_PUBLIC_API_URL


const Hotel= () => {
    const {id}=useParams()
   // const hotel=services.find(l=>l.id===1)
   const [hotel,setHotel]=useState(null)
   const [services,setServices]=useState([])
   const [item,setItem]=useState('')
   const [price,setPrice]=useState(0)
   const [type,setType]=useState('')
   const [searching,setSearching]=useState(false)

    const hotelByid=async()=>{
     const data= await axios.get(api+`/api/hotel/hotelbyid/${id}`,{withCredentials:true})
     console.log(data.data);
     setHotel(data.data.hotel)
     setServices(data.data.services)
    }
    useEffect(() => {
      hotelByid()
    
    }, [])
    let filterServices=searching===false?services:services.filter((i)=>
      i.type===type && i.itemType===item && i.price<=price
    )
    const handleSearch=(e)=>{
 e.preventDefault()
 setSearching(true)
    }
    
  return (
   <>
   <div className="hotelContainer">
    <Navbar/>
    <div className="navbar">nav</div>
    <div className="filters">
    <div className="selectLoc">
            <p className="selectP">Select service:</p>
          <select
          className="selectinput"
          value={type} onChange={(e)=>{setType(e.target.value)}}>
          <option value=''>all</option>
            <option value='room'>room</option>
            <option value='restaurant'>restaurant</option>
            
           </select>
          </div>
          {
            type==='room'?(
              <div className="selectLoc">
            <p className="selectP">Select room:</p>
          <select
          className="selectinput"
          value={item} onChange={(e)=>{setItem(e.target.value)}}>
          <option value=''>all</option>
          <option value='1_bed_ac'>1_bed_ac</option>
            <option value='2_bed_ac'>2_bed_ac</option>
            <option value='1_bed_nonac'>1_bed_nonac</option>
            <option value='2_bed_nonac'>2_bed_nonac</option>
            
           </select>
          </div>
            ):(

            
          <div className="selectLoc">
            <p className="selectP">Select food:</p>
          <select
          className="selectinput"
          value={item} onChange={(e)=>{setItem(e.target.value)}}>
          <option value=''>all</option>
          <option value='chienese'>chienese</option>
          <option value='chicken'>chicken</option>
          <option value='mutton'>mutton</option>
          <option value='veg'>veg</option>
          <option value='nonveg'>non veg</option>
            
           </select>
          </div>
          )
          }
           <div className="selectLoc">
            <p className="selectP">Select price:</p>
          <select
          className="selectinput"
          value={price} onChange={(e)=>{setPrice(e.target.value)}}>
          <option value=''>all</option>
          <option value='50'>0-50</option>
          <option value='100'>0-100</option>
          <option value='500'>0-500</option>
          <option value='1000'>0-1,000</option>
          <option value='2000'>0-2,000</option>
          <option value='5000'>0-5,000</option>
          <option value='10000'>0-10,000</option>
          <option value='20000'>0-20,000</option>
          <option value='30000'>0-30,000</option>
            
           </select>
          </div>
          <button
          onClick={handleSearch}
          >search</button>
    </div>
    


    <div className="aboutehotelContainer">
      {
        !hotel ?(
          <div className="aboutehotel">
            <p>failed to get hotel data</p>
          </div>
        ):(

        
        <div className="aboutehotel">
            <div className="name">
            <p className="aboute"> {hotel.name}</p>
            <p className="">{hotel.email}</p>
            </div>
            <p className="aboute">Totel Service Provided : {hotel.services.length}</p>
            <p  className="aboute">This hotel is Registered at : {hotel.createdAt}</p>

        </div>
        )
      }
      <div className="image">
        <img src="/hotelimg.png" className="hotelimg" />
        </div>
        <div className="orderCart">
        
         <div className="cartlist">
         <p>Lorem ipsum dolor sit amet consectetur
           adipisicing elit. Quaerat ipsam consequuntur nostrum asperiores, ullam iusto alias, quae quisquam a
            dignissimos impedit veritatis fuga. Ea dolore, adipisci nulla atque quibusdam repellendus dolores hic.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, impedit incidunt? In laudantium ipsa
             iusto fuga provident molestiae velit voluptatibus!
            </p>
            </div>
            <button>order</button>
        </div>
    </div>
    {
      (filterServices.length===0)?(
        <div className="allservices">
         <h1> no services provided</h1>
        </div>
      ):(

     
    <div className="allservices">
   {
        filterServices.map(service=>(
       <Service l={service} key={service._id} />
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