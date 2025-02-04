import Link from 'next/link'
import React from 'react'
import "./style.css"

const Service = ({l}) => {
  return (
    <div key={l.id} className="serviceContainer">
        <div className='hotelName'>{l.hotelName}</div>
            <div className="desc1">
            <div className='type'>Service Type is : {l.type}</div>
          <div className='details'>
            <p className="para">Description of the service : </p>{l.details}
            </div>
         
            </div>
        <div className="desc2">
          <div className='price'>
            <img src='/rupee-indian.png' className='rupee'/>
              {l.price} </div>
          <div className='buyer'>Number of Buyer : {l.buyerOfService}</div>
          </div>
        <Link className='link' href={`/service/${l.id}`}>
        <button className='btn'>View Details</button>
        </Link>
          </div>
  )
}

export default Service