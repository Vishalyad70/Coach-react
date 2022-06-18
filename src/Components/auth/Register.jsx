import React from "react";
import "./auth.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Register = () => {
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
                    <h5>Create Account</h5>
                    <p>
                      Please Sign up to molestie ligula eu urna hendrerit
                      gravida interdum massa, non tincidunt risus tristique vel.
                    </p>
                  </div>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Name</Form.Label>
                      <div className="form_weight">
                        <Form.Control type="text" placeholder="Full Name" />
                        <Icon icon="bx:user" />
                      </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <div className="form_weight">
                        <Form.Control type="email" placeholder="Enter email" />
                        <Icon icon="fluent:mail-24-regular" />
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label> Password</Form.Label>
                      <div className="form_weight">
                        <Form.Control type="password" placeholder="Password" />
                        <Icon icon="fluent:lock-closed-32-regular" />
                      </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <div className="form_weight">
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                        />
                        <Icon icon="fluent:lock-closed-32-regular" />
                      </div>
                    </Form.Group>
                    <div className="forgot_pass"></div>
                    <Link className="sign_btn d-block">
                      <span>Create Account</span>
                    </Link>
                  </Form>
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

export default Register;
