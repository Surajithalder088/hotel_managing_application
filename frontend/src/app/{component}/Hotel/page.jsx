"use client"

import React from 'react'
import "./style.css"

const Hotel = ({hotel}) => {
  return (
    <>
    <div className="name">{hotel.name}</div>
    </>
  )
}

export default Hotel