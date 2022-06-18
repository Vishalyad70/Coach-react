import React from "react";
import { Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { logout } from "../../store/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  const adminInfo = useSelector((state) => state.auth.login_info);

  const history = useHistory();
  return (
    <div className="header">
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className="name">
        <li>
          <span className="notific">
            <img src="/images/notification.svg" alt="" />
          </span>
        </li>
        <li>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <div className="user_prf">
                <img
                  src={
                    adminInfo && adminInfo.profile
                      ? adminInfo.profile
                      : "/images/user_fb.png"
                  }
                  alt=""
                />
                <h5>{adminInfo.full_name}</h5>
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
              <Dropdown.Item onClick={() => dispatch(logout(history))}>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
    </div>
  );
};
