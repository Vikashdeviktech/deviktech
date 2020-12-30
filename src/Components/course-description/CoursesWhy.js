import React from 'react';
import { Container, Tab, Tabs, TabContainer, Nav, Row, Col, Image, Card, Button, Breadcrumb, OverlayTrigger, Tooltip, Badge } from 'react-bootstrap'
import { faSmile, faCalendar, faClock, faTag, faDownload, faUserGraduate, faChalkboardTeacher, faStar, faStarHalfAlt, faGrinStars, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PythonCourse from "../../images/PythonCourse.png"


class CoursesWhy extends React.Component {

    render() {
        return (
            <div style={{
                fontFamily: "'Nunito', sans-serif",
                backgroundColor: "#EFF4FF",
                color:"#696A6C",
            }}>
                <Container className="pt-4" style={{
                    // border: "2px solid red",

                }}>
                    <p style={{
                    fontSize:"20px",
                    fontWeight:"bold",
                }}>Why should you take Python?</p>
                    <Row style={{
                        // border: "2px solid red",
                    }}>
                        <Col xl={4} style={{
                            // border: "2px solid red",
                        }}>
                            <Row>
                                <Col xl={2}><Image src={PythonCourse} className="my-2" height="50" width="auto" /></Col>
                                <Col xl={10}><p className="py-2">We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world.
                            </p></Col>
                            </Row>

                        </Col>
                        <Col xl={4} style={{
                            // border: "2px solid red",
                        }}>
                            <Row>
                                <Col xl={2}><Image src={PythonCourse} className="my-2" height="50" width="auto" /></Col>
                                <Col xl={10}><p className="py-2">We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world.
                            </p></Col>
                            </Row>

                        </Col>
                        <Col xl={4} style={{
                            // border: "2px solid red",
                        }}>
                            <Row>
                                <Col xl={2}><Image src={PythonCourse} className="my-2" height="50" width="auto" /></Col>
                                <Col xl={10}><p className="py-2">We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world.
                            </p></Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default CoursesWhy;