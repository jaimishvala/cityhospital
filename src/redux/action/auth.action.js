import { AUTH_ERROR, FORGET_REQUEST, FORGET_RESPONSE, SIGNIN_REQUEST, SIGNIN_RESPONSE, SIGNUP_REQUEST, SIGNUP_RESPONSE } from "../ActionType"


export const signupRequest = (data) => (dispatch) => {
    console.log(data);
    dispatch({ type: SIGNUP_REQUEST, payload: data })
}

export const signupResponse = (data) => (dispatch) => {
    dispatch({ type: SIGNUP_RESPONSE, payload: data })
}

export const authError = (data) => (dispatch) => {
    dispatch({ type: AUTH_ERROR, payload: data })
}

export const signinRequest = (data) => (dispatch) => {
    console.log(data);
    dispatch({ type: SIGNIN_REQUEST, payload: data })
}

export const signinResponse = (data) => (dispatch) => {
    console.log(data);
    dispatch({ type: SIGNIN_RESPONSE, payload: data })
}


export const forgetRequest = (data) => (dispatch) => {
    console.log(data);
    dispatch({ type: FORGET_REQUEST, payload: data })
}

export const forgetResponse = (data) => (dispatch) => {
    console.log(data);
    dispatch({ type: FORGET_RESPONSE, payload: data })
}