import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
  'counter/FetchData', // action name, same namespase
  async function () {
    // const response = await function(){setTimeout(0, 5000); return 1};     // some async function
    await function () {
      setTimeout(() => 0, 2000);
    };
    return 1;
  }
);

const counterSlice = createSlice({
  name: 'counter', // name of action automated generated using this name
  initialState: { coun_t: 0 }, // начальное состояние
  reducers: {
    // описание редюсеров
    increment(state, action) {
      // console.log(state);
      // console.log(action);
      state.coun_t++; // в Toolkit можно не заморачиваться насчет иммутабельности
      action.payload = 0;
      // console.log(state);
    },
    decrement(state) {
      // мы не используем никакой пэйлоад, поэтому убрать его из арнументов, иначе как в случае с инкрементом пришлось поставить ему значение 0, иначе payload=undefined и возникает ошибка
      state.coun_t--;
      //    action.payload=0;
    },
  },
  // если нужно добавить Middlewhear,то добавляем их здесь
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
      action.payload = 0;
    },
    [fetchData.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.status = 'resolved';
      state.coun_t += action.payload;
      console.log(action.payload);
    },
    [fetchData.rejected]: (state, action) => {},
  },
});

export const { increment, decrement } = counterSlice.actions; // создание экшенов (они создаются автоматически)

export default counterSlice.reducer; // из всех редюсеров, описаных выше, автоматически создается один reducer
