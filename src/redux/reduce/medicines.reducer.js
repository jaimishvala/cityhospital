import { ADD_MEDICINES, DELETE_MEDICINES, ERROR_MEDICINES, GET_MEDICINES, LOADING_MEDICINES, UPDATE_MEDICINES } from "../ActionType"

const initialState = {
    isLoading: false,
    medicines: [],
    error: null
}


export const medicinesReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case LOADING_MEDICINES:
            return {
                isLoading: true,
                medicines: [],
                error: null
            }

        case ERROR_MEDICINES:
            return {
                isLoading: false,
                medicines: [],
                error: action.payload
            }
        case GET_MEDICINES:
            return {
                isLoading: false,
                medicines: action.payload,
                error: null
            }
        case ADD_MEDICINES:
            return {
                ...state,
                medicines: state.medicines.concat(action.payload)
            }

        case UPDATE_MEDICINES:
            return {
                ...state,
                medicines: state.medicines.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload
                    } else {
                        return v
                    }
                })
            }
        case DELETE_MEDICINES:
            return {
                ...state,
                medicines: state.medicines.filter((v) => v.id !== action.payload)
            }
        default:
            return state
    }

}