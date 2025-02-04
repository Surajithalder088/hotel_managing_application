import React from 'react'
import "./style.css"
import { receipts } from '@/assets/receipt'
import Navbar from '../{component}/Navbar/page'
import Link from 'next/link'
import Order from '../{component}/Order/page'

const Profile = () => {
  return (
    <>
    <Navbar/>
    <div className="nav"></div>
    <div className="profile">
      <div className="user">
        <p>user@user.com </p>
        <p>acb road, kol-768906</p>
        <button className="btn">Logout</button>
      </div>
      <div className="receipts">
        <h4>Order history</h4>
          {
            receipts.map((item)=>
              ( <Link href={`/receipt/${item.id}`}>

                <Order key={item.id} item={item}/>
             </Link>
     
        )
            )
          }
       
      </div>
      </div>
    </>
  )
}

export default Profile