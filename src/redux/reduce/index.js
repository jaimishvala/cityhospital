import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { medicinesReducer } from "./medicines.reducer";
import { departmentReducer } from "./department.reducer";
import { cartReducer } from "./cart.reducer";

export const rootReducer = combineReducers({
   counter: counterReducer,
   medicines: medicinesReducer,
   department: departmentReducer,
   cart: cartReducer
})
