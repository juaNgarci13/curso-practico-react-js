import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Home = ({ children }) => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='Home'>
      <Link to={`login`}>Login</Link>
      <Link to={`recovery-password`}>Recovery Password</Link>
    </div>
  );
};

export default Home;
