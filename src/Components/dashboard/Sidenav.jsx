import React from "react";
import "./dashboard.css";
import { NavLink, withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/authAction";

const Sidenav = ({ history }) => {
  const dispatch = useDispatch();
  return (
    <div className="side_nav">
      <div className="nav_side">
        <div className="logo_box">
          <div className="log_img">
            <img src="./images/log_dashboard.svg" alt="" />
          </div>
        </div>
      </div>
      <ul>
        <NavLink to="/dashboard" exact>
          <li>
            <span>
              <img src="/images/dashboard.svg" alt="" />
            </span>
            Dashboard
          </li>
        </NavLink>
        <NavLink to="/dashboard/coach-list" exact>
          <li>
            <span>
              <img src="/images/coach.svg" alt="" />
            </span>
            Coach List
          </li>
        </NavLink>
        <NavLink to="/dashboard/user-list" exact>
          <li>
            <span>
              <img src="/images/users.svg" alt="" />
            </span>
            Users List
          </li>
        </NavLink>
        <NavLink to="/dashboard/appointment" exact>
          <li>
            <span>
              <img src="/images/appoinment.svg" alt="" />
            </span>
            Appointments
          </li>
        </NavLink>

        <li onClick={() => dispatch(logout(history))}>
          <span>
            <img src="./images/logout.svg" alt="" />
          </span>
          Logout
        </li>
      </ul>
    </div>
  );
};
export default withRouter(Sidenav);
