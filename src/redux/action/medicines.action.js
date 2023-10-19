import { API_URL } from "../../Utils/baseURL";
import { ADD_MEDICINES, DELETE_MEDICINES, ERROR_MEDICINES, GET_MEDICINES, LOADING_MEDICINES, UPDATE_MEDICINES } from "../ActionType";


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
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('addMedicine went wrong!')
            })
            .then((rdata) => dispatch({ type: ADD_MEDICINES, payload: rdata }))

            .catch(error => dispatch(errorMedicine(error)))
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


export const getMedicine = () => (dispatch) => {
    try {
        dispatch(loadingMedicine())
        setTimeout(() => {
            fetch(API_URL + "medicines")
                .then((response) => {
                    console.log(response);
                    if (response.ok) {
                        return response.json()
                    }
                    throw new Error('getMedicine went wrong!')
                })
                .then(data => dispatch({ type: GET_MEDICINES, payload: data }))
                .catch(error => dispatch(errorMedicine(error)))
        }, 4000)


    } catch (error) {
        dispatch(errorMedicine(error))
    }
}

export const loadingMedicine = () => (dispatch) => {
    dispatch({ type: LOADING_MEDICINES })
}


export const errorMedicine = (error) => (dispatch) => {
    dispatch({ type: ERROR_MEDICINES, payload: error.message })
}