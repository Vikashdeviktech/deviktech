import React from 'react'
import collegeImage from "../../images/collegeImage.png"
import { Container, Tab, Tabs, TabContainer, Nav, Row, Col, Image, Card, Button } from 'react-bootstrap'
import { Zoom } from 'react-reveal';
import GirlOnMainArea from "../../images/PythonSchool.png"
import { faSmile, faCalendar, faClock, faTag, faBook, faRupeeSign, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const ButtonStyle = styled.button`
background-color: #076FEC;
color: #fff;
padding: 0.5rem 2rem;
border: 2px solid #076FEC;
border-radius: 5px;
font-family: 'Nunito', sans-serif;
font-weight: 500;

:focus{
    outline:none;
}

:hover, :active {
    border: 2px solid #076FEC;
    background-color: #fff;
    color: #076FEC;
    font-family: 'Nunito', sans-serif;
}
`;

const ButtonStyle1 = styled.button`
background-color: #fff;
color: #076FEC;
padding: 0.5rem 2rem;
border: 2px solid #076FEC;
border-radius: 5px;
font-family: 'Nunito', sans-serif;
font-weight: 500;

:focus{
    outline:none;
}

:hover, :active {
    background-color: #076FEC;
    border: 2px solid #076FEC;
    color: #fff;
    font-family: 'Nunito', sans-serif;
}
`;

class SchoolPrice extends React.Component {
    render() {

        return (
            <div className="py-4" style={{
                backgroundColor: "#ECF7FC",
            }}>
                <Container style={{
                    height: "auto",
                }}>
                    <Row style={{
                        // border: "2px solid red",
                        height: "auto",
                    }}>
                        <Col xs={12} xl={4}>
                            <Card className="my-2 text-left" style={{
                                border: "2px solid #aaa",
                                borderRadius:"10px",
                            }}>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Title style={{
                                                fontFamily: "'Nunito', sans-serif",
                                                fontWeight: "800",
                                                fontSize: "40px",
                                                color: "#494949",
                                            }}>Beginner</Card.Title>
                                        </Col>
                                        <Col >
                                            <Card.Title className="pt-4 text-right" style={{
                                                // border:"2px solid red",
                                                fontFamily: "'Nunito', sans-serif",
                                                fontWeight: "800",
                                                fontSize: "14px",
                                                color: "#494949",
                                            }}><FontAwesomeIcon icon={faBook} /> 18 Classes</Card.Title>
                                        </Col>
                                    </Row>

                                    <Card.Text className="py-2" style={{
                                        fontFamily: "'Nunito', sans-serif",
                                        fontWeight: "800",
                                        fontSize: "20px",
                                        color: "#494949",
                                    }}>
                                        Included In The Plan <br></br>Game Development.
                                    </Card.Text>

                                    <hr></hr>
                                    <Card.Text style={{
                                        // border: "2px solid red",
                                        listStyleType: "none",
                                        // color:"#aaa",
                                        fontFamily: "'Nunito', sans-serif",
                                        fontWeight: "800",
                                        color: "#494949",
                                    }}>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#494949" /> Unlimited Course Access</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#494949" /> 20 Video Course Access</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#494949" /> Online Examination</li>
                                        <li><FontAwesomeIcon icon={faTimesCircle} color="#494949" /> No Cretifications</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#494949" /> Free Teacher Consulting</li>
                                        <li><FontAwesomeIcon icon={faTimesCircle} color="#494949" /> Automatic Cloud Backups</li>
                                    </Card.Text>
                                    <Card.Text style={{
                                        fontFamily: "'Nunito', sans-serif",
                                        fontWeight: "800",
                                        fontSize: "20px",
                                        color: "#494949",
                                    }}>
                                        Bonus Features
                                    </Card.Text>
                                    <Card.Text style={{
                                        // border: "2px solid red",
                                        listStyleType: "none",
                                        // color:"#aaa",
                                        fontFamily: "'Nunito', sans-serif",
                                        fontWeight: "800",
                                        color: "#494949",
                                    }}>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#494949" /> Unlimited Course Access</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#494949" /> 20 Video Course Access</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#494949" /> Online Examination</li>
                                        <li><FontAwesomeIcon icon={faTimesCircle} color="#494949" /> No Cretifications</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#494949" /> Free Teacher Consulting</li>
                                        <li><FontAwesomeIcon icon={faTimesCircle} color="#494949" /> Automatic Cloud Backups</li>
                                    </Card.Text>
                                    <Row style={{
                                        fontFamily: "'Nunito', sans-serif",
                                    }}>
                                        <Col  xs={4} xl={4} style={{
                                            fontSize: "20px",
                                        }}>
                                            <strong>₹7999</strong>
                                        </Col>
                                        <Col className="pt-1 text-left" xs={4} xl={4} style={{
                                            // border: "2px solid red"
                                        }}>
                                            <strike>₹9999</strike>
                                        </Col>
                                        <Col className="pt-1 text-right" xs={4} xl={4} style={{
                                            // border: "2px solid red",
                                            color: "#494949",
                                            // fontSize: "10px",
                                        }}>
                                            18% off <FontAwesomeIcon icon={faTag} color="#494949" />
                                        </Col>
                                    </Row>
                                    <hr></hr>
                                    <Row className="text-center">
                                        <Col className="py-2" xl={12}>
                                            <ButtonStyle1>Get Detailed Curriculum</ButtonStyle1>
                                        </Col>
                                        <Col className="py-2" xl={12}>
                                            <ButtonStyle>Book a Free Demo Now</ButtonStyle> 
                                        </Col>
                                    </Row>
                                </Card.Body>





                            </Card>
                        </Col>


                        <Col xs={12} xl={4}>
                            <Card className="my-2 text-left" style={{
                                border: "2px solid #07B5EC",
                                borderRadius:"10px",
                            }}>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Title style={{
                                                fontFamily: "'Nunito', sans-serif",
                                                fontWeight: "800",
                                                fontSize: "40px",
                                                color: "#494949",
                                            }}>Advanced</Card.Title>
                                        </Col>
                                        <Col >
                                            <Card.Title className="pt-4 text-right" style={{
                                                // border:"2px solid red",
                                                fontFamily: "'Nunito', sans-serif",
                                                fontWeight: "800",
                                                fontSize: "14px",
                                                color: "#07B5EC",
                                            }}><FontAwesomeIcon icon={faBook} /> 72 Classes</Card.Title>
                                        </Col>
                                    </Row>

                                    <Card.Text className="py-2" style={{
                                        fontFamily: "'Nunito', sans-serif",
                                        fontWeight: "800",
                                        fontSize: "20px",
                                        color: "#494949",
                                    }}>
                                        Included In The Plan <br></br>Game Development And AI.
                                    </Card.Text>

                                    <hr></hr>
                                    <Card.Text style={{
                                        // border: "2px solid red",
                                        listStyleType: "none",
                                        // color:"#aaa",
                                        fontFamily: "'Nunito', sans-serif",
                                        fontWeight: "800",
                                        color: "#494949",
                                    }}>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#07B5EC" /> Unlimited Course Access</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#07B5EC" /> 20 Video Course Access</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#07B5EC" /> Online Examination</li>
                                        <li><FontAwesomeIcon icon={faTimesCircle} color="#07B5EC" /> No Cretifications</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#07B5EC" /> Free Teacher Consulting</li>
                                        <li><FontAwesomeIcon icon={faTimesCircle} color="#07B5EC" /> Automatic Cloud Backups</li>
                                    </Card.Text>
                                    <Card.Text style={{
                                        fontFamily: "'Nunito', sans-serif",
                                        fontWeight: "800",
                                        fontSize: "20px",
                                        color: "#494949",
                                    }}>
                                        Bonus Features
                                    </Card.Text>
                                    <Card.Text style={{
                                        // border: "2px solid red",
                                        listStyleType: "none",
                                        // color:"#aaa",
                                        fontFamily: "'Nunito', sans-serif",
                                        fontWeight: "800",
                                        color: "#494949",
                                    }}>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#07B5EC" /> Unlimited Course Access</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#07B5EC" /> 20 Video Course Access</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#07B5EC" /> Online Examination</li>
                                        <li><FontAwesomeIcon icon={faTimesCircle} color="#07B5EC" /> No Cretifications</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#07B5EC" /> Free Teacher Consulting</li>
                                        <li><FontAwesomeIcon icon={faTimesCircle} color="#07B5EC" /> Automatic Cloud Backups</li>
                                    </Card.Text>
                                    <Row style={{
                                        fontFamily: "'Nunito', sans-serif",
                                    }}>
                                        <Col  xs={4} xl={4} style={{
                                            fontSize: "20px",
                                        }}>
                                            <strong>₹9999</strong>
                                        </Col>
                                        <Col className="pt-1 text-left" xs={4} xl={4} style={{
                                            // border: "2px solid red"
                                        }}>
                                            <strike>₹15999</strike>
                                        </Col>
                                        <Col className="pt-1 text-right" xs={4} xl={4} style={{
                                            // border: "2px solid red",
                                            color: "#07B5EC",
                                            // fontSize: "10px",
                                        }}>
                                            28% off <FontAwesomeIcon icon={faTag} color="#07B5EC" />
                                        </Col>
                                    </Row>
                                    <hr></hr>
                                    <Row className="text-center">
                                        <Col className="py-2" xl={12}>
                                            <ButtonStyle1>Get Detailed Curriculum</ButtonStyle1>
                                        </Col>
                                        <Col className="py-2" xl={12}>
                                            <ButtonStyle>Book a Free Demo Now</ButtonStyle> 
                                        </Col>
                                    </Row>
                                </Card.Body>





                            </Card>
                        </Col>


                        <Col xs={12} xl={4}>
                            <Card className="my-2 text-left" style={{
                                border: "2px solid #FFA049",
                                borderRadius:"10px",
                            }}>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Title style={{
                                                fontFamily: "'Nunito', sans-serif",
                                                fontWeight: "800",
                                                fontSize: "40px",
                                                color: "#494949",
                                            }}>Mastery</Card.Title>
                                        </Col>
                                        <Col >
                                            <Card.Title className="pt-4 text-right" style={{
                                                // border:"2px solid red",
                                                fontFamily: "'Nunito', sans-serif",
                                                fontWeight: "800",
                                                fontSize: "14px",
                                                color: "#FFA049",
                                            }}><FontAwesomeIcon icon={faBook} /> 142 Classes</Card.Title>
                                        </Col>
                                    </Row>

                                    <Card.Text className="py-2" style={{
                                        fontFamily: "'Nunito', sans-serif",
                                        fontWeight: "800",
                                        fontSize: "20px",
                                        color: "#494949",
                                    }}>
                                        Included In The Plan Game Development, AI And VR Coding.
                                    </Card.Text>

                                    <hr></hr>
                                    <Card.Text style={{
                                        // border: "2px solid red",
                                        listStyleType: "none",
                                        // color:"#aaa",
                                        fontFamily: "'Nunito', sans-serif",
                                        fontWeight: "800",
                                        color: "#494949",
                                    }}>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#FFA049" /> Unlimited Course Access</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#FFA049" /> 20 Video Course Access</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#FFA049" /> Online Examination</li>
                                        <li><FontAwesomeIcon icon={faTimesCircle} color="#FFA049" /> No Cretifications</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#FFA049" /> Free Teacher Consulting</li>
                                        <li><FontAwesomeIcon icon={faTimesCircle} color="#FFA049" /> Automatic Cloud Backups</li>
                                    </Card.Text>
                                    <Card.Text style={{
                                        fontFamily: "'Nunito', sans-serif",
                                        fontWeight: "800",
                                        fontSize: "20px",
                                        color: "#494949",
                                    }}>
                                        Bonus Features
                                    </Card.Text>
                                    <Card.Text style={{
                                        // border: "2px solid red",
                                        listStyleType: "none",
                                        // color:"#aaa",
                                        fontFamily: "'Nunito', sans-serif",
                                        fontWeight: "800",
                                        color: "#494949",
                                    }}>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#FFA049" /> Unlimited Course Access</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#FFA049" /> 20 Video Course Access</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#FFA049" /> Online Examination</li>
                                        <li><FontAwesomeIcon icon={faTimesCircle} color="#FFA049" /> No Cretifications</li>
                                        <li><FontAwesomeIcon icon={faCheckCircle} color="#FFA049" /> Free Teacher Consulting</li>
                                        <li><FontAwesomeIcon icon={faTimesCircle} color="#FFA049" /> Automatic Cloud Backups</li>
                                    </Card.Text>
                                    <Row style={{
                                        fontFamily: "'Nunito', sans-serif",
                                    }}>
                                        <Col  xs={4} xl={4} style={{
                                            fontSize: "20px",
                                        }}>
                                            <strong>₹17999</strong>
                                        </Col>
                                        <Col className="pt-1 text-left" xs={4} xl={4} style={{
                                            // border: "2px solid red"
                                        }}>
                                            <strike>₹19999</strike>
                                        </Col>
                                        <Col className="pt-1 text-right" xs={4} xl={4} style={{
                                            // border: "2px solid red",
                                            color: "#FFA049",
                                            // fontSize: "10px",
                                        }}>
                                            38% off <FontAwesomeIcon icon={faTag} color="#FFA049" />
                                        </Col>
                                    </Row>
                                    <hr></hr>
                                    <Row className="text-center">
                                        <Col className="py-2" xl={12}>
                                            <ButtonStyle1>Get Detailed Curriculum</ButtonStyle1>
                                        </Col>
                                        <Col className="py-2" xl={12}>
                                            <ButtonStyle>Book a Free Demo Now</ButtonStyle> 
                                        </Col>
                                    </Row>
                                </Card.Body>





                            </Card>
                        </Col>

                    </Row>

                </Container>


            </div >
        );
    }
}


export default SchoolPrice;