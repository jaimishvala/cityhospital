import { API_URL } from "../../Utils/baseURL";
import { DELETE_MEDICINES, GET_MEDICINES } from "../ActionType";


export const getMedicine = () => (dispatch) => {
    try {
        fetch(API_URL + "medicines")
            .then(response => response.json())
            .then(data => dispatch({ type: GET_MEDICINES, payload: data }))

    } catch (error) {
        console.log(error);
    }
}


export const deleteMedicine = () => (dispatch) => {
    try {
        fetch(API_URL + "medicines/")
            .then(response => response.json())
            .then(data => dispatch({ type: DELETE_MEDICINES, payload: data }))
    } catch (error) {
        console.log(error);
    }
}