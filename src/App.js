import { Route, Routes } from "react-router-dom";
import Footers from "./components/Footer/Footers";
import Header from "./components/Header/Header";
import Home from "./container/Home/Home";
import Department from "./container/Department/Department";
import Doctor from "./container/Doctors/Doctor";
import About from "./container/About/About"
import Contact from "./container/Contact/Contact"
import Auth from "./container/Auth/Auth";
import Appointment from "./container/Appointment/Appointment";
import Product from "./components/Product/Product";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Departments" element={<Department />}></Route>
        <Route exact path="/Doctors" element={<Doctor />}></Route>
        <Route exact path="/About" element={<Product />}></Route>
        <Route exact path="/Contact" element={<Contact />}></Route>
        <Route exact path="/Auth" element={<Auth />}></Route>
        <Route exact path="/Appointment" element={<Appointment />}></Route>
      </Routes>
      <Footers />
    </>
  );
}

export default App;