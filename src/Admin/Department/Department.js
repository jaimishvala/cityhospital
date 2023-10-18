import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';
import DepartmentForm from './DepartmentForm';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { addDepartment, deleteDepartment, getDepartment, updateDepartment } from '../../redux/action/department.action';

function Department() {
    const [departdata, setdepartdata] = useState([])
    const [update, setUpdate] = useState(false)

    console.log(departdata);

    const dispatch = useDispatch()
    // console.log(dispatch);

    const department = useSelector(state => state.department)
    // console.log(department);

    useEffect(() => {

        dispatch(getDepartment())

    }, [])

    const handleFormSubmit = (data) => {
        let localData = JSON.parse(localStorage.getItem("department"));
        console.log(localData);

        let id = Math.floor(Math.random() * 1000);
        // console.log(id);

        if (localData) {
            if (update) {
                dispatch(updateDepartment(data))
            } else {
                dispatch(addDepartment(data))
            }
        } else {
            localStorage.setItem("department", JSON.stringify([{ id, ...data }]))
            setdepartdata(localData)
        }

        setUpdate(false)
    }


    const handleDelet = (id) => {
        console.log(id);

        dispatch(deleteDepartment(id))
    }

    const handleEdit = (data) => {
        console.log(data);
        setUpdate(data)
    }

    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'sort_desc', headerName: 'Sub Description', width: 130 },
        { field: 'long_desc', headerName: 'Description', width: 130 },
        {
            field: "action",
            headerName: "Action",
            width: 130,
            renderCell: (params) => {
                return (
                    <>
                        <IconButton aria-label="delete" onClick={(id) => handleDelet(params.row.id)}>
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
            <DepartmentForm onHandleSubmit={handleFormSubmit} updateData={update} />

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={department.department}
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

export default Department;