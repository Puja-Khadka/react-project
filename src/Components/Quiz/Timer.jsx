import React, { useEffect, useState } from "react";

function Timer() {
  const [timeleft, setTimeleft] = useState(10);
  const [display,setDisplay]=useState('')

  useEffect(() => {
    const interval = setInterval(
      () => {
        setTimeleft((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(()=>{
    let formatedtime=(`${(Math.floor(timeleft/60)).toString().padStart(2,0)}:${(timeleft%60).toString().padStart(2,0)}`)
    setDisplay(formatedtime)
  },[timeleft])
  return (
    <div>
      <h1 className="font-bold">Time Left: {display}</h1>
    </div>
  );
}

export default Timer;
