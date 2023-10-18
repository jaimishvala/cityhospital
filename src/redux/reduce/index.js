import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { medicinesReducer } from "./medicines.reducer";
import { departmentReducer } from "./department.reducer";

export const rootReducer = combineReducers({
   counter: counterReducer,
   medicines: medicinesReducer,
   department: departmentReducer
})
