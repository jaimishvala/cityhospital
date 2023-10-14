import { Route, Routes } from "react-router-dom";
import UserRoute from "./Route/UserRoute";
import AdminRoute from "./Route/AdminRoute";
import PrivateRoute from "./Route/PrivateRoute";
import { configureStore } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  let store = configureStore()

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/*" element={<UserRoute />} />

          <Route element={<PrivateRoute />}>
            <Route path="/Admin/*" element={<AdminRoute />} />
          </Route>

        </Routes>
      </Provider>

    </>
  );
}

export default App;