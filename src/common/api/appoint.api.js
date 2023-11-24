import { addRequest, deleteRequest, getRequest, updateRequest } from "../request"


export const getAppointmentData = () => {
    return getRequest('appointment/')
}

export const addAppointData = (data) => {
    return addRequest('appointment/', data)
}

export const deleteAppointData = (id) => {
    return deleteRequest('appointment/', id)
}

export const updateAppointData = (data) => {
    return updateRequest('appointment/', data)
}