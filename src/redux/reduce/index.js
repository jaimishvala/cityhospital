import { combineReducers } from "redux";
// import { counterReducer } from "./counter.reducer";
import { medicinesReducer } from "./medicines.reducer";
import { departmentReducer } from "./department.reducer";
// import { cartReducer } from "./cart.reducer";
import { favoriteReducer } from "./favorite.reducer";
import { doctorReducer } from "./doctor.reducer";
import counterReducer from "../slice/counter.slice";
import cartReducer from "../slice/cart.slice";

export const rootReducer = combineReducers({
   counter: counterReducer,
   medicines: medicinesReducer,
   department: departmentReducer,
   cart: cartReducer,
   favorite: favoriteReducer,
   doctor: doctorReducer
})
