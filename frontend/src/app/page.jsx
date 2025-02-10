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

const api=process.env.NEXT_PUBLIC_API_URL



export default function Home() {

  const [searchTerm,setSearchTerm]=useState("")
  const [services,setServices]=useState([])

  const filterData=searchTerm.trim()===""?services :
  services.filter((item)=>item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))


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
  const value=process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
   
 fetchingServiceList()
 
  console.log(services);
  console.log(value);
  
  
    
  }, [])
  
  return (
   <div className="home">
   <div className='navbarContainer'> 
    <div className="logo">
      <h1 >SITO</h1>
    
    </div>
    <div className="searchContainer">
      <img src="search-line.png"/>
    <input 
    type="text"
    placeholder="Search items or hotel name"
    value={searchTerm}
    onChange={(e)=>setSearchTerm(e.target.value)}
    className="searchBar"
    /></div>
   
      <div className="links" >
        <Link href={'/'}>
       <img src="home-2-fill.png" className="icon" />
        </Link>
        <Link href={'/profile'}>
        <img src="user-3-fill.png"  className="icon"  />
        </Link>
      </div>
   
    </div>
    <div className="nav">demonav</div>

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
        filterData.map(service=>(
       <Service l={service} key={service._id} />
        ))
      }
      
    </div>
     )
    }
   </div>
  );
}
