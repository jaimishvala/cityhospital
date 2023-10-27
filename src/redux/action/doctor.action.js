import { API_URL } from "../../Utils/baseURL";
import { addDoctorData, deleteDoctorData, getDoctorData, updateDoctorData } from "../../common/api/doctor.api";
import { ADD_DOCTOR, DELETE_DOCTOR, GET_DOCTOR, UPDATE_DOCTOR } from "../ActionType";


export const getDoctor = () => (dispatch) => {
    try {
        getDoctorData('doctor')
            .then((response) => dispatch({ type: GET_DOCTOR, payload: response.data }))
            .catch(error => console.log(error))
    } catch (error) {
        console.log(error);
    }
}


export const addDoctor = (data) => (dispatch) => {
    try {
        addDoctorData(data)
            .then((response) => dispatch({ type: ADD_DOCTOR, payload: response.data }))
            .catch(error => console.log(error))

    } catch (error) {
        console.log(error);
    }
}


export const deleteDoctor = (id) => (dispatch) => {
    try {
        deleteDoctorData(id)
            .then(dispatch({ type: DELETE_DOCTOR, payload: id }))
            .catch(error => console.log(error))
    } catch (error) {
        console.log(error);
    }
}

export const updateDoctor = (data) => (dispatch) => {
    try {
        updateDoctorData(data)
            .then((response) => dispatch({ type: UPDATE_DOCTOR, payload: response.data }))
            .catch(error => console.log(error))
    } catch (error) {
        console.log(error);
    }
}