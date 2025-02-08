"use client"
import Navbar from "@/app/{component}/Navbar/page";
import { receipts } from "@/assets/receipt";
import { useParams } from 'next/navigation'
import React, { useState,useEffect } from 'react'
import "./style.css"
import axios from 'axios'



const api="http://localhost:7070"

const Receipt = () => {
   
     const {id} =useParams()
    // const receipt=receipts.find((item)=>item.id=== 1)

      const [receipt,setReceipt]=useState([])
      const [service,setService]=useState([])
      const [paid,setPaid]=useState(receipt.paid)
      const [reviewed,setReviewed]=useState(receipt.paid)
      const[starvalue,setStarvalue]=useState(0)
      const [reviewText,setReviewText]=useState("")
      const starArray=[1,2,3,4,5]


      const fetchReceiptDetails= async()=>{
       const data= await axios.get(api+`/api/receipt/${id}`,{withCredentials:true})
       console.log(data.data.receipt);
       setReceipt(data.data.receipt)
       setService(data.data.service)
       
      }
      useEffect(() => {
       fetchReceiptDetails()
      
       
      }, [])
      

  return (
    <>
    <Navbar/>
    <div className="nav">nav</div>

    {
     (receipt.length===0)?(
        <div className="receiptBody">
          <p> no details fetched</p>
        </div>
      ) :(

     

    <div className="receiptBody">
      <div className="first">
    <h2> Receipt Generated for Service : {id}</h2>

      <p> <div className="variable">Receipt id :</div>{receipt._id}</p>
      <p><div className="variable">service.Type: </div>{receipt.type}</p>
      <p><div className="variable">Provider Name: </div>{receipt.hotelName}</p>
      <p><div className="variable">hotel Registered at : </div>{service.hotel.createdAt}</p>
      
        <p><div className="variable">Total payable Price: </div>
      <img src="/rupee-indian.png" className="rupee"/>
      {receipt.price}</p>
      <p><div className="variable">Service Details: </div>{receipt.details}</p>
      </div>
      <div className="second">
    
      
      
      {
        !paid?
        <div className="payment">
          <span>Make payment :</span>
        <button className="paybtn"
        onClick={fetchReceiptDetails}
        >pay</button>
        </div>
        :""
      }
      <div className="price">
      <p><div className="variable">paid : </div>{paid?"yes":"no"}</p>
      {
        paid? <div className="done"></div>
        :
        <div className="pending"></div>
      }
     </div>
      <p><div className="variable">receipt generated at : </div>{receipt.createdAt}</p>
     <div className="reviewbox">
      {
        !reviewed?<div className="reviewform">
          <div className="star">
            {
              starArray.map(s=>(
                <img className="starimg" src={(starvalue>=s)?"/star-fill.png":"/star-line.png"} key={s} 
                onClick={()=>{
                  setStarvalue(s)
                  
                }}
                />
              ))
            }
            
            
          </div>
         <textarea placeholder="Give reviews" 
         value={reviewText}
         onChange={(e)=>setReviewText(e.target.value)}
         ></textarea>
          <button
          onClick={()=>{
            console.log({reviewText,starvalue});
            
          }}
          className="btn"
          >Submit</button>
        </div>:
        <p>You already reviewed</p>
      }
     </div>
     
      </div>
    </div>
     )
    }
    </>
  )
}

export default Receipt