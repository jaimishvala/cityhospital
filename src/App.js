import { Route, Routes } from "react-router-dom";
import UserRoute from "./Route/UserRoute";
import AdminRoute from "./Route/AdminRoute";
import PrivateRoute from "./Route/PrivateRoute";
import { configureStore } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  let { store, persistor } = configureStore()

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path="/*" element={<UserRoute />} />

            <Route element={<PrivateRoute />}>
              <Route path="/Admin/*" element={<AdminRoute />} />
            </Route>

          </Routes>
        </PersistGate>
      </Provider>

    </>
  );
}

export default App;