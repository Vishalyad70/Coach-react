import React from "react";
import "./dblayout.css";
import Sidenav from "./dashboard/Sidenav";
import Dashboard from "./dashboard/Dashboard";
import { Route, withRouter } from "react-router";
import { Header } from "./dashboard/Header";
import UsersList from "./dashboard/UsersList";

import CoachList from "./dashboard/CoachList";

import { Container, Row, Col } from "react-bootstrap";

const DashboardLayout = () => {
  return (
    <div className="dblayout">
      <Sidenav />
      <div className="side_wrapper">
        <Container fluid>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>

          <Row>
            <Col>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/dashboard/coach-list" component={CoachList} />
              <Route exact path="/dashboard/user-list" component={UsersList} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default withRouter(DashboardLayout);
