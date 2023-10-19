import { ADD_TO_CART } from "../ActionType";

const initialState = {
    isLoading: false,
    cart: [],
    error: null
}


export const cartReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case ADD_TO_CART:


        default:
            return state

    }
}