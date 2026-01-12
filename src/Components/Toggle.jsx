import React, { useState } from 'react'
import { HiH1 } from 'react-icons/hi2'

function Toggle() {
    const [show,setShow]=useState(false)
  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen'>
         
    <button className='' onClick={()=>setShow(!show)}>Toggle</button>
     {show && <h1>Hello </h1>}
    </div>
    </>
  )
}

export default Toggle