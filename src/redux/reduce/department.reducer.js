import { ADD_DEPARTMENT, DELETE_DEPARTMENT, GET_DEPARTMENT, UPDATE_DEPARTMENT } from "../ActionType";

const initialState = {
    isLoading: false,
    department: [],
    error: null
}

export const departmentReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case GET_DEPARTMENT:
            return {
                ...state,
                department: action.payload
            }
        case ADD_DEPARTMENT:
            return {
                ...state,
                department: state.department.concat(action.payload)
            }

        case UPDATE_DEPARTMENT:
            return {
                ...state,
                department: state.department.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload
                    } else {
                        return v
                    }
                })
            }
        case DELETE_DEPARTMENT:
            return {
                ...state,
                department: state.department.filter((v) => v.id !== action.payload)
            }
        default:
            return state
    }

}