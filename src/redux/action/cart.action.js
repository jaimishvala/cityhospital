import { ADD_TO_CART, DECRMENT_QTY, INCRMENT_QTY, REMOVE_LINE } from "../ActionType"

export const addTOCart = (id) => (dispatch) => {
    dispatch({ type: ADD_TO_CART, payload: { id: id, qty: 1 } })
}

export const incrementCart = (id) => (dispatch) => {
    dispatch({ type: INCRMENT_QTY, payload: id })
}


export const decrementCart = (id) => (dispatch) => {
    dispatch({ type: DECRMENT_QTY, payload: id })
}

export const deleteCart = (id) => (dispatch) => {
    dispatch({ type: REMOVE_LINE, payload: id })
}