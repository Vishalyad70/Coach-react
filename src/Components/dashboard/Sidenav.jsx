import React from 'react';
import "./dashboard.css";
import { Link } from 'react-router-dom';
import { NavLink, withRouter } from "react-router-dom";

const Sidenav = () => {
 return (
    <div className='side_nav'>
      <div className="nav_side">
        <div className="logo_box">


          <div className="log_img">
            <img src="./images/log_dashboard.svg" alt="" />
          </div>
        </div>
      </div>
      <ul>
        <NavLink to="/dashboard" exact >
          <li>
            <span>
              <img src="/images/dashboard.svg" alt="" />
            </span>
            Dashboard
          </li>
        </NavLink>
        <NavLink to="/dashboard/Coachlist" exact >
          <li>
            <span>
              <img src="/images/coach.svg" alt="" />
            </span>
            Coach List
          </li>
        </NavLink>
        <NavLink to="/dashboard/Userlist" exact >
          <li>
            <span>
              <img src="/images/users.svg" alt="" />
            </span>
            Users List
          </li>
        </NavLink>
        <NavLink to="/dashboard/appointment" exact >
          <li>
            <span>
              <img src="/images/appoinment.svg" alt="" />
            </span>
           Appointments
          </li>
        </NavLink>
        <Link to="/">
          <li>

            <span>
              <img src="./images/logout.svg" alt="" /></span>Logout
          </li>
        </Link>
      </ul>


    </div>
  )
}
export default (withRouter(Sidenav));