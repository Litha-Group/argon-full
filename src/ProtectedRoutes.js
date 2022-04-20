import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoutes = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/argon/login-page" />;
        }
      }}
    />
  );
};

export default ProtectedRoutes;
