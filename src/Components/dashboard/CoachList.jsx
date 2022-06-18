import React, { useEffect } from "react";
import "./dashboard.css";
import { Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCoachLists } from "../../store/actions/userAction";
import { v4 as uuidv4 } from "uuid";
import Paginate from "./Paginate";
import { RESET_COACH_LIST } from "../../store/common/types";
import SiteLoader from "../SiteLoader/SiteLoader";

const CoachList = () => {
  const coachState = useSelector((state) => state.coach);
  const disptach = useDispatch();

  const { loading, allCoach, currentPage, per_page, total_record } = coachState;
  useEffect(() => {
    disptach(getCoachLists());
    return () => disptach({ type: RESET_COACH_LIST });
  }, [disptach]);

  const handlePageClick = ({ selected: page }) => {
    disptach(getCoachLists(page));
  };

  return (
    <>
      {loading ? (
        <SiteLoader />
      ) : (
        <div className="coach_list">
          <Row>
            <Col>
              <h5 className="title_word mb-4">Coach List</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="eve_box">
                <Table striped bordered size="sm" responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Coach's Name</th>
                      <th>Coach Email</th>

                      <th>Join Date & Time</th>
                      <th>Certification Title</th>
                      <th>Country</th>
                      <th colSpan={2}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allCoach &&
                      allCoach.length > 1 &&
                      allCoach.map((user) => (
                        <tr key={uuidv4()}>
                          <td>{user.id}</td>
                          <td>{user.full_name || "NA"}</td>
                          <td>{user.email || "NA"}</td>
                          <td>{user.created_on}</td>
                          <td>{user.Certification_title}</td>
                          <td>{user.Country}</td>
                          <td>
                            <button className="view_btn">View Details</button>
                          </td>
                          <td>
                            <span className="delete">
                              <img src="../images/delete.svg" alt="" />
                            </span>
                          </td>
                        </tr>
                      ))}
                    {allCoach && allCoach.length === 0 && (
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
export default CoachList;
