import { ADD_FAVOTIRE_CART, DELETE_FAVORITE_CART } from "../ActionType";


const initialState = {
    isLoading: false,
    favorite: [],
    error: null
}


export const favoriteReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {
        case ADD_FAVOTIRE_CART:

            let favData = state.favorite.push(action.payload)
            console.log(favData);

            return {
                isLoading: false,
                favorite: state.favorite,
                error: null
            }

        case DELETE_FAVORITE_CART:
            return {
                ...state,
                favorite: state.favorite.filter((v) => v.id !== action.payload)
            }

        default:
            return state
    }
}