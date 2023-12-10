import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { deleteObject, getDownloadURL, ref, updateMetadata, uploadBytes } from "firebase/storage";
import { db, storage } from "../../firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";



const initialState = {
    isLoading: false,
    apt: [],
    error: null
}


export const addAptData = createAsyncThunk(
    "appointment/add",
    async (data) => {
        console.log(data);

        let aptData = { ...data }
        console.log(aptData);

        let rNo = Math.floor(Math.random() * 10000)

        const storageRef = ref(storage, 'appointment/' + rNo + '_' + data.file.name);


        // 'file' comes from the Blob or File API
        await uploadBytes(storageRef, data.file).then(async (snapshot) => {
            console.log('Uploaded a blob or file!');
            await getDownloadURL(snapshot.ref)
                .then(async (url) => {
                    console.log(url);
                    let aptDoc = await addDoc(collection(db, "appointment"), { ...data, file: url, file_name: rNo + '_' + data.file.name })
                    console.log(aptDoc);
                    aptData = { id: aptDoc.id, ...data, file: url, file_name: rNo + '_' + data.file.name }
                })
        })
            .catch((error) => console.log(error));

        console.log(aptData);
        return aptData;
    }
)


export const getAptData = createAsyncThunk(
    "appointment/get",
    async () => {
        let data = [];

        const querySnapshot = await getDocs(collection(db, "appointment"));
        querySnapshot.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id })
            console.log(`${doc.id} => ${doc.data()}`);
        });
        console.log(data);

        return data;
    }
)


export const deleteAptData = createAsyncThunk(
    "appointment/delete",
    async (data) => {
        console.log(data);

        // Create a reference to the file to delete 
        const aptRef = ref(storage, 'appointment/' + data.file_name);
        console.log(aptRef);

        // Delete the file
        await deleteObject(aptRef).then(async () => {
            await deleteDoc(doc(db, "appointment/", data.id));
            console.log("Delete Image Successfully.");
            // File deleted successfully
        }).catch((error) => {
            console.log("Image Not Delete Successfully.");
            console.log(error);
        });

        return data.id;
    }
)


// export const updateAptData = createAsyncThunk(
//     "appointment/put",
//     async (data) => {
//         console.log(data);

//         const forestRef = ref(storage, 'appointment/' + data);

//         // Update metadata properties
//         await updateMetadata(forestRef, newMetadata)
//             .then(async (metadata) => {
//                 await updateDoc(washingtonRef, { ...data, id: data.id });
//                 // Updated metadata for 'images/forest.jpg' is returned in the Promise
//             }).catch((error) => {
//                 console.log(error);
//             });



//         return data;
//     }
// )

export const aptSlice = createSlice({
    name: "appointment",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        console.log(builder);

        builder.addCase(addAptData.fulfilled, (state, action) => {
            console.log(action);

            state.isLoading = false;
            state.apt = state.apt.concat(action.payload);
            state.error = null;
        })
        builder.addCase(deleteAptData.fulfilled, (state, action) => {
            console.log(action);
            state.isLoading = false;
            state.apt = state.apt.filter((v) => v.id !== action.payload);
            state.error = null;
        })

        builder.addCase(getAptData.fulfilled, (state, action) => {
            console.log(action.payload);
            state.isLoading = false;
            state.apt = action.payload;
            state.error = null;
        })
    }
})


export default aptSlice.reducer;