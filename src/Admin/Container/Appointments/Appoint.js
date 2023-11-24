import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import AppointForm from './AppointForm';
import { useDispatch, useSelector } from 'react-redux';
import { addAppointment } from '../../../redux/slice/appoint.slice';

export default function Appoint(props) {
    const [mdata, setMdata] = useState([])
    const [update, setUpdate] = useState(false)

    const dispatch = useDispatch()

    const appointment = useSelector(state => state.appointment)
    console.log(appointment);


    useEffect(() => {
        // dispatch(getMedicine())
    }, [])

    const handleFormSubmit = (data) => {
        let localData = JSON.parse(localStorage.getItem("appointment"));
        console.log(localData);

        let id = Math.floor(Math.random() * 1000);
        // console.log(id);

        if (localData) {
            if (update) {
                // dispatch(updateMedicine(data))
            } else {
                dispatch(addAppointment(data))
            }
        } else {
            localStorage.setItem("appointment", JSON.stringify([{ id, ...data }]))
            setMdata(localData)
        }

        setUpdate(false)
    }

    const handleDelet = (id) => {
        console.log(id);
        // dispatch(deleteMedicine(id))
    }

    const handleEdit = (data) => {
        setUpdate(data)
    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'phone', headerName: 'Phone', width: 130 },
        { field: 'date', headerName: 'Date', width: 130 },
        { field: 'department', headerName: 'Department', width: 130 },
        { field: 'file', headerName: 'File', width: 130 },
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
            <AppointForm onHandleSubmit={handleFormSubmit} updateData={update} />
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={appointment.appointment}
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