"use client"


import Image from "next/image";
import Link from "next/link";
import "./app.css"
import { services } from "@/assets/service";
import Service from "./{component}/Service/page"
import Navbar from "./{component}/Navbar/page";
import { useEffect, useState } from "react";
//import { fetchingServiceList } from "@/utils/api";
const links=[
  {id:1,name:"hotel abc",price:450},
  {id:2,name:"hotel tyf",price:450},
  {id:3,name:"hotel kls",price:450},
  {id:4,name:"hotel wrd",price:450}
]

import axios from "axios"
import Loading from "./{component}/Loading/page";
import Hotel from "./{component}/Hotel/page";

const api=process.env.NEXT_PUBLIC_API_URL



export default function Home() {

  const [searchTerm,setSearchTerm]=useState("")
  const [roomSearch,setroomSearch]=useState(false)
  const [restuarantSearch,setRestuarantSearch]=useState(false)
  const [services,setServices]=useState([])
  const [hotelList,setHotelList]=useState([])
  const [roomLoc,setRoomLoc]=useState("")
  const [roomType,setRoomType]=useState("")
  const [roomPrice,setRoomPrice]=useState("")


  const filterData=searchTerm.trim()===""?services :
  services.filter((item)=>item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))

  const handleradio=(e)=>{
    setSearchTerm(e.target.value)
  }
  const searchHandle=(e)=>{
    e.preventDefault()
    console.log(`location ${roomLoc} item ${roomType} price ${roomPrice}`);
    
  }

  const fetchingServiceList=async()=>{
    try{
      const list= await axios.get(api+'/api/service/service-all')
      //list.sort((a,b)=>a.buyer.length - b.buyer.length)
      console.log(list.data.allServices);
      setServices(list.data.allServices)
    
    }catch(error){
      console.log(data);
      
    }
    
    
  }

  const fetchAllHotels=async()=>{
    try{
      const list =await axios.get(api+`/api/hotel/hotel-all`,{withCredentials:true})
      console.log(list.data);
      setHotelList(list.data.hotels)
      
    }catch(error){
      console.log(error);
      
    }
    
  }

  const value=process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
   
 fetchingServiceList()
 fetchAllHotels()
 
  
  
  
    
  }, [])
  
  return (
   <div className="home">
   <div className='navbarContainer'> 
   <div className="links" >
        <Link href={'/'}>
       <img src="home-2-fill.png" className="icon" />
        </Link>
        </div>
    
   <div className="navFilter">
    <h5>search hotels based on:</h5>
    <div className="fil">
   <label>
    room
    <input 
    type="radio"
    value="room"
    name="search"
    checked={searchTerm==='room'}
    onChange={handleradio}
    /></label>
    </div>
    <div className="fil">
    <label>restaurant
    <input 
    type="radio"
   value="restaurant"
    name="search"
    checked={searchTerm==='restaurant'}
    onChange={handleradio}
    />
    </label>
   </div>
   </div>
  
   
   
     
        <div className="linksp" >
        <Link href={'/profile'}>
        <img src="user-3-fill.png"  className="icon"  />
        </Link>
      </div>
   
    </div>
    <div className="demonav">demonav</div>

    <div className="filterChoice">
      {
       ( searchTerm==="")?(
        <div className="choice"> best hotels</div>
       ):
      ( ( searchTerm==='room')?(
        <div className="roomChoice">
          <div className="selectLoc">
            <p className="selectP">Select location:</p>
          <select
          className="selectinput"
          value={roomLoc} onChange={(e)=>{setRoomLoc(e.target.value)}}>
            <option value='kolkata'>kolkata</option>
            <option value='delhi'>delhi</option>
            <option value='mumbai'>mumbai</option>
            <option value='hyderabad'>hyderabad</option>
            <option value='bangalore'>bangalore</option>
           </select>
          </div>
          <div className="selectType">
            <p className="selectP">Select type:</p>
          <select className="selectinput" value={roomType} onChange={(e)=>{setRoomType(e.target.value)}}>
            <option value='1_bed_ac'>1_bed_ac</option>
            <option value='2_bed_ac'>2_bed_ac</option>
            <option value='1_bed_nonac'>1_bed_nonac</option>
            <option value='2_bed_nonac'>2_bed_nonac</option>
           
           </select>
          </div>
          <div className="selectPrice">
            <p className="selectP">Select price:</p>
          <select className="selectinput" value={roomPrice} onChange={(e)=>{setRoomPrice(e.target.value)}}>
            <option value='0-500'>0-500</option>
            <option value='500-2000'>500-2000</option>
            <option value='2000-5000'>2000-5000</option>
            <option value='5000-10000'>5000-10,000</option>
            <option value='10000-30000'>10,000-30,000</option>
           </select>
          </div>
        <button className="searchbtn" onClick={searchHandle}>SEARCH</button>

        </div>
       ):(
        <div className="restaurantChoice">
        <div className="selectLoc">
          <p className="selectP">Select location:</p>
        <select
        className="selectinput"
        value={roomLoc} onChange={(e)=>{setRoomLoc(e.target.value)}}>
          <option value='kolkata'>kolkata</option>
          <option value='delhi'>delhi</option>
          <option value='mumbai'>mumbai</option>
          <option value='hyderabad'>hyderabad</option>
          <option value='bangalore'>bangalore</option>
         </select>
        </div>
        <div className="selectType">
          <p className="selectP">Select type:</p>
        <select className="selectinput" value={roomType} onChange={(e)=>{setRoomType(e.target.value)}}>
          <option value='chienese'>chienese</option>
          <option value='chicken'>chicken</option>
          <option value='mutton'>mutton</option>
          <option value='veg'>veg</option>
          <option value='nonveg'>non veg</option>
         
         </select>
        </div>
        <div className="selectPrice">
          <p className="selectP">Select price:</p>
        <select className="selectinput" value={roomPrice} onChange={(e)=>{setRoomPrice(e.target.value)}}>
          <option value='0-50'>0-50</option>
          <option value='50-100'>50-100</option>
          <option value='100-500'>100-500</option>
          <option value='500-1000'>500-1,000</option>
          
         </select>
        </div>
        <button className="searchbtn" onClick={searchHandle}>SEARCH</button>

      </div>
       ))
      }
      
      
    </div>

    {
      services.length===0?
      (
        <Loading/>
      ):
      (

     
    <div className="sList"
    style={{
      width: "100vw"
    }}
    >
      {
        hotelList.map(hotel=>(
       <Hotel hotel={hotel} key={hotel._id} />
        ))
      }
      
    </div>
     )
    }
   </div>
  );
}
