import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel, Select } from '@mui/material';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

function TodoForm({ onHandleSubmit, updateData, handleSelect }) {
    const [open, setOpen] = React.useState(false);
    // const [age, setAge] = React.useState('');


    useEffect(() => {
        if (updateData) {
            handleClickOpen();
            setValues(updateData);
        }
    }, [updateData])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let todoSchema = yup.object().shape({
        title: yup
            .string()
            .required('Please enter title')
    });

    const formik = useFormik({
        initialValues: {
            title: '',
            status: false
        },
        validationSchema: todoSchema,
        onSubmit: (values, action) => {
            onHandleSubmit(values)   // Lifiting State Up

            action.resetForm();
            handleClose();
        },
    });

    const { handleSubmit, handleChange, handleBlur, values, errors, touched, setValues } = formik;

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Todo
            </Button>
            <select onChange={(event) => handleSelect(event.target.value)}>
                <option value="0">--Select--</option>
                <option value="complete">Complete</option>
                <option value="uncomplete">Uncomplete</option>
                <option value="all">All</option>
            </select>

            {/* <Box sx={{ minWidth: 10 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={Select}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Complete</MenuItem>
                        <MenuItem value={20}>Uncomplete</MenuItem>
                        <MenuItem value={30}>All</MenuItem>
                    </Select>
                </FormControl>
            </Box> */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Todo</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            margin="dense"
                            id="title"
                            name="title"
                            label="Title"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        <p className='error'>{errors.title && touched.title ? errors.title : ''}</p>

                        <FormControlLabel
                            id="status"
                            name='status'
                            control={<Checkbox defaultChecked={values.status ? true : false} />}
                            label="Todo Status"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.status}
                        />

                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit'>{updateData ? 'Update' : 'Add'}</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default TodoForm;