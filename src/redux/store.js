
import { rootReducer } from "./reduce"
import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga/rootSaga"


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['medicines', 'cart', 'auth']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const Middleware = [thunk, sagaMiddleware]

export const configureStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(...Middleware));

    sagaMiddleware.run(rootSaga)

    return store;
}
export let store = configureStore()
export let persistor = persistStore(store);