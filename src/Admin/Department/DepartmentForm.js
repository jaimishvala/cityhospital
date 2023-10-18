import React from 'react';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useFormik } from 'formik';
import { useEffect } from 'react';

function DepartmentForm({ onHandleSubmit, updateData }) {
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (updateData) {
            handleClickOpen()
            setValues(updateData)
        }

    }, [updateData])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let Departmentschema = yup.object().shape({
        name: yup.string()
            .required("Please Enter Name")
            .matches(/^[a-zA-Z]{2,30}$/, "Please Enter Valid Name"),
        sort_desc: yup.string()
            .min(10)
            .max(40)
            .required("Please Enter Sort Description"),
        long_desc: yup.string()
            .min(10)
            .max(100)
            .required("Please Enter Long Description")
    })

    const { handleSubmit, handleChange, handleBlur, values, errors, touched, setValues } = useFormik({
        validationSchema: Departmentschema,
        initialValues: {
            name: '',
            sort_desc: '',
            long_desc: ''
        },
        onSubmit: (values, action) => {
            console.log(values);
            onHandleSubmit(values)

            action.resetForm()
            handleClose()
        },

    });


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                ADD DEPARTMENT
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Department</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        margin="dense"
                        id="name"
                        name='name'
                        label="Enter Department Name"
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
                        id="sort_desc"
                        name='sort_desc'
                        label="Enter Sort Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.sort_desc}
                    />
                    {errors.sort_desc && touched.sort_desc ? <span>{errors.sort_desc}</span> : null}

                    <TextField
                        margin="dense"
                        id="long_desc"
                        name='long_desc'
                        label="Enter Long Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.long_desc}
                    />
                    {errors.long_desc && touched.long_desc ? <span>{errors.long_desc}</span> : null}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>{updateData ? "Update" : "Add"}</Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DepartmentForm;