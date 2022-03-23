import React from 'react';
import "./auth.css";
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export const Forgotpass = () => {
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
                                        <h5>Forgot Password?</h5>
                                        <p>Enter your registered email address to change your Bdai account password </p>
                                    </div>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <div className="form_weight">
                                                <Form.Control type="email" placeholder="Enter email" />
                                                <Icon icon="fluent:mail-24-regular" />
                                            </div>

                                        </Form.Group>

                                      
                                       
                                        <Link className='sign_btn d-block'>
                                        <span>Send</span>
                                        </Link>

                                    </Form>
                                    <p className='sign_up'>If Remember password? <Link to="/">Login Now</Link></p>

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
