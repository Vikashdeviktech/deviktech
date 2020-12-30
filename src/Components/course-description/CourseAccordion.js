import React from 'react';
import { Container, Tab, Tabs, TabContainer, Nav, Row, Col, Image, Card, Button, Accordion, OverlayTrigger, Tooltip, Badge } from 'react-bootstrap'
import { faSmile, faCalendar, faClock, faTag, faDownload, faUserGraduate, faAddressCard, faStar, faFileDownload, faPlusCircle, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PythonCourse from "../../images/PythonCourse.png"
import styled from 'styled-components'


const ButtonStyle = styled.button`

background-color: #fff;
border: 2px solid #0F2B48;
color: #0F2B48;
padding: 0.2rem 0.5rem;
border-radius: 5px;
font-family: 'Nunito', sans-serif;

:focus{
    outline:none;
}

:hover, :active {
background-color: #0F2B48;
border: 2px solid #0F2B48;
color: #fff;
font-family: 'Nunito', sans-serif;
font-weight: bold;
}
`;

class CourseAccordion extends React.Component {

    render() {
        return (
            <div style={{
                fontFamily: "'Nunito', sans-serif",
                backgroundColor: "#EFF4FF",
                color: "#696A6C",
            }}>
                <Container className="py-4" style={{
                    // border: "2px solid red",
                }}>
                    <Row>
                        <Col xl={4} style={{
                            // border:"2px solid red",
                        }}>
                            <h3>Python Course Curriculum</h3>
                        </Col>
                        <Col xl={8} style={{
                            // border:"2px solid red",
                        }}>
                            <ButtonStyle><FontAwesomeIcon icon={faFileDownload} /> Download Curriculum</ButtonStyle>
                        </Col>
                        <Col xl={12} className="my-2">
                            <Accordion defaultActiveKey="0" style={{
                                boxShadow:"0px 0px 5px 1px #aaa",
                            }}>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" style={{
                                        // border:"2px solid red",
                                        backgroundColor: "#fff",
                                    }}>
                                        <FontAwesomeIcon icon={faPlusCircle} /> Introduction to Python
                            </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body style={{
                                        lineHeight:"40px",
                                    }}><strong>Learning Objectives:</strong> You will get a brief idea of what Python is and touch on the basics.<br></br>
                                        <strong>Topics:</strong><br></br>
                                        <li>Overview of Python</li>
                                        <li>Overview of Python</li>
                                        <li>Overview of Python</li>
                                        <li>Overview of Python</li>
                                        <li>Overview of Python</li>
                                        <li>Overview of Python</li>
                                        <li>Overview of Python</li>
                                        <strong>Skills:</strong> Fundamentals of Python programming</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1" style={{
                                        // border:"2px solid red",
                                        backgroundColor: "#fff",
                                    }}>
                                        <FontAwesomeIcon icon={faPlusCircle} /> Click me!
                            </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                    <Card.Body style={{
                                        lineHeight:"40px",
                                    }}><strong>Learning Objectives:</strong> You will get a brief idea of what Python is and touch on the basics.<br></br>
                                        <strong>Topics:</strong><br></br>
                                        <li>Overview of Python</li>
                                        <li>Overview of Python</li>
                                        <li>Overview of Python</li>
                                        <li>Overview of Python</li>
                                        <li>Overview of Python</li>
                                        <li>Overview of Python</li>
                                        <li>Overview of Python</li>
                                        <strong>Skills:</strong> Fundamentals of Python programming</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2" style={{
                                        // border:"2px solid red",
                                        backgroundColor: "#fff",
                                    }}>
                                        <FontAwesomeIcon icon={faPlusCircle} /> Click me!
                            </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                    <Card.Body style={{
                                        lineHeight:"40px",
                                    }}><strong>Learning Objectives:</strong> You will get a brief idea of what Python is and touch on the basics.<br></br>
                                        <strong>Topics:</strong><br></br>
                                        <li>Overview of Python</li>
                                        <li>Overview of Python</li>
                                        <li>Overview of Python</li>
                                        <li>Overview of Python</li>
                                        <li>Overview of Python</li>
                                        <li>Overview of Python</li>
                                        <li>Overview of Python</li>
                                        <strong>Skills:</strong> Fundamentals of Python programming</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="3" style={{
                                        // border:"2px solid red",
                                        backgroundColor: "#fff",
                                    }}>
                                        <FontAwesomeIcon icon={faPlusCircle} /> Click me!
                            </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="4" style={{
                                        // border:"2px solid red",
                                        backgroundColor: "#fff",
                                    }}>
                                        <FontAwesomeIcon icon={faPlusCircle} /> Click me!
                            </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="5" style={{
                                        // border:"2px solid red",
                                        backgroundColor: "#fff",
                                    }}>
                                        <FontAwesomeIcon icon={faPlusCircle} /> Click me!
                            </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="5">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="6" style={{
                                        // border:"2px solid red",
                                        backgroundColor: "#fff",
                                    }}>
                                        <FontAwesomeIcon icon={faPlusCircle} /> Click me!
                            </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="6">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>


                </Container>
            </div>
        );
    }
}


export default CourseAccordion;