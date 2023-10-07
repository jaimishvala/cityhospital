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


export default function Medicine(props) {
    const [open, setOpen] = React.useState(false);
    const [mdata, setMdata] = useState([])
    const [update, setUpdate] = useState(false)

    // console.log(mdata);

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("medicines"));

        if (localData) {
            setMdata(localData)
        }
    }, [])


    const handleClickOpen = () => {
        setOpen(true);
        // console.log("handleClickOpen");
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = (data) => {

        let localData = JSON.parse(localStorage.getItem("medicines"));
        console.log(localData);

        let id = Math.floor(Math.random() * 1000);
        // console.log(id);

        if (localData) {
            localData.push({ id: id, ...data })
            localStorage.setItem("medicines", JSON.stringify(localData))
            setMdata(localData)
            // setUpdate(false)

        } else {
            localStorage.setItem("medicines", JSON.stringify([{ id, ...data }]))
            setMdata(localData)
            // setUpdate(true)
        }

    }

    let date = new Date();
    let nd = new Date(date.setDate(date.getDate() - 1));


    let Medicineschema = yup.object().shape({
        name: yup.string()
            .required("Please Enter Name")
            .matches(/^[a-zA-Z]{2,30}$/, "Please Enter Valid Name"),
        price: yup.string()
            .required("Please Enter a Price")
            .matches(
                /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/,
                "Please Enter a Positive"
            ),
        date: yup.date()
            .min(nd, "Please Enter a valid Date")
            .required("Please Enter a Date"),
        message: yup.string()
            .min(10)
            .max(100)
            .required("Please Enter a Message")
    })

    const { handleSubmit, handleChange, handleBlur, values, errors, touched, setValues } = useFormik({
        validationSchema: Medicineschema,
        initialValues: {
            name: '',
            price: '',
            date: '',
            message: '',
        },
        onSubmit: (values, action) => {
            // console.log(values);

            if (update) {
                handleUpdateData(values)
            } else {
                handleAdd(values)
            }
            // handleAdd(values)
            action.resetForm()
        },

    });


    const handleUpdateData = (data) => {
        // console.log(data);
        let localData = JSON.parse(localStorage.getItem("medicines"));

        let index = localData.findIndex((v) => v.id === data.id)
        // console.log(index);

        localData[index] = data

        localStorage.setItem("medicines", JSON.stringify(localData))
        setMdata(localData)

        setUpdate(false)
    }

    const handleDelet = (id) => {
        // console.log(id);
        let localData = JSON.parse(localStorage.getItem("medicines"));

        let fdata = localData.filter((v) => v.id !== id)
        console.log(fdata);

        localStorage.setItem("medicines", JSON.stringify(fdata))

        setMdata(fdata)
    }

    const handleEdit = (data) => {
        handleClickOpen()
        setValues(data)
        setUpdate(true)
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
            <Button variant="outlined" onClick={handleClickOpen}>
                ADD MEDICINES
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Medicine</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please Enter a Medicine Data When You are Enter a Data Please Mark
                        Some Thing Please Enter Appropriate Name,Description, Price and
                        Expiry.
                    </DialogContentText>
                    <TextField
                        autoFocus
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
                        autoFocus
                        margin="dense"
                        id="price"
                        name='price'
                        label="Enter Price"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.price}
                    />
                    {errors.price && touched.price ? <span>{errors.price}</span> : null}

                    <TextField
                        autoFocus
                        margin="dense"
                        id="date"
                        type="date"
                        name='date'
                        label="Expiry Date"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.date}
                    />
                    {errors.date && touched.date ? <span>{errors.date}</span> : null}


                    <TextField
                        autoFocus
                        margin="dense"
                        id="message"
                        name='message'
                        label="Enter message"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                    />
                    {errors.message && touched.message ? <span>{errors.message}</span> : null}

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