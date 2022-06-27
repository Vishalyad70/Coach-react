import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../Components/auth/Login";
import Register from "../Components/auth/Register";
import ForgotPassword from "../Components/auth/ForgotPassword";
import DashboardLayout from "../Components/DashboardLayout";
import ChangePassword from "../Components/auth/ChangePassword";
import ProtectedRoute from "./ProtectedRoute";
export const Router = () => {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/change-password" component={ChangePassword} />
        <ProtectedRoute path="/dashboard" component={DashboardLayout} />
      </Switch>
    </BrowserRouter>
  );
};
