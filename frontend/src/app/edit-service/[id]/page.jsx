"use client"

import { useParams } from 'next/navigation'
import React from 'react'
import "./style.css"

const EditService = () => {
    const {id}=useParams()
  return (
    <div>EditService for the service id :{id}</div>
  )
}

export default EditService