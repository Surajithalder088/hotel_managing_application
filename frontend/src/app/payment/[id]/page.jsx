"use client"

import { useParams } from 'next/navigation'
import React from 'react'

const Payment = () => {
  const {id}=useParams()
  return (
    <div>Payment  :{id}</div>
  )
}

export default Payment