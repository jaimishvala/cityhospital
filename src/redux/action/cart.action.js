import { ADD_TO_CART } from "../ActionType"

export const addTOCart = (id) => (dispatch) => {
    dispatch({ type: ADD_TO_CART, payload: { id: id, gty: 1 } })
}
