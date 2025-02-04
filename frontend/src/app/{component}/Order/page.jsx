"use client"

import React from 'react'
import "./style.css"

const Order = ({item}) => {
  return (
    <>
    <div className="receipt" >
        <div className="hotel">
               <p>{item.hotelName}</p>
               </div>
               <div className="data">
               <p> <div className="variable">service type : </div>{item.type}</p>
               <p><div className="variable">Price : </div>
                <img src='/rupee-indian.png' className='rupee'/>
                {item.price}</p>
               
               <p><div className="variable">payment</div>{item.paid?"paid":"pending"}</p>
               {
                item.paid?<div className="done"></div>
                :
                <div className="pending"></div>
               }
               <p><div className="variable">Service Taken :</div>{item.details}</p>
               <p><div className="variable">Order Date :</div>{item.craeteAt}</p>
               </div>
                  
             </div>
    </>
  )
}

export default Order