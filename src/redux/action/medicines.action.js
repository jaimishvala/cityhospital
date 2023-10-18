import { API_URL } from "../../Utils/baseURL";
import { ADD_MEDICINES, DELETE_MEDICINES, GET_MEDICINES, UPDATE_MEDICINES } from "../ActionType";


export const addMedicines = (data) => (dispatch) => {
    // console.log(data);
    try {
        fetch(API_URL + "medicines", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then((rdata) => dispatch({ type: ADD_MEDICINES, payload: rdata }))

            .catch(error => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const updateMedicine = (data) => (dispatch) => {
    try {
        fetch(API_URL + "medicines/" + data.id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then((rdata) => dispatch({ type: UPDATE_MEDICINES, payload: rdata }))
            .catch(error => console.log(error))

    } catch (error) {
        console.log(error);
    }

}


export const getMedicine = () => (dispatch) => {
    try {
        fetch(API_URL + "medicines")
            .then(response => response.json())
            .then(data => dispatch({ type: GET_MEDICINES, payload: data }))
            .catch(error => console.log(error))
    } catch (error) {
        console.log(error);
    }
}


export const deleteMedicine = (id) => (dispatch) => {
    console.log(id);
    try {
        fetch(API_URL + "medicines/" + id, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(() => dispatch({ type: DELETE_MEDICINES, payload: id }))
            .catch(error => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

