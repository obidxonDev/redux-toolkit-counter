import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   value: 0
}

export const counterSlice = createSlice({
   name: "counter",
   initialState,
   reducers: {
      increment: (state, action)=>{
         state.value = state.value + Number(action.payload)
      },
      decrement: (state, action)=>{
         state.value = state.value - Number(action.payload)
      },
      amoutInc: (state, action) => {
         state.value = state.value + action.payload
      }
   }
})

export const { increment, decrement, amoutInc} = counterSlice.actions
export default counterSlice.reducer