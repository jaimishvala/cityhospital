import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { useFormik } from 'formik';

function MedicineForm({ onHandleSubmit, updateData }) {
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (updateData) {
            handleClickOpen()
            setValues(updateData)
        }

    }, [updateData])


    const handleClickOpen = () => {
        setOpen(true);
        // console.log("handleClickOpen");
    };

    const handleClose = () => {
        setOpen(false);
    };

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

            onHandleSubmit(values)      //Liftting State Up:


            
            // console.log(values);

            // if (update) {
            //     handleUpdateData(values)
            // } else {
            //     handleAdd(values)
            // }
            // handleAdd(values)
            action.resetForm()
            handleClose()
        },

    });

    return (
        <div>
            <h2>Medicines:</h2>
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
                    <Button onClick={handleSubmit}>{updateData ? "Update" : "Add"}</Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}

export default MedicineForm;