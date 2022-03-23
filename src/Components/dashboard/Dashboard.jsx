import React from 'react';
import "./dashboard.css";
import { withRouter } from 'react-router';
import {Row, Col} from "react-bootstrap";

 const Dashboard = () => {
  return (
    <div className='db_main'>
      <Row>
        <Col><h5 className='title_word mb-4'>Dashboard</h5></Col>
        
      </Row>
      <Row>
        <Col lg={4}>
          <div className="status_box">
            <div className="status">
              <span><img src="./images/users.svg" alt="" /></span>
              <h5>Total no. of users</h5>
            </div>
            <div className="nim_status">
              <h5>1500</h5>
            </div>

          </div>
        </Col>
        <Col lg={4}>
          <div className="status_box">
            <div className="status">
              <span><img src="./images/users.svg" alt="" /></span>
              <h5>Total no. of users</h5>
            </div>
            <div className="nim_status">
              <h5>1500</h5>
            </div>

          </div>
        </Col>
        <Col lg={4}>
          <div className="status_box">
            <div className="status">
              <span><img src="./images/users.svg" alt="" /></span>
              <h5>Total no. of users</h5>
            </div>
            <div className="nim_status">
              <h5>1500</h5>
            </div>

          </div>
        </Col>
      </Row>
  
    </div>
  )
}
export default (withRouter(Dashboard));
