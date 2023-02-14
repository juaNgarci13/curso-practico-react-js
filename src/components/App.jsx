import React from "react";
import "../styles/global.scss";
import Layaout from "./containers/Layaout";
import Login from "./containers/Login";

const App = () => {
  return (
    <>
      <Layaout children={<Login />} />
    </>
  );
};

export default App;
