import React from "react";
// import footerlogo from "./images/devikTech.Logo.png"
import footerImage from "../../images/footerImage.png"
import footerLogoWhite from "../../images/Logo.White.png"
import { faFacebook, faInstagram, faLinkedin, faYoutube, faWhatsapp, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMobile, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col, Form, Button, Container, Image, InputGroup, FormControl } from "react-bootstrap";
import { Fade, Zoom } from 'react-reveal';
import styled from 'styled-components'

const ButtonStyle = styled.button`
background-color: rgba(121, 210, 209, 0);
color: #fff;
padding: 0.5rem 2rem;
border: 3px solid #0F2B48;
border-radius: 5px;
font-family: 'Nunito', sans-serif;

:focus{
    outline:none;
}

:hover, :active {
    background-color: #271F44;
    border: 2px solid #271F44;
    color: #fff;
    font-family: 'Nunito', sans-serif;
}
`;


class NewFooter extends React.Component {
    enroll = () => {
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSfu0Iw5dSJNbymQetE7trMsoil-WWqUfylVgyg7GC0TYjdECw/viewform?vc=0&c=0&w=1', '_blank')
    }

    render() {


        return (
            <div>

                {/* about */}


                <div style={{
                    // border:"2px solid red",
                    height: "auto",
                    backgroundColor: "#08192B",
                }}>
                    <Container fluid d-flex flex-column>
                        <Row>
                            <Col xs={12} md={12} lg={12} xl={5} style={{
                                // border: "2px solid black",
                                height: "auto",
                                textAlign: "center",
                            }}>
                                <Zoom>
                                    <Image className="px-4 py-4" src={footerImage} fluid height="auto" width="auto" style={{
                                        textAlign: "center",
                                        // border: "2px solid black",
                                    }} />
                                </Zoom>

                                {/* <img src={GirlOnMainArea} height="550px" width="600px"></img> */}
                            </Col>
                            <Col xs={12} md={12} lg={12} xl={7} style={{
                                // border: "2px solid black",
                                height: "auto",
                            }}>
                                <Zoom>
                                    <Col xs={12}>
                                        <h1 className="mt-4 pt-4" style={{
                                            // border: "2px solid black",
                                            height: "auto",
                                            // margin:"0px",
                                            color: "#FFFFFF",
                                            fontWeight: "800",
                                            fontSize: "50px",
                                            lineHeight: "65px",
                                            letterSpacing: "0.02em",
                                            // textTransform: "uppercase",
                                            fontFamily: "'Nunito', sans-serif",
                                        }}>What Else To Know
                            </h1>
                                    </Col>
                                    <Col className="mb-4" xs={12}>
                                        <p style={{
                                            // border: "2px solid black",
                                            height: "auto",
                                            // margin: "5% 10% 1% 10%",
                                            color: "#ffffff",
                                            // fontWeight: "200",
                                            fontFamily: "'Nunito', sans-serif",
                                        }}>We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world. We provide one to one sessions for all types of doubt clarifications. We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world.
                                    DevikTech students are trained in such a way that they are always 3 years ahead of the students of their age. We at DevikTech provide a wide range of courses to empower students from different fields. We provide Live sessions by the industry experts and project which help our students in the real world. Best thing happen to you.</p>
                                        <Row>
                                            <ButtonStyle className="py-2" onClick={this.enroll} type="submit">
                                                Book A Demo
                                        </ButtonStyle>

                                            <ButtonStyle className="mx-1 py-2" onClick={this.enroll} type="submit">
                                                Know More
                                        </ButtonStyle>
                                        </Row>

                                    </Col>
                                </Zoom>




                            </Col>
                        </Row>
                    </Container>

                </div>

                {/* links */}


                <div style={{
                    // border:"2px solid red",
                    height: "auto",
                    backgroundColor: "#0E2A47",
                }}>
                    <Container fluid style={{
                        // border: "2px solid red",
                        height: "auto",
                        // backgroundColor: "#161C27",
                    }}>
                        <Row style={{
                            // border: "2px solid red",
                            height: "auto",
                            // backgroundColor: "#161C27",
                        }}>

                            <Col xs={12} xl={9} style={{
                                // border: "2px solid red",
                                height: "auto",
                                // backgroundColor: "#161C27",
                                color: "#ffffff",
                                fontFamily: "'Nunito', sans-serif",
                            }}>
                                <Row style={{
                                    // border: "2px solid green",
                                    height: "auto",
                                    // backgroundColor: "#161C27",
                                    color: "#ffffff",
                                    fontFamily: "'Nunito', sans-serif",
                                }}>
                                    <Col className="px-4 py-4" xs={12} xl={3} style={{
                                        // border: "2px solid red",
                                        // height: "20vh",
                                        // backgroundColor: "#161C27",
                                        color: "#ffffff",
                                    }}>
                                        <p style={{
                                            // border: "2px solid red",
                                            // margin:"0px",
                                            color: "#FFFFFF",
                                            // fontWeight: "800",
                                            fontSize: "30px",
                                            // lineHeight: "65px",
                                            // letterSpacing: "0.02em",
                                            // textTransform: "uppercase",
                                            fontFamily: "'Nunito', sans-serif",

                                        }}>Company</p>
                                        <div className="pt-2" style={{
                                            fontFamily: "'Nunito', sans-serif",
                                            listStyleType: "none",
                                        }}>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>Home</a></li>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>Courses</a></li>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>About Us</a></li>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>Contact Us</a></li>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>Private policy </a></li>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>Teams and Condition</a></li>
                                        </div>




                                    </Col>
                                    <Col className="px-4 py-4" xs={12} xl={3} style={{
                                        // border: "2px solid red",
                                        // height: "20vh",
                                        // backgroundColor: "#161C27",
                                        color: "#ffffff",
                                    }}>
                                        <p style={{
                                            // border: "2px solid red",
                                            // margin:"0px",
                                            color: "#FFFFFF",
                                            // fontWeight: "800",
                                            fontSize: "30px",
                                            // lineHeight: "65px",
                                            // letterSpacing: "0.02em",
                                            // textTransform: "uppercase",
                                            fontFamily: "'Nunito', sans-serif",

                                        }}>Work With Us</p>
                                        <div className="pt-2" style={{
                                            fontFamily: "'Nunito', sans-serif",
                                            listStyleType: "none",

                                        }}>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>Intership</a></li>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>Instructor</a></li>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>Marketing</a></li>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>Frontend Developer</a></li>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>Backend Developer</a></li>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>Content Development</a></li>
                                        </div>

                                    </Col>
                                    <Col className="px-4 py-4" xs={12} xl={3} style={{
                                        // border: "2px solid red",
                                        // height: "20vh",
                                        // backgroundColor: "#161C27",
                                        color: "#ffffff",
                                    }}>
                                        <p style={{
                                            // border: "2px solid red",
                                            // margin:"0px",
                                            color: "#FFFFFF",
                                            // fontWeight: "800",
                                            fontSize: "28px",
                                            // lineHeight: "65px",
                                            // letterSpacing: "0.02em",
                                            // textTransform: "uppercase",
                                            fontFamily: "'Nunito', sans-serif",

                                        }}>College Program</p>
                                        <div className="pt-2" style={{
                                            fontFamily: "'Nunito', sans-serif",
                                            listStyleType: "none",

                                        }}>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>C++</a></li>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>Python</a></li>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>Core Java</a></li>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>MERN Stack</a></li>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>DSA</a></li>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>Machine Learning</a></li>
                                        </div>

                                    </Col>
                                    <Col className="px-4 py-4" xs={12} xl={3} style={{
                                        // border: "2px solid red",
                                        // height: "20vh",
                                        // backgroundColor: "#161C27",
                                        color: "#ffffff",
                                    }}>
                                        <p style={{
                                            // border: "2px solid red",
                                            // margin:"0px",
                                            color: "#FFFFFF",
                                            // fontWeight: "800",
                                            fontSize: "28px",
                                            // lineHeight: "65px",
                                            // letterSpacing: "0.02em",
                                            // textTransform: "uppercase",
                                            fontFamily: "'Nunito', sans-serif",

                                        }}>School Program</p>
                                        <div className="pt-2" style={{
                                            fontFamily: "'Nunito', sans-serif",
                                            listStyleType: "none",

                                        }}>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>MIT APP</a></li>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>Scratch</a></li>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>Python</a></li>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>Game Development</a></li>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>Frontend Development</a></li>
                                            <li><a href="#index" style={{ color: "#ffffff", textDecoration: "none" }}>Backend Development</a></li>
                                        </div>

                                    </Col>

                                </Row>
                                {/* <Row style={{
                                border: "2px solid green",
                                height: "auto",
                                // backgroundColor: "#161C27",
                                color: "#ffffff",
                                fontFamily: "'Nunito', sans-serif",
                            }}>
                                <p>To Get Latest Information Subscribe</p>
                                <div>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Email Address"
                                            aria-label="Email Address"
                                            aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Append>
                                            <Button variant="outline-secondary">Subscribe</Button>
                                        </InputGroup.Append>
                                    </InputGroup>


                                </div>


                            </Row> */}
                            </Col>

                            <Col className="px-4 py-4" xs={12} xl={3} style={{
                                // border: "2px solid red",
                                height: "auto",
                                // backgroundColor: "#161C27",
                                color: "#ffffff",
                                fontFamily: "'Nunito', sans-serif",
                            }}>
                                <p style={{
                                    // border: "2px solid red",
                                    // margin:"0px",
                                    color: "#FFFFFF",
                                    // fontWeight: "800",
                                    fontSize: "30px",
                                    // lineHeight: "65px",
                                    // letterSpacing: "0.02em",
                                    // textTransform: "uppercase",
                                    fontFamily: "'Nunito', sans-serif",

                                }}>Contact Us</p>
                                {/* <p>A perfect platform to become the next creator of Programming world.</p> */}
                                <p style={{
                                    // border: "2px solid red",
                                    // margin:"0px",
                                    color: "#FFFFFF",
                                    // fontWeight: "800",
                                    fontSize: "15px",
                                    // lineHeight: "65px",
                                    // letterSpacing: "0.02em",
                                    // textTransform: "uppercase",
                                    fontFamily: "'Nunito', sans-serif",

                                }}><FontAwesomeIcon className="mr-2" icon={faEnvelope} color="#ffffff" />info@deviktech.com</p>
                                <p style={{
                                    // border: "2px solid red",
                                    // margin:"0px",
                                    color: "#FFFFFF",
                                    // fontWeight: "800",
                                    fontSize: "15px",
                                    // lineHeight: "65px",
                                    // letterSpacing: "0.02em",
                                    // textTransform: "uppercase",
                                    fontFamily: "'Nunito', sans-serif",

                                }}><FontAwesomeIcon className="mr-2" icon={faPhoneAlt} color="#ffffff" />8618234817 Or 7439474237</p>
                                <p>Follow Us</p>
                                <a className="mr-3" href="https://www.facebook.com/deviktech/"><FontAwesomeIcon icon={faFacebook} color="#268CAF" size="2x" style={{
                                    // border:"2px solid #374F81",
                                }} /></a>
                                <a className="mr-3" href="https://www.instagram.com/deviktech_education"><FontAwesomeIcon icon={faInstagram} color="#C20099" size="2x" style={{
                                    // border:"2px solid #C20099",
                                }} /></a>
                                <a className="mr-3" href="https://twitter.com/deviktech?s=08"><FontAwesomeIcon icon={faTwitter} color="#268CAF" size="2x" style={{
                                    // border:"2px solid #ffffff",
                                }} /></a>
                                <a className="mr-3" href="https://www.linkedin.com/company/deviktech-education-services"><FontAwesomeIcon icon={faLinkedin} color="#08699C" size="2x" /></a>
                                <a className="mr-3" href="index.html"><FontAwesomeIcon icon={faYoutube} color="#B12428" size="2x" /></a>
                            </Col>
                        </Row>

                    </Container>

                </div>


                {/* copyright */}

                <div style={{
                    // border:"2px solid red",
                    height: "auto",
                    backgroundColor: "#08192B",
                    color: "#ffffff",
                    textAlign: "center",
                }}>
                    <div className="px-4 py-2">
                        Copyright © 2020 DevikTech Education LLP India, All rights reserved. | <a href="index.html">DevikTech</a>
                    </div>

                </div>
            </div>
        )
    }
}
export default NewFooter