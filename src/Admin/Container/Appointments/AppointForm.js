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

function AppointForm({ onHandleSubmit, updateData }) {
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

    let d = new Date()
    let nd = new Date()
    nd.setDate(d.getDate() - 1)

    let Appointschema = yup.object().shape({
        name: yup.string()
            .required("Please Enter Name")
            .matches(/^[a-zA-Z]{2,30}$/, "Please Enter Valid Name"),
        email: yup.string()
            .email("Please Enter Valid Email")
            .required("Please Enter Email"),
        phone: yup.string()
            .required("Please Enter Phone Number")
            .matches(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/, "Please Enter Valid Phone Number")
            .typeError("Only Digit Number Allowed"),
        date: yup.date()
            .min(nd, "Please Select Valid Date")
            .required("Please Select Date"),
        department: yup.string()
            .required("Please Select Any One Option"),
        message: yup.string()
            .required("Please Enter Message")
            .matches(/(\s\s\s*)/, "Please Extra Space Remove")
            // .min(30, "Minimum 30 Character Valid")
            // .max(100, "Maximum 100 Charecter Allowed")
            .test("message", "More Than 5 Word Alowed", function (value) {
                // let arr = value.split(" ")

                if (value.length <= 5) {
                    return true;
                } else {
                    return false;
                }
            }),

        file: yup.mixed()
            .required("Please Enter File")
            .test("file", "More Than 2Mb And Jpg File Allowed", function (v) {
                console.log(v);

                if (v <= 2000 && v === "jpg") {
                    return true;
                } else {
                    return false;
                }

            })
    })

    const { handleSubmit, handleChange, handleBlur, values, errors, touched, setValues } = useFormik({
        validationSchema: Appointschema,
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            file: '',
            message: '',
        },
        onSubmit: (values, action) => {

            onHandleSubmit(values)      //Liftting State Up:

            let array = values.message.split(" ")
            // console.log(array);

            let newArray = array.map((v) =>
                v[0].toUpperCase() + v.substring(1)
            )
            // console.log(newArray);

            console.log(newArray.join(" "));
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
                        id="email"
                        name='email'
                        label="Enter email"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email ? <span>{errors.email}</span> : null}

                    <TextField
                        margin="dense"
                        id="phone"
                        type="phone"
                        name='phone'
                        label="Enter phone"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                    />
                    {errors.phone && touched.phone ? <span>{errors.phone}</span> : null}

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
                        id="file"
                        type="file"
                        name='file'
                        label="Enter file"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.file}
                    />
                    {errors.file && touched.file ? <span>{errors.file}</span> : null}


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

export default AppointForm;