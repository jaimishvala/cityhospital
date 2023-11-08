import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addMedicineData, deleteMedicineData, getMedicineData, updateMedicineData } from "../../common/api/medicine.api"


const initialState = {
    isLoading: false,
    medicines: [],
    error: null
}
console.log(initialState);

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

export const addMedicines = createAsyncThunk(
    'medicines/post',
    async (data) => {
        await addMedicineData(data);

        return data;
    }
)

export const updateMedicine = createAsyncThunk(
    'medicines/put',
    async (data) => {
        await updateMedicineData(data);

        return data;
    }
)

export const medicinesSlice = createSlice({
    name: "medicines",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        console.log(builder);
        //isLoading:
        builder.addCase(getMedicine.pending, onLoading)

        //Get Medicines:
        builder.addCase(getMedicine.fulfilled, (state, action) => {
            console.log(action);
            state.medicines = action.payload;
            state.isLoading = false;
            state.error = null;

        });

        //Error:
        builder.addCase(getMedicine.rejected, onError);

        // Delete Medicines:
        builder.addCase(deleteMedicine.fulfilled, (state, action) => {
            console.log(action);
            state.medicines = state.medicines.filter((v) => v.id !== action.payload);
        });

        // Add Medicines:
        builder.addCase(addMedicines.fulfilled, (state, action) => {
            console.log(action);
            state.medicines = state.medicines.concat(action.payload);
        });

        // Update Medicines:
        builder.addCase(updateMedicine.fulfilled, (state, action) => {
            console.log(action);
            state.medicines = state.medicines.map((v) => {
                if (v.id === action.payload.id) {
                    return action.payload;
                } else {
                    return v;
                }
            });
        });
    }
})

export default medicinesSlice.reducer;