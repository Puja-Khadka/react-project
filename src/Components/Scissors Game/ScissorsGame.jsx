import React, { useEffect, useState } from 'react'

function ScissorsGame() {
    const Choices= ["✊","✋","✌️"]
    const [userchoice,setUserchoice]=useState("")
    const  [computerchoice,setComputerchoice]=useState("")
    const [result,setResult]=useState("")
       
   const playgame=(Choice)=>{
     setUserchoice(Choice)
     const computer=Choices[Math.floor(Math.random()*3)]
     setComputerchoice(computer)
   }
   useEffect(()=>{
    if(userchoice===""||computerchoice==="")return

    if(userchoice===computerchoice){
      setResult("Draw 🤝")
    }else if(
      (userchoice==="✊"&&computerchoice==="✌️")||
      (userchoice==="✌️" && computerchoice==="✋")||
      (userchoice==="✋" && computerchoice==="✊")
    ){
      setResult("you win 🎉")
    }else{
      setResult("you lose 😢")
    }

    
   },[userchoice,computerchoice])
     

  return (
    <>
     <div className=' w-full  h-screen flex justify-center items-center bg-cyan-300'>

      <div className='p-10 bg-blue-700 w-96 rounded shadow-gray-500 shadow-lg group'>
        <div className='group-hover:scale-105 duration-300'>
        <h1 className='text-center font-bold text-2xl text-emerald-950'>Scissor-Paper Game</h1>
        <div className='flex  items-center gap-10 justify-center text-center mt-4 '>
           <div>
            <h1 className='font-bold text-3xl text-white' >You </h1>
            <div className='w-36 h-36 border my-4 flex justify-center items-center text-5xl'>{userchoice}</div>
           </div>
           <div>
            <h1 className='font-bold text-3xl text-white'>Computer</h1>
            <div className='w-36 h-36 border my-4 flex justify-center items-center text-5xl'>{computerchoice}</div>
           </div>
        </div>
        <div className='text-2xl font-semibold text-center'>{result}</div>
          
          <div className='flex gap-10 items-center justify-center mt-5'>
            {
              Choices.map((Choice)=>(
                <button key={Choice} onClick={()=>playgame(Choice)} className='border text-4xl p-4 hover:bg-white'>
                  {Choice}
                </button>
              ))
            }
          </div>
        
      </div>
      </div>

     </div>
    </>
  )
}

export default ScissorsGame