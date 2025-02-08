import Link from 'next/link'
import React, { useRef } from 'react'
import "./style.css"
import { motion, useInView } from 'motion/react'
import { redirect } from 'next/dist/server/api-utils'



const divVariant={
  initial:{
    y:100,
    opacity:0
},
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:2.7,
      straggerChildren:0.2
    }
  }
}

const Service = ({l}) => {

const ref=useRef()
const   isInView=useInView(ref,{margin:"-200px"})
  return (
    <motion.div 
    variants={divVariant}
    animate={"animate"}
    initial='initial'
    key={l._id} className="serviceContainer" ref={ref}>
     <div className="access">
        <button className="iconedit"
        onClick={()=>{
          alert("edit")
          redirect(`/edit-service/${l._id}`)
        }}
        >
            <img src='/file-edit-line.png'/>
        </button>
        <button className="iconedit">
        <img src='/delete-bin-6-line.png'/>
        </button>
     </div>
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
          <div className='buyer'>Number of Buyer : {l.buyer.length}</div>
          </div>
        
          </motion.div>
  )
}

export default Service