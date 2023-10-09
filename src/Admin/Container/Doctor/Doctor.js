import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';


export default function Doctor(props) {
    const [open, setOpen] = React.useState(false);
    const [mdata, setMdata] = useState([])
    const [update, setUpdate] = useState(false)

    // console.log(mdata);

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("doctor"));

        if (localData) {
            setMdata(localData)
        }
    }, [])


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = (data) => {

        let localData = JSON.parse(localStorage.getItem("doctor"));
        console.log(localData);

        let id = Math.floor(Math.random() * 1000);
        // console.log(id);

        if (localData) {
            localData.push({ id: id, ...data })
            localStorage.setItem("doctor", JSON.stringify(localData))
            setMdata(localData)
        } else {
            localStorage.setItem("doctor", JSON.stringify([{ id, ...data }]))
            setMdata(localData)
        }

    }


    let Doctorschema = yup.object().shape({
        name: yup.string()
            .required("Please Enter Name")
            .matches(/^[a-zA-Z]{2,30}$/, "Please Enter Valid Name"),
        desc: yup.string()
            .required("Please Enter a Description")
            .matches(
                /^(.|\s)*[a-zA-Z]+(.|\s)*$/, "Please Enter a Description"),
        // .test("desc", "Please Enter More Than 20 Word Allowed", function (value) {
        //     // console.log(value);
        //     if (value <= 20) {
        //         return true;
        //     }
        // }),
        designation: yup.string()
            .required("Please Enter a Designation")
            .matches(/^[a-z ,.'-]+$/, "Please Enter Valid Designation"),
        profile_url: yup.string()
            .required("Please Enter a Profile URL")
            .matches(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/, "Please Enter https And WWW")
    })

    const { handleSubmit, handleChange, handleBlur, values, errors, touched, setValues } = useFormik({
        validationSchema: Doctorschema,
        initialValues: {
            name: '',
            desc: '',
            designation: '',
            profile_url: '',
        },
        onSubmit: (values, action) => {
            console.log(values);

            if (update) {
                handleUpdateData(values)
            } else {
                handleAdd(values)
            }
            handleAdd(values)
            action.resetForm()
        },

    });


    const handleUpdateData = (data) => {
        console.log(data);
        let localData = JSON.parse(localStorage.getItem("doctor"));
        console.log(localData);

        let index = localData.filter((v) => v.id === data.id)
        console.log(index);

        localData[index] = data

        localStorage.setItem("doctor", JSON.stringify(localData))
        setMdata(localData)
    }

    const handleDelet = (id) => {
        let localData = JSON.parse(localStorage.getItem("doctor"));

        let fdata = localData.filter((v) => v.id !== id)
        console.log(fdata);

        localStorage.setItem("doctor", JSON.stringify(fdata))

        setMdata(fdata)
    }

    const handleEdit = (data) => {
        handleClickOpen()
        setValues(data)
        setUpdate(true)
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
            <h2>Doctor:</h2>
            <Button variant="outlined" onClick={handleClickOpen}>
                ADD Doctor
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Doctor</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please Enter a Doctor Data When You are Enter a Data Please Mark
                        Some Thing Please Enter Appropriate Name,Description, Designation and
                        Profile URL.
                    </DialogContentText>
                    <TextField
                        margin="dense"
                        id="name"
                        name='name'
                        label="Enter Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />
                    {errors.name && touched.name ? <span>{errors.name}</span> : null}

                    <TextField
                        margin="dense"
                        id="desc"
                        name='desc'
                        label="Enter desc"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.desc}
                    />
                    {errors.desc && touched.desc ? <span>{errors.desc}</span> : null}

                    <TextField
                        margin="dense"
                        id="designation"
                        type="text"
                        name='designation'
                        label="Enter Designation"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.designation}
                    />
                    {errors.designation && touched.designation ? <span>{errors.designation}</span> : null}


                    <TextField
                        margin="profile_url"
                        id="profile_url"
                        name='profile_url'
                        label="Enter Fb Profile URL"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.profile_url}
                    />
                    {errors.profile_url && touched.profile_url ? <span>{errors.profile_url}</span> : null}

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>{update ? "Update" : "Add"}</Button>
                </DialogActions>
            </Dialog>

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