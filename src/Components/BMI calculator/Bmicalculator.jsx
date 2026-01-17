import React, { useState } from 'react'

const Bmicalculator = () => {
    const [weight,setWeight]=useState(0)
    const [height,setHeight]=useState(0)
    const [bmi,setBmi]=useState(0)
    const [message,setMessage]=useState("")
       
    const calbmi=(e)=>{
        e.preventDefault()
        if(weight===0 || height===0){
            alert("please! enter valid weight and height")
           
        }else{
            let bmi=(weight/(height*height)*703)
            setBmi(bmi.toFixed(1))

            if(bmi<18.5){
                setMessage("you are underweight")
            }else if(bmi>=18.5 && bmi<24.5){
                setMessage("you are a healthy weight")
            }else{
                setMessage("you are overweight")
            }
        }
    }
    const reload=()=>{
        window.location.reload()
    }
   
  return (
    <>
     <div className='w-full h-screen flex justify-center items-center'>
         <div className='w-80 h-96 shadow-lg shadow-gray-500 rounded-3xl'>
            <div className='p-10'>
              <form onSubmit={calbmi}>
                <div className='flex flex-col '>
                    <h1 className='text-center text-blue-600 font-bold text-xl mb-2'>BMI calculator</h1>
                  <label className='font-bold'>Weight (ibs)</label>
                  <input type="text" placeholder='Enter Weight Value' className='border py-1 my-2 pl-2' value={weight} onChange={(e)=>setWeight(e.target.value)} />
                  <label  className='font-bold'>Height (in)</label>
                  <input type="text" placeholder='Enter Height Value' value={height}  className='border py-1 my-2 pl-2' onChange={(e)=>setHeight(e.target.value)}/>
                </div>
                 <button  type='submit' className=' border w-full my-2 py-1 bg-blue-600 rounded-3xl'>Submit</button>
              <button className='border w-full  py-1 bg-blue-600 rounded-3xl' onClick={reload} type='button'>ReLoad</button>
              <div className='my-3 text-center'>
                <h1>Your BMI is:{bmi}</h1>
                <p>{message}</p>
              </div>
              </form>
             
              </div>
         </div>
     </div>

    </>
  )
}

export default Bmicalculator