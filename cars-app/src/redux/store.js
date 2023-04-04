import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//createAsyncThunk is a function that create  thunk function creator that you can dispatch from component

const mockFetch = async () => {
  return new Promise((res, rej)=>{
    setTimeout(()=>{
      res(9)
    },2000)
  })
}
//dispatch(initCounter())
export const initCounter = createAsyncThunk(
  'counter/init',
  async (_, {dispatch, getState}) => {
    
    const response = await mockFetch()
    return response
  }
)
//promise
//pending, fulfilled, rejected

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 1,
    },
    reducers: {
        increment: (state) => {
          console.log("increment")
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount : (state, action) => {
            state.value += action.payload
        }
    },

    extraReducers:(builder) => {
      // Add reducers for additional action types here, and handle loading state as needed
      builder.addCase(initCounter.pending, (state, action) => {
        // Add user to the state array
        //show loader ...
        console.log("loading")
      })
      .addCase(initCounter.fulfilled, (state, action) => {
        // Add user to the state array
        state.value = action.payload;
    
      })
      .addCase(initCounter.rejected, (state, action) => {
        // Add user to the state array
        //show notification, hide loader
        console.log("rejected")
      })
    }

});

//extraReducers: internal actions, actions that will not exposed to component

//action creator
export const {increment, decrement, incrementByAmount} = counterSlice.actions

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
      todos: [],
  },
  reducers: {
      add: (state) => {
          // Redux Toolkit allows us to write "mutating" logic in reducers. It
          // doesn't actually mutate the state because it uses the Immer library,
          // which detects changes to a "draft state" and produces a brand new
          // immutable state based off those changes
          state.value += 1;
      },
      remove: (state) => {
          state.value -= 1;
      },
  },
});
// Action creators are generated for each case reducer function
export const { add, remove} = todoSlice.actions;


//pattern: for human, maintainable, readable, meaningful
//slice: slices of the store
export default configureStore({
    reducer: {
        counter: counterSlice.reducer,
        todo: todoSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
      console.log("mw",getDefaultMiddleware());//thunk, immerjs

      return [...getDefaultMiddleware()]
    }
});

/* 
  mutable
  immutable:

*/
