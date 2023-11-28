import { SIGNUP_REQUEST } from "../ActionType"


export const signupRequest = (data) => (dispatch) => {
    console.log(data);
    dispatch({ type: SIGNUP_REQUEST, payload: data })
}