import React from 'react'
import collegeImage from "../../images/collegeImage.png"
import { Container, Tab, Tabs, TabContainer, Nav, Row, Col, Image, Card, Button } from 'react-bootstrap'
import { Zoom } from 'react-reveal';
import GirlOnMainArea from "../../images/PythonSchool.png"
import GithubLink from "../../images/GithubLink.png"
import RealTimeProject from "../../images/RealTimeProject.png"
import Assignment from "../../images/Assignment.png"
import SchoolSupport from "../../images/SchoolSupport.png"
import SchoolCurriculum from "../../images/SchoolCurriculum.png"
import Certification from "../../images/Certification.png"



class SchoolServices extends React.Component {
    render() {

        return (
            <div className="py-4">
                <Container style={{
                    // border: "2px solid red",
                    boxShadow: "5px 0px 20px 5px #4141413a",
                    borderRadius: "10px",
                    height: "auto",
                }}>
                    <Row style={{
                        // border: "2px solid blue",
                        // height:"10vh",
                        color: "#08192B",
                        fontWeight: "800",
                        fontSize: "35px",
                        lineHeight: "65px",
                        letterSpacing: "0.02em",
                        fontFamily: "'Nunito', sans-serif",
                        // width: "100%",
                        textAlign: "center",
                    }}>
                        <Col className="pt-2" xl={12}>
                            <p style={{
                                // border: "2px solid #0F2B48",
                                fontWeight: "800",
                                fontSize: "35px",
                                lineHeight: "65px",
                                letterSpacing: "0.02em",
                                fontFamily: "'Nunito', sans-serif",
                                textAlign: "center",
                            }}>
                                Services For Kids</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={2} style={{
                            // border: "2px solid red",
                            // height: "30vh",
                        }}>
                            <Image className="px-4 py-4" src={Certification} fluid height="auto" width="auto" style={{
                                // border: "2px solid red",
                            }} />
                            <p className="py-2 text-center" style={{
                                fontFamily: "'Nunito', sans-serif",
                                fontWeight: "800",
                            }}>Certification</p>

                        </Col>
                        <Col xl={2} style={{
                            // border: "2px solid red",
                            // height: "30vh",
                        }}>
                            <Image className="px-4 py-4" src={RealTimeProject} fluid height="auto" width="auto" style={{
                                // border: "2px solid red",
                            }} />
                            <p className="py-2 text-center" style={{
                                fontFamily: "'Nunito', sans-serif",
                                fontWeight: "800",
                            }}>Real Life Projects</p>

                        </Col>
                        <Col xl={2} style={{
                            // border: "2px solid red",
                            // height: "30vh",
                        }}>
                            <Image className="px-4 py-4" src={Assignment} fluid height="auto" width="auto" style={{
                                // border: "2px solid red",
                            }} />
                            <p className="py-2 text-center" style={{
                                fontFamily: "'Nunito', sans-serif",
                                fontWeight: "800",
                            }}>Assignment</p>

                        </Col>
                        <Col xl={2} style={{
                            // border: "2px solid red",
                            // height: "30vh",
                        }}>
                            <Image className="px-4 py-4" src={SchoolSupport} fluid height="auto" width="auto" style={{
                                // border: "2px solid red",
                            }} />
                            <p className="py-2 text-center" style={{
                                fontFamily: "'Nunito', sans-serif",
                                fontWeight: "800",
                            }}>24x7 Expert Support</p>

                        </Col>
                        <Col xl={2} style={{
                            // border: "2px solid red",
                            // height: "30vh",
                        }}>
                            <Image className="px-4 py-4" src={SchoolCurriculum} fluid height="auto" width="auto" style={{
                                // border: "2px solid red",
                            }} />
                            <p className="py-2 text-center" style={{
                                fontFamily: "'Nunito', sans-serif",
                                fontWeight: "800",
                            }}>Curriculum By Expert</p>

                        </Col>
                        <Col xl={2} style={{
                            // border: "2px solid red",
                            // height: "30vh",
                        }}>
                            <Image className="px-4 py-4" src={GithubLink} fluid height="auto" width="auto" style={{
                                // border: "2px solid red",
                            }} />
                            <p className="py-2 text-center" style={{
                                fontFamily: "'Nunito', sans-serif",
                                fontWeight: "800",
                            }}>GitHub Profile</p>

                        </Col>

                    </Row>
                </Container>


            </div >
        );
    }
}


export default SchoolServices;