import { AUTH_ERROR, SIGNUP_REQUEST, SIGNUP_RESPONSE } from "../ActionType"


export const signupRequest = (data) => (dispatch) => {
    console.log(data);
    dispatch({ type: SIGNUP_REQUEST, payload: data })
}

export const signupResponse = (data) => (dispatch) => {
    console.log(data);
    dispatch({ type: SIGNUP_RESPONSE, payload: data })
}

export const authError = (data) => (dispatch) => {
    console.log(data);
    dispatch({ type: AUTH_ERROR, payload: data })
}