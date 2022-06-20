import React from "react";
import "./auth.css";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Formik, ErrorMessage } from "formik";
import { changePasswordValidation } from "../../store/common/validation";
import TextError from "./TextError";
import { changePassword } from "../../store/actions/authAction";
import { connect } from "react-redux";

const ChangePassword = ({ changePassword, submitting }) => {
  const history = useHistory();
  const handleSubmit = (values, { setSubmitting }) => {
    let email = localStorage.getItem("email") || "";
    changePassword({ email, ...values }, history);
    setSubmitting(false);
  };
  return (
    <div className="login_box height_one">
      <Container>
        <Row>
          <Col>
            <div className="grey_box reg_box">
              <div className="white_box">
                <div className="content_box">
                  <div className="log_img">
                    <img src="./images/logo.svg" alt="" />
                  </div>
                  <div className="title_box">
                    <h5>Change password</h5>
                    <p>
                      Please Sign up to molestie ligula eu urna hendrerit
                      gravida interdum massa, non tincidunt risus tristique vel.
                    </p>
                  </div>
                  <Formik
                    initialValues={{
                      temporary_pass: "",
                      password: "",
                      password_confirmation: "",
                    }}
                    validationSchema={changePasswordValidation}
                    onSubmit={handleSubmit}
                  >
                    {({ values, handleChange, handleSubmit, isSubmitting }) => (
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Temporary password</Form.Label>
                          <div className="form_weight">
                            <Form.Control
                              type="text"
                              placeholder="Temp password"
                              name="temporary_pass"
                              autoComplete="off"
                              onChange={handleChange}
                              value={values.temporary_pass}
                            />
                            <Icon icon="fluent:lock-closed-32-regular" />
                          </div>
                          <ErrorMessage
                            name="temporary_pass"
                            component={TextError}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label> Password</Form.Label>
                          <div className="form_weight">
                            <Form.Control
                              type="password"
                              placeholder="Password"
                              name="password"
                              autoComplete="off"
                              onChange={handleChange}
                              value={values.password}
                            />
                            <Icon icon="fluent:lock-closed-32-regular" />
                          </div>
                          <ErrorMessage name="password" component={TextError} />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Confirm Password</Form.Label>
                          <div className="form_weight">
                            <Form.Control
                              type="password"
                              placeholder="Confirm Password"
                              name="password_confirmation"
                              autoComplete="off"
                              onChange={handleChange}
                              value={values.password_confirmation}
                            />
                            <Icon icon="fluent:lock-closed-32-regular" />
                          </div>
                          <ErrorMessage
                            name="password_confirmation"
                            component={TextError}
                          />
                        </Form.Group>
                        <div className="forgot_pass"></div>
                        <button type="submit" className="sign_btn d-block">
                          {submitting ? (
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />
                          ) : (
                            "CHANGE PASSWORD"
                          )}
                        </button>
                      </Form>
                    )}
                  </Formik>
                  <p className="sign_up">
                    Already have an account? <Link to="/">Login Now</Link>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = ({ form }) => {
  return {
    submitting: form.submitting,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePassword: (payload, history) =>
      dispatch(changePassword(payload, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
