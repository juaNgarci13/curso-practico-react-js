// DEPENDENCIAS
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//COMPONENTES
import Home from "../components/containers/Home";
import Login from "../components/containers/Login";
import RecoveryPassword from "../components/containers/RecoveryPassword";
import ErrorPage from "../components/containers/ErrorPage";
//ESTILOS
import "../styles/global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "recovery-password",
    element: <RecoveryPassword />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default App;
