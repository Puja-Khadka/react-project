
import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import Demo from "./Components/Demo";
function App() {
  const [liked,setLiked]=useState(false)
  const [count ,setCount]=useState(0)
  
  const handleClick=()=>{
   if(!liked){
    setLiked(true)
    setCount(count+1)
   }else{
    setLiked(false)
    setCount(count-1)
   }
    
  }

  return (
    <>
      {/* <h1> your liked is :{count}</h1>
    <div className="flex justify-center items-center h-screen">
    
    <div className={`flex justify-center items-center h-10 w-10 ${liked?"bg-blue-600":"bg-gray-600"}`} onClick={handleClick}>
      <FaThumbsUp className="text-white "/>
      </div>
      </div> */}

      <Demo/>
    </>
  )
}

export default App
