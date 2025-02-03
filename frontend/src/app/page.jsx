"use client"

import Image from "next/image";
import Link from "next/link";
import { services } from "@/assets/service";

const links=[
  {id:1,name:"hotel abc",price:450},
  {id:2,name:"hotel tyf",price:450},
  {id:3,name:"hotel kls",price:450},
  {id:4,name:"hotel wrd",price:450}
]

export default function Home() {
  return (
   <div className="h-screen flex bg-slate-900 text-slate-50">
    <div className="sList flex ">
      {
        services.map(l=>(
        <div key={l.id} className="flex flex-col">
          <div>{l.type}</div>
          <div>{l.hotelName}</div>
          <div>{l.price}</div>
          <div>{l.buyerOfService}</div>
          <div>{l.details}</div>
        <Link href={`/service/${l.id}`}>click here</Link>
          </div>
        ))
      }
      
    </div>
   </div>
  );
}
