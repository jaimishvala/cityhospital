import React, { Children } from 'react';
import { Route, Routes } from 'react-router-dom';
import Medicine from '../Admin/Container/Medicine/Medicine';
import Layout from '../Admin/Container/Components/Layout';
import Doctor from '../Admin/Container/Doctor/Doctor';


function AdminRoute(props) {
    return (
        <>
            <Layout>
                <Routes>
                    <Route exact path='/Medicines' element={<Medicine />} />
                    <Route exact path='/Doctor' element={<Doctor />} />
                </Routes>
            </Layout>
        </>
    );
}

export default AdminRoute;