/* eslint-disable arrow-body-style */
import React, {useState, useEffect} from 'react';

const App = () => {

 const [counter, setCounter] = useState(0);
 const[startValue, setStartValue] = useState(0);

 const start = ()=>setCounter(counter + startValue);

 useEffect(() => {
  const time = setInterval(() => {
    console.log("---", counter);
    start(startValue)
  }, 1000);

  return () => {
    clearInterval(time);
  };
}, [counter, startValue]);

  return (
    <div className='container'>
      <div className='counter'>{counter}</div>
      <button onClick={()=>setStartValue(1)}>Start</button>
      <button onClick={()=>{setCounter(0); setStartValue(0)}}>Stop</button>
      <button onClick={()=>setStartValue(0)}>Pause</button>
    </div>
  );
};

export default App;
