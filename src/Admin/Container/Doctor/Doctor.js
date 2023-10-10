import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DoctorForm from './DoctorForm';


export default function Doctor() {
    const [mdata, setMdata] = useState([])
    const [update, setUpdate] = useState(false)

    // console.log(mdata);

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("doctor"));

        if (localData) {
            setMdata(localData)
        }
    }, [])



    const handleFormSubmit = (data) => {
        console.log(data);
        let localData = JSON.parse(localStorage.getItem("doctor"));
        console.log(localData);

        let id = Math.floor(Math.random() * 1000);

        if (localData) {
            if (update) {
                //update
                let index = localData.findIndex((v) => v.id === data.id)
                console.log(index);

                localData[index] = data

                localStorage.setItem("doctor", JSON.stringify(localData))
                setMdata(localData)

                setUpdate(false)
            } else {
                //add
                localData.push({ id: id, ...data })
                localStorage.setItem("doctor", JSON.stringify(localData))
                setMdata(localData)
            }

        } else {
            localStorage.setItem("doctor", JSON.stringify([{ id, ...data }]))
            setMdata(localData)
        }

    }


    // const handleUpdateData = (data) => {
    //     console.log(data);
    //     let localData = JSON.parse(localStorage.getItem("doctor"));
    //     console.log(localData);

    //     let index = localData.filter((v) => v.id === data.id)
    //     console.log(index);

    //     localData[index] = data

    //     localStorage.setItem("doctor", JSON.stringify(localData))
    //     setMdata(localData)
    // }

    // const handleAdd = (data) => {

    //     let localData = JSON.parse(localStorage.getItem("doctor"));
    //     console.log(localData);

    //     let id = Math.floor(Math.random() * 1000);
    //     // console.log(id);

    //     if (localData) {
    //         localData.push({ id: id, ...data })
    //         localStorage.setItem("doctor", JSON.stringify(localData))
    //         setMdata(localData)
    //     } else {
    //         localStorage.setItem("doctor", JSON.stringify([{ id, ...data }]))
    //         setMdata(localData)
    //     }

    // }

    const handleDelet = (id) => {
        let localData = JSON.parse(localStorage.getItem("doctor"));

        let fdata = localData.filter((v) => v.id !== id)
        console.log(fdata);

        localStorage.setItem("doctor", JSON.stringify(fdata))

        setMdata(fdata)
    }

    const handleEdit = (data) => {
        // handleClickOpen()
        // setValues(data)
        setUpdate(data)
    }


    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'desc', headerName: 'Description', width: 130 },
        { field: 'designation', headerName: 'Designation', width: 130 },
        { field: 'profile_url', headerName: 'Profile URL', width: 130 },
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
            <DoctorForm onHandleSubmit={handleFormSubmit} updateData={update} />
            <div style={{ height: 400, width: '100%' }}>

                <DataGrid
                    rows={mdata}
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