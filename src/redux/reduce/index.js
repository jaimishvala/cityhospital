import { combineReducers } from "redux";
import { departmentReducer } from "./department.reducer";
import { favoriteReducer } from "./favorite.reducer";
import { doctorReducer } from "./doctor.reducer";
import counterReducer from "../slice/counter.slice";
import cartReducer from "../slice/cart.slice";
import medicinesReducer from "../slice/medicines.slice";
import appointmentReducer from "../slice/appointment.slice";
import { authReducer } from "./auth.reducer";
import alertReducer from "../slice/alert.slice";
import aptReducer from "../slice/apt.slice";

export const rootReducer = combineReducers({
   counter: counterReducer,
   medicines: medicinesReducer,
   department: departmentReducer,
   cart: cartReducer,
   favorite: favoriteReducer,
   doctor: doctorReducer,
   appointment: appointmentReducer,
   auth: authReducer,
   alert: alertReducer,
   apt: aptReducer
})
