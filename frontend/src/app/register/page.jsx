"use client"

import React, { useState } from 'react'
import "./style.css"
import Link from 'next/link'

const Register = () => {
    const[email,setEmail]=useState("")
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
  return (
   <>
   <div className="loginContainer">
    <div className="card">
        <h3>Register</h3>
        <div className="formR">
            
            <form onSubmit={
                ()=>{
                    console.log(`email is :${email}, password is :${password}`)
                }
            }>
                 <input
                 type='String'
                 placeholder='Enter Your Name'
                 onChange={(e)=>setName(e.target.value)}
                 />
                <input
                 type='email'
                 placeholder='Enter Your Email'
                 onChange={(e)=>setEmail(e.target.value)}
                 />
                 <input
                 type='password'
                 placeholder='Enter Your password'
                 onChange={(e)=>setPassword(e.target.value)}
                 />
                 <button  type='submit'>Register</button>
            </form>
        </div>
        <p className='p'>Already have account :<Link href={'/login'}>Login</Link></p>
    </div>
   </div>
   </>
  )
}

export default Register