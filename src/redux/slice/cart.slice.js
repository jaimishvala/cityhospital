import { createSlice } from "@reduxjs/toolkit"


const initState = {
    cart: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: initState,
    reducers: {
        addTOCart: (state, action) => {
            // console.log(action)
            // state.cart += 1
        }
    }
})


export const { addTOCart } = cartSlice.actions

export default cartSlice.reducer