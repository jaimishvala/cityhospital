import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    appointment: []
}

export const addAppointment = createAsyncThunk(
    'appointment/post',
    async (data) => {
        try {
            const docRef = await addDoc(collection(db, "appointment"), { data });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }
)

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        console.log(builder);
        //addAppointment:
        builder.addCase(addAppointment.fulfilled, (state, action) => {
            console.log(action);
            state.appointment = state.appointment.concat(action.payload);
        })
    }
})

export default appointmentSlice.reducer;