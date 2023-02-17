// DEPENDENCIAS
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//COMPONENTES
import Login from "../pages/Login";
import Header from "../components/Header";
import Notfound from "../pages/NotFound";
import Checkout from "../pages/Checkout";
import SendEmail from "../pages/SendEmail";
import MyAccount from "../pages/MyAccount";
import ErrorPage from "../containers/ErrorPage";
import CreatePassword from "../pages/CreatePassword";
import RecoveryPassword from "../pages/RecoveryPassword";

//ESTILOS
import "../styles/global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
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
    path: "send-email",
    element: <SendEmail />,
    errorElement: <ErrorPage />,
  },
  {
    path: "new-password",
    element: <CreatePassword />,
    errorElement: <ErrorPage />,
  },
  {
    path: "account",
    element: <MyAccount />,
    errorElement: <ErrorPage />,
  },
  {
    path: "sing-up",
    element: <SingUp />,
    errorElement: <ErrorPage />,
  },
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
    path: "error",
    element: <ErrorPage />,
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
