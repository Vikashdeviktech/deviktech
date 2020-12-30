import React from 'react';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap'
import WelcomeVector from "../../images/WelcomeVector.png"
import { faCheckCircle, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Welcome extends React.Component {
    render() {
        return (
            <div>
                <Container className="my-4 py-4" style={{
                    // border: "2px solid red",
                }}>
                    <Row className="mx-1" style={{
                        border: "2px solid #aaa",
                        borderRadius:"10px",
                    }}>
                        <Col xl={5} style={{
                            // border: "2px solid red",
                        }}>
                            <Image className="px-4 py-4" src={WelcomeVector} fluid style={{ 
                                // textAlign: "center", 
                                // border:"2px solid red",
                                }} />
                        </Col>
                        <Col xl={7} className="py-4" style={{
                            // border: "2px solid red",
                            fontFamily: "'Nunito', sans-serif",
                        }}>
                            <h2 style={{
                                fontWeight:"bold",
                                // fontSize:"40px",
                            }}> Congratulations! <FontAwesomeIcon icon={faCheckCircle} color="#57B894" /> </h2>
                            <h5 style={{color:"#aaa"}}>Free trail class is comfirmed. </h5>
                            {/* <p style={{
                            fontFamily: "'Nunito', sans-serif",
                        }}>We are happy to that you book a demo.</p> */}
                            <p style={{
                            fontFamily: "'Nunito', sans-serif",
                        }}>Our Counselor will call you on your registered mobile <strong>#</strong> within the next 24 hours to finalize the schedule for your child’s free class based on your availability.</p>
                            <hr></hr>
                            <h5 style={{color:"#"}}><strong>We are excited to see you in the demo class.</strong></h5>
                            <h6 className="my-2">HELPLINE</h6>
                            <Badge variant="light" className="my-2" style={{
                                border: "2px solid #aaa",
                                boxShadow: "2px 2px 5px 0px #aaa",
                                fontSize: "16px",
                            }}>
                                <FontAwesomeIcon icon={faPhoneAlt} /> +91 9871 888 205
                                {/* <a href="#" className="px-1"> Read Review</a> */}
                            </Badge>
                            <Badge variant="light" className="ml-1 my-2" style={{
                                border: "2px solid #aaa",
                                boxShadow: "2px 2px 5px 0px #aaa",
                                fontSize: "16px",
                            }}>
                                <FontAwesomeIcon icon={faEnvelope} /> deviktech@tech.in
                                {/* <a href="#" className="px-1"> Read Review</a> */}
                            </Badge>
                            <p className="my-2" style={{
                            fontFamily: "'Nunito', sans-serif",
                        }}>For any inquery as as ads within the next 24 hours to finalize the schedule for your child’s free class based on your availability. We provide Live sessions by the industry experts.</p>
                        </Col>
                    </Row>

                </Container>

            </div>
        )
    }
}

export default Welcome;