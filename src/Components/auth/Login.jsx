import React from "react";
import "./auth.css";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { Link, useHistory } from "react-router-dom";
import { Formik, ErrorMessage, Field } from "formik";
import { useCookies } from "react-cookie";
import { loginValidation } from "../../store/common/validation";
import TextError from "./TextError";
import { getSession, login } from "../../store/actions/authAction";
import { connect } from "react-redux";
import { useEffect } from "react";

const Login = ({ login, submitting }) => {
  const [cookies, setCookie] = useCookies(["user"]);
  const history = useHistory();
  let { Authorization } = getSession();
  useEffect(() => {
    if (Authorization) {
      history.push("/dashboard");
    }
  }, [history, Authorization]);
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    login(values, resetForm, history, setCookie);

    setSubmitting(false);
  };
  return (
    <div className="login_box">
      <Container>
        <Row>
          <Col>
            <div className="grey_box">
              <div className="white_box">
                <div className="content_box">
                  <div className="log_img">
                    <img src="./images/logo.svg" alt="" />
                  </div>
                  <div className="title_box">
                    <h5>Welcome Back!</h5>
                    <p>
                      Please login to molestie ligula eu urna hendrerit gravida
                      interdum massa, non tincidunt risus tristique vel.
                    </p>
                  </div>
                  <Formik
                    initialValues={{
                      email: cookies.email || "",
                      password: cookies.password || "",
                      rememberMe: false,
                    }}
                    validationSchema={loginValidation}
                    onSubmit={handleSubmit}
                  >
                    {({ values, handleChange, handleSubmit, isSubmitting }) => (
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <div className="form_weight">
                            <Form.Control
                              type="email"
                              placeholder="Enter email"
                              name="email"
                              autoComplete="off"
                              onChange={handleChange}
                              value={values.email}
                            />
                            <Icon icon="fluent:mail-24-regular" />
                          </div>
                          <ErrorMessage name="email" component={TextError} />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <div className="form_weight">
                            <Form.Control
                              type="password"
                              placeholder="Password"
                              autoComplete="off"
                              name="password"
                              onChange={handleChange}
                              value={values.password}
                            />
                            <Icon icon="fluent:lock-closed-32-regular" />
                          </div>
                          <ErrorMessage name="password" component={TextError} />
                        </Form.Group>
                        <div className="forgot_pass">
                         <div className="check_box">
                         <Field type="checkbox" name="rememberMe" />
                          <label
                            htmlFor="rememberMe"
                            className="form-check-label"
                            
                          >
                            Remember me
                          </label>
                         </div>
                          {/* <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                          </Form.Group> */}
                          <Link to="/forgot-password" className="forgot_link">
                            Forgot password?
                          </Link>
                        </div>
                        <span>
                          <button type="submit" className="sign_btn d-block ">
                            {submitting ? (
                              <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                              />
                            ) : (
                              "LOGIN NOW"
                            )}
                          </button>
                        </span>
                      </Form>
                    )}
                  </Formik>
                  {/* <p className="sign_up">
                    Not registered yet?{" "}
                    <Link to="/register">Create an Account?</Link>
                  </p> */}
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
    login: (payload, resetForm, history, setCookie) =>
      dispatch(login(payload, resetForm, history, setCookie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
