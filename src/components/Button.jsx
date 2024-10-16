import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button() {
  return (
    <div className='min-w-36 px-4 py-2 text-black bg-zinc-100 rounded-full flex items-center justify-between'>
        <span className='font-medium text-sm'>Get Started</span>
        <IoIosReturnRight/>
      
    </div>
  )
}

export default Button
