"use client"

import React, { useEffect, useState } from 'react'
import "./style.css"
import { receipts } from '@/assets/receipt'
import Navbar from '../{component}/Navbar/page'
import Link from 'next/link'
import Order from '../{component}/Order/page'
import axios from 'axios'



const api=process.env.NEXT_PUBLIC_API_URL



const Profile = () => {
 const [user,setUser]=useState(null)
 const [receiptList,setReceiptList]=useState([])


  const fetchUserProfile=async()=>{
    const data=  await axios.get(api+`/api/customer/profile`,{withCredentials:true})
    
    setUser(data.data.authUser)
    setReceiptList(data.data.receipts)
    
  }
  useEffect(() => {
    fetchUserProfile()
  
   
  }, [])
  
  return (
    <>
    <Navbar/>
    <div className="nav"></div>
    <div className="profile">
      {
        (user ===null)?(
          <div className="user">
            <p> no user</p>
            <button className="btn"
        onClick={fetchUserProfile}
        >Logout</button>
          </div>
        ):

        (

        
      <div className="user">
        <p>{user.email} </p>
        <p>total orders :{user.receipts.length}</p>
        <p>acb road, kol-768906</p>
        <button className="btn"
        onClick={fetchUserProfile}
        >Logout</button>
      </div>
      )
      }
      {
        (receiptList.length===0)?
        (<div className="receipts">
          <p>No orders</p>
        </div>)
        :(

        

      <div className="receipts">
        <h4>Order history</h4>
          {
            receiptList.map((item)=>
              ( <Link href={`/receipt/${item._id}`}>

                <Order key={item.id} item={item}/>
             </Link>
     
        )
            )
          }
       
      </div>
      )
      }
      </div>
    </>
  )
}

export default Profile