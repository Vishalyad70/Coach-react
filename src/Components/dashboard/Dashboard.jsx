import React from "react";
import "./dashboard.css";
import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { DASHBOARD_COUNTS } from "../../store/common/constants";
import { useEffect } from "react";
import { getCount } from "../../store/actions/userAction";
import {  withRouter } from "react-router";

const Dashboard = () => {
  const count = useSelector((state) => state.dashboard);
  const column_size = DASHBOARD_COUNTS.length > 2 ? 4 : 6;
  const disptach = useDispatch();
  useEffect(() => {
    disptach(getCount());
  }, [disptach]);

  return (
    <div className="db_main">
      <Row>
        <Col>
          <h5 className="title_word mb-4">Dashboard</h5>
        </Col>
      </Row>
      <Row>
        {DASHBOARD_COUNTS.length > 0 &&
          DASHBOARD_COUNTS.map((list) => (
            <Col lg={column_size} key={list.id}>
              <div className="status_box">
                <div className="status">
                  <span>
                    <img src={list.icon} alt="" />
                  </span>
                  <h5>{list.title}</h5>
                </div>
                <div className="nim_status">
                  <h5>{count[list.dataKey]}</h5>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </div>
  );
};
export default withRouter(Dashboard);
