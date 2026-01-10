import React, { useEffect, useState } from 'react'

function Demo() {
  const [number,setNumber]=useState(10)
  const[loading,setLoading]=useState(false)

  function HandleClick(){
   
     setLoading(true)
  }
  useEffect(()=>{
     if(!loading)return
    const interval=setInterval(()=>{
      setNumber(prev=>{
        if(prev<=1){
       clearInterval(interval)
       setLoading(false)
       return 0
      }
      return prev-1
      })
      
    },1000)
    return()=> clearInterval(interval)
  },[loading])
  return (
    <>
    <div className=' flex flex-col items-center justify-center h-screen'>
    <div className='inline-block'>
      <h1 className='text-center py-6 text-8xl'>{number}</h1>
      {!loading?(<button className='bg-blue-700 text-white py-2 px-10'onClick={HandleClick} >click</button>)
      :(<button className='bg-blue-700 text-white py-2 px-10' >Loading....</button>)}
      
      
    </div>
    </div>
    </>
  )
}

export default Demo