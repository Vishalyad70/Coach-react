import React, { useEffect } from "react";
import "./dashboard.css";
import { Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserLists } from "../../store/actions/userAction";
import { v4 as uuidv4 } from "uuid";
import Paginate from "./Paginate";
import { RESET_USER_LIST } from "../../store/common/types";
import SiteLoader from "../SiteLoader/SiteLoader";
import {  withRouter } from "react-router";
import { Link } from "react-router-dom";

const UsersList = () => {
  const userState = useSelector((state) => state.user);
  const disptach = useDispatch();

  const { userList, currentPage, per_page, total_record, loading } = userState;
  useEffect(() => {
    disptach(getUserLists());
    return () => disptach({ type: RESET_USER_LIST });
  }, [disptach]);

  const handlePageClick = ({ selected: page }) => {
    disptach(getUserLists(page));
  };

  return (
    <>
      {" "}
      {loading ? (
        <SiteLoader />
      ) : (
        <div className="coach_list">
          <Row>
            <Col>
              <h5 className="title_word mb-4">Users List</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="eve_box">
                <Table striped bordered size="sm" responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>User's Name</th>
                      <th>User Email</th>
                      <th>Join Date & Time</th>
                      <th>Total Appointments</th>

                      <th colSpan={2}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList &&
                      userList.length > 1 &&
                      userList.map((user) => (
                        <tr key={uuidv4()}>
                          <td>{user.id}</td>
                          <td>{user.full_name || "NA"}</td>
                          <td>{user.email || "NA"}</td>
                          <td>{user.created_on}</td>
                          <td>24</td>

                          <td>
                            {/* <button className="view_btn">View Details</button> */}
                            <Link className="view_btn" to="/dashboard/coach-list/userdetails">View Details</Link>
                          </td>
                          <td>
                            <span className="delete">
                              <img src="../images/delete.svg" alt="" />
                            </span>
                          </td>
                        </tr>
                      ))}
                    {userList && userList.length === 0 && (
                      <tr>
                        <td>No record found</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
                <hr />
                <div className="d-flex justify-content-between p-4">
                  <div>
                    <h5>Total {total_record} records</h5>
                  </div>
                  <Paginate
                    totalCounts={total_record}
                    perPage={per_page}
                    currentPage={currentPage}
                    handlePageClick={handlePageClick}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};
export default withRouter(UsersList);
