import { Route, Routes } from "react-router-dom";
import UserRoute from "./Route/UserRoute";
import AdminRoute from "./Route/AdminRoute";
import PrivateRoute from "./Route/PrivateRoute";

function App() {
  return (
    <>

      <Routes>
        <Route path="/*" element={<UserRoute />} />

        <Route element={<PrivateRoute />}>
          <Route path="/Admin/*" element={<AdminRoute />} />
        </Route>

      </Routes>

    </>
  );
}

export default App;