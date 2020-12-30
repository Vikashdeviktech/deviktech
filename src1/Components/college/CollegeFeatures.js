import React from 'react'
import collegeImage from "../../images/collegeImage.png"
import { Container, Tab, Tabs, TabContainer, Nav, Row, Col, Image, Card, Button } from 'react-bootstrap'
import { Zoom } from 'react-reveal';
import PythonSchool from "../../images/PythonSchool.png"
import SchoolGame from "../../images/SchoolGame.png"
import SchoolWebDevelopment from "../../images/SchoolWebDevelopment.png"
import SchoolMobileDevelopment from "../../images/SchoolMobileDevelopment.png"
import CollegeHacking from "../../images/CollegeHacking.png"
import CollegeData from "../../images/CollegeData.png"




class CollegeFeatures extends React.Component {
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
                                Benefits For Students</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={2} style={{
                            // border: "2px solid red",
                            // height: "30vh",
                        }}>
                            <Image className="px-4 py-4" src={SchoolMobileDevelopment} fluid height="auto" width="auto" style={{
                                // border: "2px solid red",
                            }} />
                            <p className="py-2 text-center" style={{
                                fontFamily: "'Nunito', sans-serif",
                                fontWeight: "800",
                            }}>Mobile App Development</p>

                        </Col>
                        <Col xl={2} style={{
                            // border: "2px solid red",
                            // height: "30vh",
                        }}>
                            <Image className="px-4 py-4" src={SchoolWebDevelopment} fluid height="auto" width="auto" style={{
                                // border: "2px solid red",
                            }} />
                            <p className="py-2 text-center" style={{
                                fontFamily: "'Nunito', sans-serif",
                                fontWeight: "800",
                            }}>Web<br></br>Development</p>

                        </Col>
                        <Col xl={2} style={{
                            // border: "2px solid red",
                            // height: "30vh",
                        }}>
                            <Image className="px-4 py-4" src={PythonSchool} fluid height="auto" width="auto" style={{
                                // border: "2px solid red",
                            }} />
                            <p className="py-2 text-center" style={{
                                fontFamily: "'Nunito', sans-serif",
                                fontWeight: "800",
                            }}>Python<br></br> Programming</p>

                        </Col>
                        <Col xl={2} style={{
                            // border: "2px solid red",
                            // height: "30vh",
                        }}>
                            <Image className="px-4 py-4" src={CollegeData} fluid height="auto" width="auto" style={{
                                // border: "2px solid red",
                            }} />
                            <p className="py-2 text-center" style={{
                                fontFamily: "'Nunito', sans-serif",
                                fontWeight: "800",
                            }}>Data Structure<br></br>And Algorithms</p>

                        </Col>
                        <Col xl={2} style={{
                            // border: "2px solid red",
                            // height: "30vh",
                        }}>
                            <Image className="px-4 py-4" src={CollegeHacking} fluid height="auto" width="auto" style={{
                                // border: "2px solid red",
                            }} />
                            <p className="py-2 text-center" style={{
                                fontFamily: "'Nunito', sans-serif",
                                fontWeight: "800",
                            }}>Ethical<br></br> Hacking</p>

                        </Col>
                        <Col xl={2} style={{
                            // border: "2px solid red",
                            // height: "30vh",
                        }}>
                            <Image className="px-4 py-4" src={SchoolGame} fluid height="auto" width="auto" style={{
                                // border: "2px solid red",
                            }} />
                            <p className="py-2 text-center" style={{
                                fontFamily: "'Nunito', sans-serif",
                                fontWeight: "800",
                            }}>Game<br></br> Development</p>

                        </Col>

                    </Row>
                </Container>


            </div >
        );
    }
}


export default CollegeFeatures;