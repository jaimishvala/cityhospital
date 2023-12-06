import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";



const initialState = {
    isLoading: false,
    apt: null,
    error: null
}


export const addAptData = createAsyncThunk(
    "appointment/add",
    async (data) => {
        console.log(data);
        const storageRef = ref(storage, 'appointment/' + data.file.name);

        // 'file' comes from the Blob or File API
        uploadBytes(storageRef, data.file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        })
            .catch((error) => console.log(error));
    }
)


export const aptSlice = createSlice({
    name: "appointment",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        console.log(builder);
    }
})
