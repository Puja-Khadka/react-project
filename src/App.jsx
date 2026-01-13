
import { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import Demo from "./Components/Demo";
import Toggle from "./Components/Toggle";
import Demo1 from "./Components/Demo1";
import Demo2 from "./Components/Demo2";
import ScissorsGame from "./Components/Scissors Game/ScissorsGame";
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

      {/* <Demo/> */}
      {/* <Toggle/> */}
      {/* <Demo1/> */}
      {/* <Demo2/> */}
      <ScissorsGame/>
    </>
  )
}

export default App
