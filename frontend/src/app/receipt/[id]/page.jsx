"use client"
import Navbar from "@/app/{component}/Navbar/page";
import { receipts } from "@/assets/receipt";
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import "./style.css"

const Receipt = () => {
   
     const {id} =useParams()
     const receipt=receipts.find((item)=>item.id===Number(id))

      const [paid,setPaid]=useState(receipt.paid)
  return (
    <>
    <Navbar/>
    <div className="nav">nav</div>
    <div className="receiptBody">
      <div className="first">
    <h2> Receipt Generated for Service : {id}</h2>

      <p> <div className="variable">Receipt id :</div>{receipt.id}</p>
      <p><div className="variable">service.Type: </div>{receipt.type}</p>
      <p><div className="variable">Provider Name: </div>{receipt.hotelName}</p>
      <p><div className="variable">hotel Registered at : </div>{receipt.hotelRegisterd}</p>
      </div>
      <div className="second">
      <p><div className="variable">Total payable Price: </div>
      <img src="/rupee-indian.png" className="rupee"/>
      {receipt.price}</p>
      <p><div className="variable">Service Details: </div>{receipt.details}</p>
      {
        !paid?
        <div className="payment">
          <span>Make payment :</span>
        <button className="paybtn">pay</button>
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
      <p><div className="variable">receipt generated at : </div>{receipt.craeteAt}</p>
      </div>
    </div>
    </>
  )
}

export default Receipt