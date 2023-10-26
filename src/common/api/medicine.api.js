import { addRequest, deleteRequest, getRequest, updateRequest } from "../request"


export const getMedicineData = () => {
    return getRequest('medicines/')
}

export const addMedicineData = (data) => {
    return addRequest('medicines/', data)
}

export const deleteMedicineData = (id) => {
    return deleteRequest('medicines/', id)
}

export const updateMedicineData = (data) => {
    return updateRequest('medicines/', data)
}