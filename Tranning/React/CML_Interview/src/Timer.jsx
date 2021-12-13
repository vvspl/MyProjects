import React, {useState, useEffect} from "react";



const Timer = () => {
  const [state, setState]=useState(0);
  useEffect(()=>{
    setTimeout(()=>setState(prev=>prev+1), 1000);
  },);
  
  return (
    <div>
      <p>{state}</p>
    </div>
  );
};

export default Timer;