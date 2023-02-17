import React from "react";
import { Link, useRouteError } from "react-router-dom";
import "../styles/Home.scss";

const Home = ({ children }) => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='Home'>
      <h1>Welcome to Platzi Car Shop</h1>
      <Link to={`login`}>Login</Link>
      <Link to={`recovery-password`}>Recovery Password</Link>
      <Link to={`error`}>Error $404</Link>
    </div>
  );
};

export default Home;
