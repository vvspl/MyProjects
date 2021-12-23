import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from './store/counter_slice';
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

  return (
    <div className="App">
     <h1>My React Redux Toolkit Counter.</h1>
     <input type='text' value={selectorrr} readOnly/>
     <button onClick={decrementHandler}>Decrement</button>
     <button onClick={incrementHandler}>Increment</button>
     <button>Async Increment</button>
    </div>
  );
}

export default App;
