import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from '../Components/auth/Login';
import { Register } from '../Components/auth/Register';
import { Forgotpass } from "../Components/auth/Forgotpass";
import DashboardLayout from '../Components/DashboardLayout';

export const Router = () => {
    return (< BrowserRouter >
        <Switch >
            < Route exact path="/" component={Login} />
            < Route exact path="/Register" component={Register} />
            < Route exact path="/Forgotpass" component={Forgotpass} />
            < Route path="/dashboard" component={DashboardLayout} />

        </Switch>
    </BrowserRouter>
    )
}