import { combineReducers } from "redux";
import { departmentReducer } from "./department.reducer";
import { favoriteReducer } from "./favorite.reducer";
import { doctorReducer } from "./doctor.reducer";
import counterReducer from "../slice/counter.slice";
import cartReducer from "../slice/cart.slice";
import medicinesSlice from "../slice/medicines.slice";


export const rootReducer = combineReducers({
   counter: counterReducer,
   medicines: medicinesSlice,
   department: departmentReducer,
   cart: cartReducer,
   favorite: favoriteReducer,
   doctor: doctorReducer
})
