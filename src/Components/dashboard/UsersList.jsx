import React from 'react';
import "./dashboard.css";
import { withRouter } from 'react-router';
import { Col, Row, Table } from 'react-bootstrap';

const UsersList = () => {
  return (
    <div className='coach_list'>
    <Row>
      <Col><h5 className='title_word mb-4'>Users List</h5></Col>

    </Row>
    <Row>
      <Col>
       <div className="eve_box">
       <Table striped bordered  size="sm" responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>User's Name</th>
              <th>User Email</th>
              <th>Join  Time</th>
              <th>Join Date</th>
              <th>Total Appointments</th>
              
              <th></th>
              <th></th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Vishal Yadav</td>
              <td>Example@gmail.com</td>
              <td>12:00 am</td>
              <td>22/02/2022</td>
              <td>24</td>
             
              <td><button className='view_btn'>View Details</button></td>
              <td><span className='delete'><img src="../images/delete.svg" alt="" /></span></td>
              
            </tr>

          </tbody>
        </Table>
       </div>
      </Col>
    </Row>


  </div>
  )
}
export default (withRouter(UsersList));
