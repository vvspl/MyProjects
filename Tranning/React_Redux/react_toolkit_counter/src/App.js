import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, fetchData } from './store/counter_slice';
import './App.css';


function App() {
const selectorrr = useSelector(state => state.counterrr.coun_t);
const dispatchhh = useDispatch();

const decrementHandler = ()=>{
  dispatchhh(decrement());
}

const incrementHandler = ()=>{
  dispatchhh(increment());
}

const asyncIncrementHandler = ()=>{
  dispatchhh(fetchData());
}

  return (
    <div className="App">
     <h1>My React Redux Toolkit Counter.</h1>
     <input type='text' value={selectorrr} readOnly/>
     <button onClick={decrementHandler}>Decrement</button>
     <button onClick={incrementHandler}>Increment</button>
     <button onClick={asyncIncrementHandler}>Async Increment</button>
    </div>
  );
}

export default App;