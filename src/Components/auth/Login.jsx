import React from 'react';
import "./auth.css";
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <div className='login_box'>
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
                                        <p>Please login to molestie ligula eu urna hendrerit gravida
                                            interdum massa, non tincidunt risus tristique vel.</p>
                                    </div>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <div className="form_weight">
                                                <Form.Control type="email" placeholder="Enter email" />
                                                <Icon icon="fluent:mail-24-regular" />
                                            </div>

                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <div className="form_weight">
                                                <Form.Control type="password" placeholder="Password" />
                                                <Icon icon="fluent:lock-closed-32-regular" />
                                            </div>
                                        </Form.Group>
                                        <div className="forgot_pass">
                                            <Form.Group  controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Remember me" />
                                            </Form.Group>
                                            <Link to="/Forgotpass" className='forgot_link'>Forgot password?</Link>
                                        </div>
                                        <span><Link to="/dashboard" className='sign_btn d-block'>
                                        Login now
                                        </Link></span>

                                    </Form>
                                    <p className='sign_up'>Not registered yet? <Link to="/Register">Create an Account?</Link></p>

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
