import React from 'react';
import { Container, Tab, Tabs, TabContainer, Nav, Row, Col, Image, Card, Button, Breadcrumb, Table, OverlayTrigger, Tooltip, Badge } from 'react-bootstrap'
import { faSmile, faCalendar, faClock, faTag, faDownload, faUserGraduate, faChalkboardTeacher, faStar, faStarHalfAlt, faGrinStars, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PythonCourse from "../../images/PythonCourse.png"
import styled from 'styled-components'


const ButtonStyle = styled.button`
background-color: #0F2B48;
border: 2px solid #0F2B48;
color: #fff;
padding: 0.2rem 0.5rem;
border-radius: 5px;
font-family: 'Nunito', sans-serif;
font-weight: bold;

:focus{
    outline:none;
}

:hover, :active {
    background-color: #fff;
    border: 2px solid #0F2B48;
    font-family: 'Nunito', sans-serif;
    color: #0F2B48;
    font-weight: bold;
}
`;

class CoursesCurriculum extends React.Component {

    render() {
        return (
            <div style={{
                fontFamily: "'Nunito', sans-serif",
                // backgroundColor: "#EFF4FF",
                backgroundImage: "linear-gradient(to right, #0076D2 , #00B4C4)",
                color: "#696A6C",
            }}>
                <Container className="py-4" style={{
                    // border: "2px solid red",
                }}>
                    <h3 style={{
                        color: "white",
                    }}>Instructor-led Python live online classes</h3>
                    <Row className="my-4 py-2" style={{
                        backgroundColor: "#EFF4FF",
                        border: "2px solid #aaa",
                        borderRadius:"10px",
                    }}>
                        <Col xl={7} style={{
                            
                        }}>
                            <Table className="my-4" striped bordered >
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Day</th>
                                        <th>Time</th>
                                        {/* <th>Username</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>30th November</td>
                                        <td>Monday</td>
                                        <td>05:00 PM to 06:00 PM (IST)</td>
                                        {/* <td>@mdo</td> */}
                                    </tr>
                                    <tr>
                                        <td>30th November</td>
                                        <td>Monday</td>
                                        <td>05:00 PM to 06:00 PM (IST)</td>
                                        {/* <td>@mdo</td> */}
                                    </tr>
                                    <tr>
                                        <td>30th November</td>
                                        <td>Monday</td>
                                        <td>05:00 PM to 06:00 PM (IST)</td>
                                        {/* <td>@mdo</td> */}
                                    </tr>
                                    <tr>
                                        <td>30th November</td>
                                        <td>Monday</td>
                                        <td>05:00 PM to 06:00 PM (IST)</td>
                                        {/* <td>@mdo</td> */}
                                    </tr>
                                    
                                </tbody>
                            </Table>
                        </Col>
                        <Col xl={5} className="my-3" style={{
                            // border: "2px solid red",
                        }}>
                            <Row>
                                <Col xl={12}>
                                    <p style={{
                                        fontSize:"25px",
                                    }}>Course Price at</p>
                                </Col>
                                <Col xl={6}>
                                    <h2 style={{
                                        fontSize:"45px",
                                    }}>₹19,030</h2>
                                </Col>
                                <Col xl={6}>
                                    <strike style={{
                                        fontSize:"35px",
                                        color:"#aaa",
                                    }}>₹44,444</strike>
                                </Col>
                                <Col xl={12}>
                                    <p className="mx-1">18% off offer for limit time <FontAwesomeIcon icon={faTag}/></p>
                                </Col>
                                <Col xl={12}>
                                    <ButtonStyle className="mx-1 my-1" variant="primary" style={{
                                        fontSize:"25px",
                                    }}>ENROLL NOW</ButtonStyle>
                                    <ButtonStyle className="mx-1 my-1" variant="primary" style={{
                                        fontSize:"25px",
                                    }}>Book Free Demo</ButtonStyle>
                                </Col>


                            </Row>


                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}


export default CoursesCurriculum;