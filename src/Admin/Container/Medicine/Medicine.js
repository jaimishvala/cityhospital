import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import MedicineForm from './MedicineForm';
import { useDispatch, useSelector } from 'react-redux';
import { addMedicines, deleteMedicine, getMedicine, updateMedicine } from '../../../redux/action/medicines.action';



export default function Medicine() {
    const [mdata, setMdata] = useState([])
    const [update, setUpdate] = useState(false)

    const dispatch = useDispatch()

    const medicines = useSelector(state => state.medicines)
    console.log(medicines);


    useEffect(() => {


        dispatch(getMedicine())
        // let localData = JSON.parse(localStorage.getItem("medicines"));

        // if (localData) {
        //     setMdata(localData)
        // }
    }, [])

    const handleFormSubmit = (data) => {
        let localData = JSON.parse(localStorage.getItem("medicines"));
        console.log(localData);

        let id = Math.floor(Math.random() * 1000);
        // console.log(id);

        if (localData) {
            if (update) {
                dispatch(updateMedicine(data))
                //Update
                // let index = localData.findIndex((v) => v.id === data.id)
                // // console.log(index);

                // localData[index] = data

                // localStorage.setItem("medicines", JSON.stringify(localData))
                // setMdata(localData)

                // setUpdate(false)
            } else {
                dispatch(addMedicines(data))
                //Add
                // localData.push({ id: id, ...data })
                // localStorage.setItem("medicines", JSON.stringify(localData))
                // setMdata(localData)

            }


        } else {
            localStorage.setItem("medicines", JSON.stringify([{ id, ...data }]))
            setMdata(localData)
        }

        setUpdate(false)
    }



    const handleDelet = (id) => {
        console.log(id);
        // let localData = JSON.parse(localStorage.getItem("medicines"));

        // let fdata = localData.filter((v) => v.id !== id)
        // console.log(fdata);

        // localStorage.setItem("medicines", JSON.stringify(fdata))

        // setMdata(fdata)
        dispatch(deleteMedicine(id))
    }

    const handleEdit = (data) => {
        // handleClickOpen()
        // setValues(data)
        setUpdate(data)
    }


    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'date', headerName: 'Date', width: 130 },
        { field: 'message', headerName: 'Message', width: 130 },
        {
            field: "action",
            headerName: "Action",
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <IconButton aria-label="delete" onClick={() => handleDelet(params.row.id)}>
                            <DeleteIcon />
                        </IconButton>

                        <IconButton aria-label="edit" onClick={() => handleEdit(params.row)}>
                            <EditIcon />
                        </IconButton>
                    </>
                )
            }
        }

    ];

    return (
        <div>
            <MedicineForm onHandleSubmit={handleFormSubmit} updateData={update} />
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={medicines.medicines}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
        </div>
    );

}