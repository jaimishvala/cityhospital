import { AUTH_ERROR, FORGET_REQUEST, FORGET_RESPONSE, SIGNIN_REQUEST, SIGNIN_RESPONSE, SIGNUP_REQUEST, SIGNUP_RESPONSE } from "../ActionType";

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
        case SIGNUP_RESPONSE:
            return {
                isLoading: false,
                user: action.payload,
                error: null
            }
        case AUTH_ERROR:
            return {
                isLoading: false,
                user: null,
                error: action.payload
            }
        case SIGNIN_REQUEST:
            return state
        case SIGNIN_RESPONSE:
            return {
                isLoading: false,
                user: action.payload,
                error: null
            }
        case FORGET_REQUEST:
            return state
        case FORGET_RESPONSE:
            return {
                isLoading: false,
                user: action.payload,
                error: null
            }
        default:
            return state;
    }

}