import React from 'react'
import {  withRouter } from "react-router";
import { Row, Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

 const Userdetails = () => {
  return (
    <div>
      <Row>
        <Col><Link to="/dashboard/user-list"><Icon className='back' icon="ep:back" /></Link></Col>
      </Row>
     <Row>
      <Col lg={6} md={6}>
      <div className="white_box">
       <div className="pro_coach_d">
       <div className="profile_coach">
          <img src="../../images/user_fb.png" alt="" />
        </div>
        <h5>User name</h5>
       </div>
       <div className="other_de">
        <ul>
          <li>
          <Icon icon="fluent:mail-16-filled" /><span>Example@gmail.com</span>
          </li>
          <li>
          <Icon icon="carbon:location-filled" /><span>Indonesia</span>
          </li>
          <li>
          <Icon icon="fluent:subtitles-16-filled" /><span>Wellness Coach</span>
          </li>
          <li>
          <Icon icon="fluent:certificate-20-filled" /><span>Certificate.pdf</span>
          </li>
        </ul>
       </div>
       <div className="bio_details">
        <h5>Bio</h5>
        <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
       </div>


        
      </div>
      </Col>
      <Col lg={6} md={6}>
      <div className="white_box">
      
       <div className="bio_details pro_fess">
        <h5>Professional Categories</h5>
       <div className="box_flex">
        <span>Carrier and Business</span>
        <span>Relationships</span>
        <span>Mental Health</span>
       </div>
       </div>
           
       <div className="bio_details ">
        <h5>Price</h5>
      <div className="dollar_p">
      <Icon icon="ant-design:dollar-circle-outlined" />
      <span>200</span>
      </div>
       </div>
       


        
      </div>
      </Col>
     </Row>
     <Row>
      <Col className='mb-5'>
       {/* <button className="view_btn">View Details</button> */}
       <Link className="view_btn done_btn" to="/dashboard/user-list">Done</Link>
      </Col>
      
     </Row>
    </div>
  )
}
export default withRouter(Userdetails);