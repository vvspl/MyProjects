React Redux Toolkit Counter
(used lesson https://www.youtube.com/watch?v=C0fBnil_Im4)

  Creation order:
1. npx create-react-app react_toolkit_counter
2. clear all odd parts from standart app
3. Make UI (buttons, input...)
4. npm add @reduxjs/toolkit react-redux // installing redux_Toolkit and redux
5. Create Store folder. Create store.js file.
6. Create slice file. (In Toolkit Reducers is called Slices)
7. Wrap our Application in index.js in <Provider>, import store from store folder
8. Add to our App import hooks useSelector(), useDispatch()
9. Import actions from store to our App: import {increment, decrement} from counter_slice
10. Use dispatch(actionCreators()) to change your store and selector(state=>state.counterrr.coun_t) to get data from the store

11. If we will need Middlewhears, then add them to counter_slice on the same level as redusers.
    
    THUNK
12. For adding async we add to counter_slice.js import {createAsyncThunk} from @reduxjs/toolkit
13. Add extraRedusers to the same file.
14. Import useEffect() to our App.js, import fetchData from counter_slice.js if we need to load Data when page started to load.


