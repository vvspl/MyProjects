import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { coun_t: 0},                                     // начальное состояние
    reducers: {                                         // описание редюсеров
        increment(state, action) {
            console.log(state);
            console.log(action);
            state.coun_t++; 
            action.payload=0;                  
            console.log(state);                                  // в Toolkit можно не заморачиваться насчет иммутабельности
        },
        decrement(state) {                         // мы не используем никакой пэйлоад, поэтому убрать его из арнументов, иначе как в случае с инкрементом пришлось поставить ему значение 0, иначе payload=undefined и возникает ошибка
           state.coun_t--
        //    action.payload=0;                   
        },
    },
});

export const {increment, decrement} = counterSlice.actions;  // создание экшенов (они создаются автоматически)

export default counterSlice.reducer;  // из всех редюсеров, описаных выше, автоматически создается один reducer