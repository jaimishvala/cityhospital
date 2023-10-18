import React, { Children } from 'react';
import { Route, Routes } from 'react-router-dom';
import Medicine from '../Admin/Container/Medicine/Medicine';
import Layout from '../Admin/Container/Components/Layout';
import Doctor from '../Admin/Container/Doctor/Doctor';
import Department from '../Admin/Department/Department';


function AdminRoute(props) {    
    return (
        <>
            <Layout>
                <Routes>
                    <Route exact path='/Medicines' element={<Medicine />} />
                    <Route exact path='/Doctor' element={<Doctor />} />
                    <Route exact path='/Department' element={<Department />} />
                </Routes>
            </Layout>
        </>
    );
}

export default AdminRoute;