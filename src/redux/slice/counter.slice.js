import { createSlice } from "@reduxjs/toolkit"


const initState = {
    count: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState: initState,
    reducers: {
        increment: (state, action) => {
            console.log(action);
            state.count += action.payload
        },
        decrement: (state, action) => {
            state.count -= 1
        }
    }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer