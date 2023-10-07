import React, { Children } from 'react';
import { Route, Routes } from 'react-router-dom';
import Medicine from '../Admin/Container/Medicine/Medicine';
import Layout from '../Admin/Container/Components/Layout';


function AdminRoute(props) {
    return (
        <>
            <Layout>
                <Routes>
                    <Route exact path='/Medicine' element={<Medicine />} />
                </Routes>
            </Layout>
        </>
    );
}

export default AdminRoute;