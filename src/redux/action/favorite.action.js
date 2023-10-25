import { ADD_FAVOTIRE_CART, DELETE_FAVORITE_CART } from "../ActionType"

export const addFavoriteCart = (id) => (dispatch) => {
    dispatch({ type: ADD_FAVOTIRE_CART, payload: { id: id, } })
}


export const deleteFavoriteCart = (id) => (dispatch) => {
    dispatch({ type: DELETE_FAVORITE_CART, payload: id })
}