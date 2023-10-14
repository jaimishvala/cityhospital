
import { rootReducer } from "./reduce"
import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"


export const configureStore = () => {
    let store = createStore(rootReducer, applyMiddleware(thunk));

    return store;
}
