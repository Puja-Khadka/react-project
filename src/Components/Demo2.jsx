import React, { useEffect, useState } from 'react'

function Demo2() {
    const [qty ,setQty]=useState(1)

   
    function increase(){
        if(qty<10){
          setQty(qty+1)
        }
       
    }
    function decrease(){
       if(qty>1){
       setQty(qty-1)
       } 
    }
    function handleClick(){
        alert(`Added ${qty} items to cart`)
    }

  return (
    <>
  
     <div className="w-full flex justify-center items-center h-screen">
  <div className="shadow-lg flex items-center gap-10 p-10 bg-gray-700 w-100 rounded-2xl">

    <div className="w-40 h-40 overflow-hidden rounded">
      <img
        className="w-full h-full object-cover"
        src="https://static.vecteezy.com/system/resources/thumbnails/020/221/141/small_2x/1514-blue-bag-isolated-on-a-transparent-background-photo.jpg"
      />
    </div>

    <div className="text-white">
      <h1 className="text-2xl">$129.9</h1>

      <div className="flex mt-4">
        <button className="border px-5" onClick={decrease} >-</button>
        <button className="border px-5" >{qty}</button>
        <button className="border px-5" onClick={increase}>+</button>
      </div>
      <div className='mt-4'>
        <button className="border px-5 w-full rounded-2xl bg-blue-800" onClick={handleClick}>Add to Cart</button>
      </div>
    </div>

  </div>
</div>

     
    </>
  )
}

export default Demo2