// DEPENDENCIAS
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//COMPONENTES
import Login from "../pages/Login";
import Header from "../components/Header";
import Orders from "../pages/Orders";
import Notfound from "../pages/NotFound";
import Checkout from "../pages/Checkout";
import ErrorPage from "../pages/ErrorPage";
import SendEmail from "../pages/SendEmail";
import MyAccount from "../pages/MyAccount";
import NewPassword from "../pages/NewPassword";
import PasswordRecovery from "../pages/PasswordRecovery";

//ESTILOS
import "../styles/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <Login />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "password-recovery",
    element: <PasswordRecovery />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "send-email",
    element: <SendEmail />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "new-password",
    element: <NewPassword />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "account",
    element: <MyAccount />,
    // errorElement: <ErrorPage />,
  },
  // {
  //   path: "sing-up",
  //   element: <SingUp />,
  //   // errorElement: <ErrorPage />,
  // },
  {
    path: "checkout",
    element: <Checkout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "orders",
    element: <Orders />,
    errorElement: <ErrorPage />,
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
