import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import About from "../../images/About.png"
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import { Fade, Zoom } from 'react-reveal';
import CollegeInternship from "../../images/CollegeInternship.png"
import RealTimeProject from "../../images/RealTimeProject.png"
import JobAssistance from "../../images/JobAssistance.png"
import SchoolSupport from "../../images/SchoolSupport.png"
import SchoolCurriculum from "../../images/SchoolCurriculum.png"
import Certification from "../../images/Certification.png"
import CertificationIcon from "../../images/CertificationIcon.png"
import CurriculumIcon from "../../images/CurriculumIcon.png"
import RealLifeIcon from "../../images/RealLifeIcon.png"
import InternshipIcon from "../../images/InternshipIcon.png"
import Icon1 from "../../images/24x7Icon.png"



class HomeWhyUs extends React.Component {
    render() {

        return (
            <div style={{
                // border:"2px solid red",
                // backgroundColor:"#f2ffff",
                color: "#08192B",
                fontFamily: "'Nunito', sans-serif",
            }} >
                <Zoom>
                    <Container className="my-4 py-4">
                        <h3 className="my-4" style={{
                            textAlign: "center",
                            fontSize: "40px",
                            fontWeight: "bolder",
                            fontFamily: "'Nunito', sans-serif",
                        }}>Why Students Choose Us</h3>
                    </Container>
                </Zoom>

                <Container>
                    <Row className="text-center">
                        <Col xl={4}>
                            <Image className="text-center px-4 py-4" src={Icon1} height="150" width="150" style={{
                                // border: "2px solid red",
                                // borderRadius:"20px",
                            }} />
                            <p style={{
                                fontSize: "35px",
                                fontWeight: "800",
                            }}>24x7 Expert Support</p>
                            <p style={{
                                fontSize: "15px",
                                fontWeight: "800",
                            }}>Our expert team is here to help you with your all kinds of problem. Whether it is 2 o'clock in the morning or 11 o'clock in night, our team is standing by your side to clear all your doubts (online).</p>
                        </Col>

                        <Col xl={4}>
                            <Image className="text-center px-4 py-4" src={CurriculumIcon} height="150" width="150" style={{
                                // border: "2px solid red",
                                // borderRadius:"20px",
                            }} />
                            <p style={{
                                fontSize: "35px",
                                fontWeight: "800",
                            }}>Curriculum By Expert</p>
                            <p style={{
                                fontSize: "15px",
                                fontWeight: "800",
                            }}>Learning can't exist without a curriculum and here, we are providing this process by our experts. With our experts you can be trained in such a manner that can fulfill the demand of HI-TECH industries.</p>
                        </Col>


                        <Col xl={4}>
                            <Image className="text-center px-4 py-4" src={RealLifeIcon} height="150" width="150" style={{
                                // border: "2px solid red",
                                // borderRadius:"20px",
                            }} />
                            <p style={{
                                fontSize: "35px",
                                fontWeight: "800",
                            }}>Real-Life Project</p>
                            <p style={{
                                fontSize: "15px",
                                fontWeight: "800",
                            }}>We provide a platform to work on Real Life Projects. Real Life is a project that aims to give students and faculty the chance to talk together about how to connect all the parts of our lives in a meaningful way.</p>
                        </Col>


                        <Col xl={4}>
                            <Image className="text-center px-4 py-4" src={CertificationIcon} height="150" width="170" style={{
                                // border: "2px solid red",
                                // borderRadius:"20px",
                            }} />
                            <p style={{
                                fontSize: "35px",
                                fontWeight: "800",
                            }}>Certification</p>
                            <p style={{
                                fontSize: "15px",
                                fontWeight: "800",
                            }}>The certificate is important to boost your resume. Certification can help you to get your foot into a new door as a turning point of your career</p>
                        </Col>



                        <Col xl={4}>
                            <Image className="text-center px-4 py-4" src={InternshipIcon} height="150" width="150" style={{
                                // border: "2px solid red",
                                // borderRadius:"20px",
                            }} />
                            <p style={{
                                fontSize: "35px",
                                fontWeight: "800",
                            }}>Internship</p>
                            <p style={{
                                fontSize: "15px",
                                fontWeight: "800",
                            }}>We are providing internship for students. You will gain a little experience of the professional world as internship.</p>
                        </Col>



                        <Col xl={4}>
                            <Image className="text-center px-4 py-4" src={JobAssistance} height="150" width="150" style={{
                                // border: "2px solid red",
                                // borderRadius:"20px",
                            }} />
                            <p style={{
                                fontSize: "35px",
                                fontWeight: "800",
                            }}>Job Assistance</p>
                            <p style={{
                                fontSize: "15px",
                                fontWeight: "800",
                            }}>We'll train you in a way that helps you in your job as a fresher.
                                We'll provide job assistance to our best intern, as per their best appropriate position at work.</p>
                        </Col>
                    </Row>
                </Container>








            </div>


        )
    }
}
export default HomeWhyUs;