import { API_URL } from "../../Utils/baseURL";
import { ADD_DEPARTMENT, DELETE_DEPARTMENT, GET_DEPARTMENT, UPDATE_DEPARTMENT } from "../ActionType";

export const getDepartment = () => (dispatch) => {
    try {
        fetch(API_URL + "department")
            .then(data => dispatch({ type: GET_DEPARTMENT, payload: data }))
            .then(error => console.log(error))
            .catch(error => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const addDepartment = (data) => (dispatch) => {
    try {
        fetch(API_URL + "department", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then((rdata) => dispatch({ type: ADD_DEPARTMENT, payload: rdata }))
            .catch(error => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const deleteDepartment = (id) => (dispatch) => {
    console.log(id);
    try {
        fetch(API_URL + "department/" + id, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(() => dispatch({ type: DELETE_DEPARTMENT, payload: id }))
            .catch(error => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const updateDepartment = (data) => (dispatch) => {
    try {
        fetch(API_URL + "department/" + data.id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then((rdata) => dispatch({ type: UPDATE_DEPARTMENT, payload: rdata }))
            .catch(error => console.log(error))

    } catch (error) {
        console.log(error);
    }
}