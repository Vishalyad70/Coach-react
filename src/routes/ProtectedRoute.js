import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getSession } from "../store/actions/authAction";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  let { Authorization } = getSession();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (Authorization) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
