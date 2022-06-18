import React from "react";
import "./auth.css";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { forgotValidation } from "../../store/common/validation";
import { forgotPassword } from "../../store/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

const ForgotPassword = () => {
  const submitting = useSelector((state) => state.form.submitting);
  const dispatch = useDispatch();
  const history = useHistory();
  const initialValues = {
    email: "",
  };
  const onSubmit = (values, action) => {
    dispatch(forgotPassword(values, history));
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: forgotValidation,
  });
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
                    <h5>Forgot Password?</h5>
                    <p>
                      Enter your registered email address to change your Bdai
                      account password{" "}
                    </p>
                  </div>
                  <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <div className="form_weight">
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          name="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                        />
                        <Icon icon="fluent:mail-24-regular" />
                      </div>
                      {formik.errors.email ? (
                        <div className="error"> {formik.errors.email}</div>
                      ) : null}
                    </Form.Group>

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
                        "FORGOT PASSWORD"
                      )}
                    </button>
                  </Form>
                  <p className="sign_up">
                    If Remember password? <Link to="/">Login Now</Link>
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

export default ForgotPassword;
