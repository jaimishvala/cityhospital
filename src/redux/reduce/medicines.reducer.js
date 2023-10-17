import { GET_MEDICINES } from "../ActionType"

const initialState = {
    isLoading: false,
    medicines: [],
    error: null
}


export const medicinesReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case GET_MEDICINES:
            return {
                ...state,
                medicines: action.payload
            }
        default:
            return state
    }

}