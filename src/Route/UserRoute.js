import React, { useState } from 'react';
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
import Error from "../components/Error/Error";
import PrivateRoute from './PrivateRoute';
import Dept from '../container/Department/Dept';
import ReviewPage from '../container/Home/ReviewPage';
import Medicines from '../container/Medicines/Medicines';
import MedicinesUser from '../container/Medicines/MedicinesUser';
import FormSubmition from '../container/Appointment/FormSubmition';
import Counter from '../container/Counter/Counter';
import AddToCart from '../container/Cart/AddToCart';
import FavoriteCart from '../container/Cart/FavoriteCart';
import { useContext } from 'react';
import ThemeContext from '../context/theme.context';
import { LanguageContext } from '../context/language.context';
import MakeAppointment from '../container/Appointment/MakeAppointment';


function UserRoute(props) {
    const theme = useContext(ThemeContext)
    console.log(theme);
    const language = useContext(LanguageContext)
    console.log(language);

    const [countCart, setCountCart] = useState(0)
    const [fav, setFav] = useState([])

    return (
        <>
            <div className={`${language.language}`}>
                <div className={`${theme.theme}`}>
                    <Header countCart={countCart} fav={fav} />

                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path='/ReviewPage/:id' element={<ReviewPage />} />

                        <Route exact path="/Departments" element={<Department />} />
                        <Route exact path='/Departments/:id' element={<Dept />} />

                        <Route exact path="/Doctors" element={<Doctor />} />
                        {/* Counter */}
                        <Route exact path="/Counter" element={<Counter />} />

                        <Route exact path='/Medicine' element={<Medicines increment={setCountCart} fav={fav} setFav={setFav} />} />

                        <Route exact path='/MedicinesUser/:id' element={<MedicinesUser />} />

                        <Route exact path='/FavoriteCart' element={<FavoriteCart />} />

                        <Route exact path='/AddToCart' element={<AddToCart />} />

                        <Route exact path="/About" element={<Product />} />
                        <Route exact path="/Contact" element={<Contact />} />
                        <Route exact path="/Auth" element={<Auth />} />
                        <Route element={<PrivateRoute />}>
                            {/* <Route exact path="/Appointment" element={<Appointment />} /> */}
                            <Route exact path='/Appointment' element={<MakeAppointment />} />
                        </Route>
                        <Route exact path="*" element={<Error />} />
                    </Routes>
                    <Footers />
                </div>
            </div>
        </>
    );
}

export default UserRoute;