import React, { useRef, useState } from 'react'

function Demo1() {
    const [time,setTime]=useState(0)
        let intervalIdRef=useRef(null)
     function handleStart(){
        if(intervalIdRef.current!=null)return
     intervalIdRef.current=  setInterval(()=>{
       setTime(time=>time+1)
       },1000)
     }
     function handleStop(){
       clearInterval(intervalIdRef.current)
     }
     function handleReset(){
         clearInterval(intervalIdRef.current)
         setTime(0)
     }

  return (
    <>
     <div className='flex flex-col justify-center items-center h-screen'>
        <h1>StopWatch:{time}</h1>
        <div>
        <button className='border px-3' onClick={handleStart}>Start</button>
        <button className='border px-3' onClick={handleStop}>Stop</button>
        <button className='border px-3' onClick={handleReset}>Reset</button>
        </div>
     </div>
    
    </>
  )
}

export default Demo1