import React, { useState } from 'react'
import question from '../../question.json'
import Timer from './Timer'
function QuizApp() {
  const [currentIndex,setCurrentIndex]=useState(0)
  const [score,setScore]=useState(0)
  const [selected ,setSelected]=useState("")
  const [showresult,setShowresult]=useState(false)
  
  
  const NextQuestion=()=>{
    if(currentIndex+1<question.length){
     setCurrentIndex(currentIndex+1)
    }else{
      setShowresult(true)
    }
  }
  
  const selectOption=(option)=>{
   
    setSelected(option)
          if(option===question[currentIndex].correct){
            setScore(prev=>prev+1)
 }
}
function handleclick(){
  setCurrentIndex(0)
  setScore(0)
  setSelected("")
  setShowresult(false)
}
  return ( 
    <>
   
     <div className='w-full h-screen flex flex-col justify-center items-center bg-blue-300'>
      <Timer/> 

      {showresult?(<><div className='text-white text-2xl font-bold flex gap-3 justify-center'><h1>Your Score: {score}</h1>
      <button className='border px-2 bg-black text-white ' onClick={handleclick}>reset</button>
      </div></>):<>
     <div className='shadow-lg w-100 h-100 bg-gray-500 border rounded-3xl hover:scale-105 transition-all duration-300 ease-in-out flex flex-col justify-center items-center mt-3'>
        <span className='border-b-2 w-full flex justify-center'> <h1 className='text-white text-2xl font-bold mb-1 '>Quiz App</h1></span>
        <div className=' p-5'>
           <h1 className='text-xl font-bold'>{question[currentIndex].question}</h1>
           {question[currentIndex].options.map((option)=>(
            <div className='flex flex-col w-full mt-3'key={option}>
            <button className={`border p-2 rounded-full ${selected===option?"bg-blue-800":""}`} onClick={()=>selectOption(option)}>{option}</button>
            </div>
           ))}
           <button className='w-full bg-blue-800 font-bold mt-3 p-2 ' onClick={NextQuestion}>Next</button>
        </div>
        
      </div>
      </>}
     
     
     </div>
    </>
  )

}

export default QuizApp