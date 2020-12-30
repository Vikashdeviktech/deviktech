import React from "react";
import BgMainArea from "../../images/BgMainArea.png"
import GirlOnMainArea from "../../images/GirlOnMainArea.png"
import styled from 'styled-components';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel'
import { Fade, Zoom } from 'react-reveal';
import Enroll from '../Header/Enroll'

class HomeMainArea extends React.Component {
    render() {

        return (
            <div>
                <Zoom>

                </Zoom>
                <Container fluid d-flex flex-column style={{
                    backgroundImage: 'url(' + BgMainArea + ')',
                    backgroundAttachment: "fixed",
                    // border: "2px solid red",
                    backgroundSize: "cover",
                    height: "auto",
                }}>
                    <Row>
                        <Col xs={12} md={12} lg={12} xl={6} style={{
                            // border: "2px solid black",
                            height: "auto",
                        }}>
                            <Zoom>
                                <Image className="px-4 py-4" src={GirlOnMainArea} fluid height="auto" width="auto" style={{ textAlign: "center", margin: "2%", }} />
                            </Zoom>

                            {/* <img src={GirlOnMainArea} height="550px" width="600px"></img> */}
                        </Col>
                        <Col xs={12} md={12} lg={12} xl={6} style={{
                            // border: "2px solid black",
                            height: "auto",
                        }}>
                            <Zoom>
                                <Col xs={12}>
                                    <h1 style={{
                                        // border: "2px solid black",
                                        height: "auto",
                                        margin: "5% 10% 0% 10%",
                                        // color: "#08192B",
                                        fontWeight: "800",
                                        fontSize: "50px",
                                        lineHeight: "65px",
                                        letterSpacing: "0.02em",
                                        // textTransform: "uppercase",
                                        fontFamily: "'Nunito', sans-serif",
                                    }}>Explore, Enjoy and Grow
                            </h1>
                                </Col>
                                <Col xs={12}>
                                    <h3 style={{
                                        // border: "2px solid black",
                                        height: "auto",
                                        margin: "5% 10% 1% 10%",
                                        color: "#08192B",
                                        fontWeight: "700",
                                        fontFamily: "'Nunito', sans-serif",
                                    }}>The perfect platform to become the next creator of this programming world.</h3>
                                </Col>
                                <Col xs={12}>
                                    <p style={{
                                        // border: "2px solid black",
                                        height: "auto",
                                        margin: "5% 10% 1% 10%",
                                        color: "#08192B",
                                        fontWeight: "700",
                                        fontFamily: "'Nunito', sans-serif",
                                    }}>DevikTech students are trained in such a way that they are always 3 years ahead of the students of their age. We at DevikTech provide a wide range of courses to empower students from different fields. We provide Live sessions by the industry experts and project which help our students in the real world.</p>
                                </Col>
                                <Col xs={12}>
                                    <Form style={{
                                        // border: "2px solid black",
                                        boxShadow: "5px 0px 20px 5px #4141413a",
                                        borderRadius: "10px",
                                        backgroundColor: "white",
                                        padding: "5%",
                                        height: "auto",
                                        margin: "5% 10% 4% 10%",
                                        color: "#08192B",
                                        fontWeight: "700",
                                        fontFamily: "'Nunito', sans-serif",
                                    }}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Enter Email For Latest Update</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                    </Form.Text>
                                        </Form.Group>
                                        <Form.Group>
                                            <label>*Hurry Only Few Seats Avaialble</label>
                                        </Form.Group>
                                        <Button style={{ backgroundColor: "#0F4FCD" }} type="submit">
                                            Get Updates
                                </Button>
                                    </Form>
                                </Col>
                            </Zoom>




                        </Col>
                    </Row>
                </Container>
                
            </div >
            


        )
    }
}
export default HomeMainArea;