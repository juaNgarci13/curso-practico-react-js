// DEPENDENCIAS
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//COMPONENTES
import Home from "../pages/Home";
import Login from "../pages/Login";
import Layout from "../containers/Layout";
import Orders from "../pages/Orders";
import Notfound from "../pages/NotFound";
import Checkout from "../pages/Checkout";
import SendEmail from "../pages/SendEmail";
import MyAccount from "../pages/MyAccount";
import NewPassword from "../pages/NewPassword";
import PasswordRecovery from "../pages/PasswordRecovery";

//ESTILOS
import "../styles/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout children={<Home />} />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "password-recovery",
    element: <PasswordRecovery />,
  },
  {
    path: "send-email",
    element: <SendEmail />,
  },
  {
    path: "new-password",
    element: <NewPassword />,
  },
  {
    path: "account",
    element: <MyAccount />,
  },
  {
    path: "checkout",
    element: <Checkout />,
  },
  {
    path: "orders",
    element: <Orders />,
  },
  {
    path: "*",
    element: <Notfound />,
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
