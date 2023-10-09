import React from 'react';
import { Route, Routes } from "react-router-dom";
import Footers from "../components/Footer/Footers";
import Header from "../components/Header/Header";
import Home from "../container/Home/Home";
import Department from "../container/Department/Department";
import Doctor from "../container/Doctors/Doctor";
import Contact from "../container/Contact/Contact"
import Auth from "../container/Auth/Auth";
import Appointment from "../container/Appointment/Appointment";
import Product from "../components/Product/Product";
// import Error from "../components/Error/Error";
import PrivateRoute from './PrivateRoute';
import Dept from '../container/Department/Dept';
import ReviewPage from '../container/Home/ReviewPage';
import Medicines from '../container/Medicines/Medicines';
import MedicinesUser from '../container/Medicines/MedicinesUser';


function UserRoute(props) {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path='/ReviewPage/:id' element={<ReviewPage />} />

                <Route exact path="/Departments" element={<Department />} />
                <Route exact path='/Departments/:id' element={<Dept />} />

                <Route exact path="/Doctors" element={<Doctor />} />


                <Route exact path='/Medicine' element={<Medicines />} />
                <Route exact path='/MedicinesUser/:id' element={<MedicinesUser />} />


                <Route exact path="/About" element={<Product />} />
                <Route exact path="/Contact" element={<Contact />} />
                <Route exact path="/Auth" element={<Auth />} />
                <Route element={<PrivateRoute />}>
                    <Route exact path="/Appointment" element={<Appointment />} />
                </Route>
                {/* <Route exact path="*" element={<Error />} /> */}
            </Routes>
            <Footers />
        </>
    );
}

export default UserRoute;