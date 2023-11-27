import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addAppointmentData, deleteAppointmentData, getAppointmentData, updateAppointmentData } from "../../common/api/appoint.api";


const initialState = {
    appointment: []
}
console.log(initialState);

export const getAppointment = createAsyncThunk(
    'appointment/get',
    async () => {
        let response = await getAppointmentData();
        console.log(response.data);

        return response.data;
    }
)

export const addAppointment = createAsyncThunk(
    'appointment/post',

    async (data) => {
        await addAppointmentData(data);

        return data;
    }
)

export const deleteAppointment = createAsyncThunk(
    'appointment/delete',

    async (id) => {
        await deleteAppointmentData(id);

        return id;
    }
)

export const updateAppointment = createAsyncThunk(
    'appointment/put',
    async (data) => {
        await updateAppointmentData(data);
        return data;
    }
)

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        console.log(builder);

        //getAppointment:
        builder.addCase(getAppointment.fulfilled, (state, action) => {
            state.appointment = action.payload;
        })

        //addAppointment:
        builder.addCase(addAppointment.fulfilled, (state, action) => {
            state.appointment = state.appointment.concat(action.payload)
        })

        //deleteAppointment:
        builder.addCase(deleteAppointment.fulfilled, (state, action) => {
            state.appointment = state.appointment.filter((v) => v.id !== action.payload)
        })

        //updateAppointment:
        builder.addCase(updateAppointment.fulfilled, (state, action) => {
            state.appointment = state.appointment.map((v) => {
                if (v.id === action.payload) {
                    return action.payload;
                } else {
                    return v;
                }
            })
        })
    }
})


export default appointmentSlice.reducer;
