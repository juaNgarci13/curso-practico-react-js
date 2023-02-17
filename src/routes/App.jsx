// DEPENDENCIAS
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//COMPONENTES
import Home from "../containers/Home";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import ErrorPage from "../containers/ErrorPage";
//ESTILOS
import "../styles/global.scss";
import Header from "../components/Header";

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
  {
    path: "error",
    element: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <Header>
        <RouterProvider router={router} />
      </Header>
    </React.StrictMode>
  );
};

export default App;
