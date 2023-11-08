import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { deleteMedicineData, getMedicineData } from "../../common/api/medicine.api"


const initialState = {
    isLoading: false,
    medicines: [],
    error: null
}

const onLoading = (state, action) => {
    state.isLoading = true;
    state.error = null
}

const onError = (state, action) => {
    console.log(action);

    state.isLoading = false;
    state.error = action.error.message
}

export const getMedicine = createAsyncThunk(
    'medicines/get',
    async () => {
        await new Promise((resolve, reject) => setTimeout(resolve, 2000))
        let response = await getMedicineData();

        console.log(response.data);

        return response.data;
    }

)

export const deleteMedicine = createAsyncThunk(
    'medicines/delete',
    async (id) => {
        await deleteMedicineData(id);

        return id;
    }
)


export const medicinesSlice = createSlice({
    name: "medicines",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMedicine.pending, onLoading)
        builder.addCase(getMedicine.fulfilled, (state, action) => {
            console.log(action);
            state.medicines = action.payload;
            state.isLoading = false;
            state.error = null;

        })
        builder.addCase(getMedicine.rejected, onError);
        builder.addCase(deleteMedicine.fulfilled, (state, action) => {
            console.log(action);
            state.medicines = state.medicines.filter((v) => v.id !== action.payload);
        })
    }
})


export default medicinesSlice.reducer;