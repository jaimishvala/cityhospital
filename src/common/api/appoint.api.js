import { addRequest, deleteRequest, getRequest, updateRequest } from "../request"


export const getAppointmentData = () => {
    return getRequest('appointment/')
}

export const addAppointmentData = (data) => {
    return addRequest('appointment/', data)
}

export const deleteAppointmentData = (id) => {
    return deleteRequest('appointment/', id)
}

export const updateAppointmentData = (data) => {
    return updateRequest('appointment/', data)
}