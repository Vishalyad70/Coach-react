import React from 'react';
import { Dropdown } from 'react-bootstrap';


export const Header = () => {
  return (
    <div className='header'>
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>

    
     <ul className='name'>
       <li><span className='notific'><img src="./images/notification.svg" alt="" /></span></li>
       <li>
       <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <div className="user_prf">
        <img src="./images/user_fb.png" alt="" />
        <h5>Saitama</h5>
      </div>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
    <Dropdown.Item href="/">Logout</Dropdown.Item>
   
  </Dropdown.Menu>
</Dropdown>
       </li>
     </ul>

    </div>

  )
}

