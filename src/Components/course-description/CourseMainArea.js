import React from 'react';
import { Container, Tab, Tabs, TabContainer, Nav, Row, Col, Image, Card, Button, Breadcrumb, OverlayTrigger, Tooltip, Badge } from 'react-bootstrap'
import { faSmile, faCalendar, faClock, faTag, faDownload, faUser, faChalkboardTeacher, faStar, faStarHalfAlt, faGrinStars, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PythonCourse from "../../images/PythonCourse.png"


class CourseMainArea extends React.Component {

    render() {
        return (
            <div style={{
                fontFamily: "'Nunito', sans-serif",
                backgroundColor: "#EFF4FF",
            }}>
                <Container className="py-4" style={{
                    // border: "2px solid red",
                }}>
                    <Row>
                        <Col xl={10}>
                            <h2 style={{
                                // border: "2px solid red",
                                fontWeight: "bold",
                            }}>
                                C++ Programming Language
                                <Badge variant="danger" className="mx-2">Live Classes</Badge>
                            </h2>
                        </Col>
                        <Col xl={2} className="mt-1" style={{
                            // border: "2px solid red",
                        }}>
                            <Row style={{
                                // border: "2px solid red",
                            }}>
                                <Col xs={2} xl={3} ><FontAwesomeIcon icon={faPhoneAlt} size="2x" /></Col>
                                <Col xs={10} xl={9} style={{
                                    // border: "2px solid red",
                                    padding: "0px",
                                }}>
                                    <p style={{
                                        fontSize: "11px",
                                        margin: "0px",
                                    }}>Have Queries? Ask us</p>
                                    <Row xl={6} style={{
                                        // border: "2px solid red",
                                        fontSize: "12px",
                                        fontWeight: "bold",
                                        margin: "0px",
                                    }}>+91-9871-888-205</Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>




                <Container style={{
                    // border: "2px solid red",

                }}>
                    <Row style={{
                        // border: "2px solid red",

                    }}>
                        <Col xl={3} className="py-2 text-center" style={{
                            border: "2px solid #aaa",
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                        }}>
                            <Image src={PythonCourse} height="200" width="auto" />
                        </Col>
                        <Col style={{
                            // border: "2px solid red",
                        }}>
                            <p className="py-2" style={{
                                color:"#696A6C",
                            }}>We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world. We provide one to one sessions for all types of doubt clarifications. We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world.
                            We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world. We provide one to one sessions for all types of doubt clarifications.
                            </p>
                            <Badge variant="light" className="my-2" style={{
                                border: "2px solid #aaa",
                                boxShadow: "2px 2px 5px 0px #aaa",
                                fontSize: "16px",
                            }}>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} /> Live Classes
                                {/* <a href="#" className="px-1"> Read Review</a> */}
                            </Badge>
                            <Badge variant="light" className="mx-1 my-2" style={{
                                border: "2px solid #aaa",
                                boxShadow: "2px 2px 5px 0px #aaa",
                                fontSize: "16px",
                            }}><FontAwesomeIcon icon={faUser} /> Live Classes</Badge>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default CourseMainArea;