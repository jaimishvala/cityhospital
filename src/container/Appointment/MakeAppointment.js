import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Appointment from './Appointment';

import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAppointment, deleteAppointment, getAppointment, updateAppointment } from '../../redux/slice/appointment.slice';
import { useState } from 'react';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

// export default MakeAppointment;

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const [update, setUpdate] = useState(false)

    const appointment = useSelector(state => state.appointment)
    console.log(appointment);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAppointment())
    })

    const handleFormSubmit = (data) => {
        if (update) {
            dispatch(updateAppointment(data))
        } else {
            dispatch(addAppointment(data))
        }
        setUpdate(false)
    }

    const handleDelet = (id) => {
        dispatch(deleteAppointment(id))
    }

    const handleEdit = (data) => {
        setUpdate(data)
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'phone', headerName: 'Phone', width: 130 },
        { field: 'date', headerName: 'Date', width: 130 },
        { field: 'department', headerName: 'Department', width: 130 },
        { field: 'file', headerName: 'File', width: 130 },
        { field: 'message', headerName: 'Message', width: 130 },
        {
            field: 'action', headerName: 'Action', width: 130,
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
        <div className='container'>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Make An Appointment" {...a11yProps(0)} />
                        <Tab label="Appointment List" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Appointment onHandleSubmit={handleFormSubmit} updateData={update} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <div>
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
                </CustomTabPanel>
            </Box>
        </div>
    );
}