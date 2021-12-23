import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter_slice';        // назван counterReducer вместо counterSlice т.к. экспортируется по дефолту 

export default configureStore({
  reducer: {
    counterrr: counterReducer,
  },
});