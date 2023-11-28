import { SIGNUP_REQUEST } from "../ActionType";

const initialValues = {
    isLoading: false,
    user: null,
    error: null
}


export const authReducer = (state = initialValues, action) => {
    console.log(action);

    switch (action.type) {
        case SIGNUP_REQUEST:
            return state;
        default:
            return state;
    }

}