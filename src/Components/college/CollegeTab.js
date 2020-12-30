import React from 'react'
import collegeImage from "../../images/collegeImage.png"
import { Container, Tab, Nav, Row, Col, Image, Card, Button } from 'react-bootstrap'
import { Zoom } from 'react-reveal';
import GirlOnMainArea from "../../images/GirlOnMainArea.png"
import C from "../../images/C.png"
import Cplus from "../../images/C++wbg.png"
import java from "../../images/java_wbg.png"
import ScratchLogo from "../../images/ScratchLogo.png"
import MitLogo from "../../images/MitLogo.png"
import UnityLogo from "../../images/UnityLogo.png"
import EthicalHacking from "../../images/EthicalHacking.png"
import MERNLogo from "../../images/MERNLogo.png"
import MachineLogo from "../../images/MachineLogo.png"
import AnimationLogo from "../../images/AnimationLogo.png"
import javascript from "../../images/javascript_wbg.png"
import AppLogo from "../../images/AppLogo.png"
import python from "../../images/python_wbg.png"
import node from "../../images/node_wbg.png"
import mongo from "../../images/mongo_wbg.png"
import DataLogo from "../../images/DataLogo.png"

import { faSmile, faCalendar, faClock, faTag, faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const ButtonStyle = styled.button`
background-color: #0F2B48;
color: #fff;
padding: 0.5rem 2rem;
border: 2px solid #0F2B48;
// border-radius: 5px;
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

const ButtonStyle1 = styled.a`
background-color: #fff;
color: #0F2B48;
border: none;
text-decoration: none;
// border: 2px solid #0F2B48;
padding: 0.5rem 2rem;
// border-radius: 5px;
font-family: 'Nunito', sans-serif;

:focus{
    outline:none;
}

:hover, :active {
    // background-color: #0F2B48;
    // border: 2px solid #0F2B48;
    font-family: 'Nunito', sans-serif;
}
`;


class CollegeTab extends React.Component {
    render() {

        return (
            <div>
                <Container className="py-4" style={{
                    height: "auto",
                    fontFamily: "'Nunito', sans-serif",
                }}>
                    <Row >
                        <Col xl={12}>
                            <p style={{
                                // borderLeft: "10px solid #0F2B48",
                                // border: "2px solid #0F2B48",
                                color: "#08192B",
                                fontWeight: "800",
                                fontSize: "30px",
                                lineHeight: "65px",
                                letterSpacing: "0.02em",
                                fontFamily: "'Nunito', sans-serif",
                                width: "100%",
                                textAlign: "center",
                            }}>
                                Explore Courses Options</p>
                        </Col>
                        <Col xl={12} >
                            <p className="px-4" style={{
                                // border: "2px solid #0F2B48",
                                color: "#08192B",
                                fontWeight: "500",
                                fontSize: "15px",
                                // lineHeight: "65px",
                                // letterSpacing: "0.02em",
                                fontFamily: "'Nunito', sans-serif",
                                // width: "50%",
                                textAlign: "center",
                            }}>
                                We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world. We provide one to one sessions for all types of doubt clarifications.
                            </p>
                        </Col>


                    </Row>

                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row >
                            <Col sm={12}>
                                <Nav variant="pills" className="flex-column" style={{
                                    // border:"2px solid red",
                                }}>
                                    <Row className="pt-4">
                                        <Col xl={3}>
                                            <Nav.Link className="d-none" eventKey="none"></Nav.Link>
                                        </Col>
                                        <Col xs={4} xl={2} style={{
                                            padding: "0px",
                                            margin: "0px",

                                        }}>
                                            <Nav.Link eventKey="first" style={{
                                                textAlign: "center",
                                                border: "2px solid #0F2B48",
                                                backgroundColor: "#fff",
                                                color: "#0F2B48",
                                                fontSize: "14px",
                                                fontWeight: "800",
                                            }}>FOUNDATION COURSE</Nav.Link>
                                        </Col>
                                        <Col xs={4} xl={2} style={{
                                            padding: "0px",
                                            margin: "0px",
                                        }}>
                                            <Nav.Link className="py-2" eventKey="second" style={{
                                                textAlign: "center",
                                                border: "2px solid #0F2B48",
                                                backgroundColor: "#fff",
                                                color: "#0F2B48",
                                                fontSize: "14px",
                                                fontWeight: "800",
                                                padding: "0px",
                                            }}>DEVELOPMENT COURSE</Nav.Link>
                                        </Col>
                                        <Col xs={4} xl={2} style={{
                                            padding: "0px",
                                            margin: "0px",
                                        }}>
                                            <Nav.Link eventKey="third" style={{
                                                textAlign: "center",
                                                border: "2px solid #0F2B48",
                                                backgroundColor: "#fff",
                                                color: "#0F2B48",
                                                fontSize: "14px",
                                                fontWeight: "800",
                                            }}>ADVANCE COURSE</Nav.Link>
                                        </Col>
                                        <Col xl={3} className="d-none">
                                        </Col>
                                    </Row>


                                </Nav>
                            </Col>


                            <Col sm={12} >
                                <Tab.Content className="text-left">
                                    <Tab.Pane eventKey="first">



                                        <Row >
                                            <Col xs={12} xl={4}>
                                                <Card className="my-2" style={{ width: 'auto', border: "2px solid #0F2B48" }}>
                                                    <Image className="px-4 py-4" src={Cplus} fluid height="auto" width="auto" style={{
                                                        // border: "2px solid red",
                                                    }} />
                                                    <Card.Body>
                                                        <Card.Title style={{
                                                            // border: "2px solid red",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight: "800",
                                                            fontSize: "20px",
                                                        }}>C++ Programming Language</Card.Title>
                                                        <Row className="my-2" style={{
                                                            // border: "2px solid red",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight: "800",
                                                            fontSize: "15px",
                                                            // color: "#aaa",
                                                        }}>
                                                            <Col xs={12} xl={12} style={{
                                                                // border: "2px solid red",
                                                            }}>
                                                                Lectures 24
                                                            </Col>
                                                            {/* <Col className="text-right pr-4" xs={6} xl={6} style={{
                                                                border: "2px solid red"
                                                            }}>
                                                                Lectures 8-48
                                                        </Col> */}
                                                        </Row>

                                                        <Card.Text className="py-2" style={{
                                                            // border: "2px solid red",
                                                            listStyleType: "none",
                                                            // color:"#aaa",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight:"800",
                                                        }}>
                                                            <li><FontAwesomeIcon icon={faClock} color="#0F2B48" size="1x" /> <strong>60 min</strong> of Classes</li>
                                                            <li><FontAwesomeIcon icon={faSmile} color="#0F2B48" size="1x" />Limited Student In One Batch</li>
                                                            <li><FontAwesomeIcon icon={faCalendar} color="#0F2B48" size="1x" /> Flexible Days And Time</li>
                                                        </Card.Text>
                                                        <Row style={{
                                                            fontFamily: "'Nunito', sans-serif",
                                                        }}>
                                                            <Col xs={7} xl={7} style={{
                                                                // border: "2px solid red"
                                                                fontSize:"20px",
                                                            }}>
                                                                <strong>₹5999/-</strong>
                                                            </Col>
                                                            <Col className="text-right" xs={5} xl={5} style={{
                                                                // border: "2px solid red",
                                                                color: "#019977",
                                                                fontSize:"20px",
                                                            }}>
                                                                18% off <FontAwesomeIcon icon={faTag} color="#019977" size="1x" />
                                                            </Col>
                                                        </Row>

                                                    </Card.Body>
                                                    <ButtonStyle1 className="text-center" href="https://drive.google.com/uc?export=download&id=15xJreUbcYNJU5UhxOL9PEwx4H5DF6DZY">
                                                        <FontAwesomeIcon icon={faDownload} color="#0F2B48" size="1x" /> Download Curriculum
                                                    </ButtonStyle1>
                                                    <ButtonStyle>
                                                        Book A Demo
                                                    </ButtonStyle>
                                                    {/* <Button variant="primary"></Button> */}
                                                    {/* <Card.Footer className="text-center">
                                                        <Button variant="primary">Learn More</Button>
                                                    </Card.Footer> */}
                                                </Card>
                                            </Col>

                                            <Col xs={12} xl={4}>
                                            <Card className="my-2" style={{ width: 'auto', border: "2px solid #0F2B48" }}>
                                                    <Image className="px-4 py-4" src={java} fluid height="auto" width="auto" style={{
                                                        // border: "2px solid red",
                                                    }} />
                                                    <Card.Body>
                                                        <Card.Title style={{
                                                            // border: "2px solid red",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight: "800",
                                                            fontSize: "20px",
                                                        }}>Java Programming Language</Card.Title>
                                                        <Row className="my-2" style={{
                                                            // border: "2px solid red",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight: "800",
                                                            fontSize: "15px",
                                                            // color: "#aaa",
                                                        }}>
                                                            <Col xs={12} xl={12} style={{
                                                                // border: "2px solid red",
                                                            }}>
                                                                Lectures 24
                                                            </Col>
                                                            {/* <Col className="text-right pr-4" xs={6} xl={6} style={{
                                                                border: "2px solid red"
                                                            }}>
                                                                Lectures 8-48
                                                        </Col> */}
                                                        </Row>

                                                        <Card.Text className="py-2" style={{
                                                            // border: "2px solid red",
                                                            listStyleType: "none",
                                                            // color:"#aaa",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight:"800",
                                                        }}>
                                                            <li><FontAwesomeIcon icon={faClock} color="#0F2B48" size="1x" /> <strong>60 min</strong> of Classes</li>
                                                            <li><FontAwesomeIcon icon={faSmile} color="#0F2B48" size="1x" /> Limited Student In One Batch</li>
                                                            <li><FontAwesomeIcon icon={faCalendar} color="#0F2B48" size="1x" /> Flexible Days And Time</li>
                                                        </Card.Text>
                                                        <Row style={{
                                                            fontFamily: "'Nunito', sans-serif",
                                                        }}>
                                                            <Col xs={7} xl={7} style={{
                                                                // border: "2px solid red"
                                                                fontSize:"20px",
                                                            }}>
                                                                <strong>₹5999/-</strong>
                                                            </Col>
                                                            <Col className="text-right" xs={5} xl={5} style={{
                                                                // border: "2px solid red",
                                                                color: "#019977",
                                                                fontSize:"20px",
                                                            }}>
                                                                18% off <FontAwesomeIcon icon={faTag} color="#019977" size="1x" />
                                                            </Col>
                                                        </Row>

                                                    </Card.Body>
                                                    <ButtonStyle1 className="text-center" href="https://drive.google.com/uc?export=download&id=1eRFGf2GYM-Ci_V0Yu7MJobx6rXZTBlOn">
                                                        <FontAwesomeIcon icon={faDownload} color="#0F2B48" size="1x" /> Download Curriculum
                                                    </ButtonStyle1>
                                                    <ButtonStyle>
                                                        Book A Demo
                                                    </ButtonStyle>
                                                    {/* <Button variant="primary"></Button> */}
                                                    {/* <Card.Footer className="text-center">
                                                        <Button variant="primary">Learn More</Button>
                                                    </Card.Footer> */}
                                                </Card>
                                            </Col>

                                            <Col xs={12} xl={4}>
                                            <Card className="my-2" style={{ width: 'auto', border: "2px solid #0F2B48" }}>
                                                    <Image className="px-4 py-4" src={python} fluid height="auto" width="auto" style={{
                                                        // border: "2px solid red",
                                                    }} />
                                                    <Card.Body>
                                                        <Card.Title style={{
                                                            // border: "2px solid red",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight: "800",
                                                            fontSize: "20px",
                                                        }}>Python Programming Language</Card.Title>
                                                        <Row className="my-2" style={{
                                                            // border: "2px solid red",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight: "800",
                                                            fontSize: "15px",
                                                            // color: "#aaa",
                                                        }}>
                                                            <Col xs={12} xl={12} style={{
                                                                // border: "2px solid red",
                                                            }}>
                                                                Lectures 24
                                                            </Col>
                                                            {/* <Col className="text-right pr-4" xs={6} xl={6} style={{
                                                                border: "2px solid red"
                                                            }}>
                                                                Lectures 8-48
                                                        </Col> */}
                                                        </Row>

                                                        <Card.Text className="py-2" style={{
                                                            // border: "2px solid red",
                                                            listStyleType: "none",
                                                            // color:"#aaa",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight:"800",
                                                        }}>
                                                            <li><FontAwesomeIcon icon={faClock} color="#0F2B48" size="1x" /> <strong>60 min</strong> of Classes</li>
                                                            <li><FontAwesomeIcon icon={faSmile} color="#0F2B48" size="1x" /> Limited Student In One Batch</li>
                                                            <li><FontAwesomeIcon icon={faCalendar} color="#0F2B48" size="1x" /> Flexible Days And Time</li>
                                                        </Card.Text>
                                                        <Row style={{
                                                            fontFamily: "'Nunito', sans-serif",
                                                            // border: "2px solid red",
                                                        }}>
                                                            <Col xs={7} xl={7} style={{
                                                                // border: "2px solid red",
                                                                fontSize:"20px",
                                                            }}>
                                                                <strong>₹5999/-</strong>
                                                            </Col>
                                                            <Col className="text-right" xs={5} xl={5} style={{
                                                                // border: "2px solid red",
                                                                color: "#019977",
                                                                fontSize:"20px",
                                                            }}>
                                                                18% off <FontAwesomeIcon icon={faTag} color="#019977" size="1x" />
                                                            </Col>
                                                        </Row>

                                                    </Card.Body>
                                                    <ButtonStyle1 className="text-center" href="https://drive.google.com/uc?export=download&id=1lUQgzAMv-yzXuPsPabs71KIqYXVKqoeX">
                                                        <FontAwesomeIcon icon={faDownload} color="#0F2B48" size="1x" /> Download Curriculum
                                                    </ButtonStyle1>
                                                    <ButtonStyle>
                                                        Book A Demo
                                                    </ButtonStyle>
                                                    {/* <Button variant="primary"></Button> */}
                                                    {/* <Card.Footer className="text-center">
                                                        <Button variant="primary">Learn More</Button>
                                                    </Card.Footer> */}
                                                </Card>
                                            </Col>




                                        </Row>


                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">

                                        <Row >
                                            <Col xs={12} xl={4}>
                                            <Card className="my-2" style={{ width: 'auto', border: "2px solid #0F2B48" }}>
                                                    <Image className="px-4 py-4" src={AppLogo} fluid height="auto" width="auto" style={{
                                                        // border: "2px solid red",
                                                    }} />
                                                    <Card.Body>
                                                        <Card.Title style={{
                                                            // border: "2px solid red",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight: "800",
                                                            fontSize: "20px",
                                                        }}>App Development</Card.Title>
                                                        <Row className="my-2" style={{
                                                            // border: "2px solid red",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight: "800",
                                                            fontSize: "15px",
                                                            // color: "#aaa",
                                                        }}>
                                                            <Col xs={12} xl={12} style={{
                                                                // border: "2px solid red",
                                                            }}>
                                                                Lectures 36
                                                            </Col>
                                                            {/* <Col className="text-right pr-4" xs={6} xl={6} style={{
                                                                border: "2px solid red"
                                                            }}>
                                                                Lectures 8-48
                                                        </Col> */}
                                                        </Row>

                                                        <Card.Text className="py-2" style={{
                                                            // border: "2px solid red",
                                                            listStyleType: "none",
                                                            // color:"#aaa",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight:"800",
                                                        }}>
                                                            <li><FontAwesomeIcon icon={faClock} color="#0F2B48" size="1x" /> <strong>60 min</strong> of Classes</li>
                                                            <li><FontAwesomeIcon icon={faSmile} color="#0F2B48" size="1x" /> Limited Student In One Batch</li>
                                                            <li><FontAwesomeIcon icon={faCalendar} color="#0F2B48" size="1x" /> Flexible Days And Time</li>
                                                        </Card.Text>
                                                        <Row style={{
                                                            fontFamily: "'Nunito', sans-serif",
                                                        }}>
                                                            <Col xs={7} xl={7} style={{
                                                                // border: "2px solid red"
                                                                fontSize:"20px",
                                                            }}>
                                                                <strong>₹8999/- </strong>
                                                            </Col>
                                                            <Col className="text-right" xs={5} xl={5} style={{
                                                                // border: "2px solid red",
                                                                color: "#019977",
                                                                fontSize:"20px",
                                                            }}>
                                                                18% off <FontAwesomeIcon icon={faTag} color="#019977" size="1x" />
                                                            </Col>
                                                        </Row>

                                                    </Card.Body>
                                                    <ButtonStyle1 className="text-center" href="#">
                                                        <FontAwesomeIcon icon={faDownload} color="#0F2B48" size="1x" /> Download Curriculum
                                                    </ButtonStyle1>
                                                    <ButtonStyle>
                                                        Book A Demo
                                                    </ButtonStyle>
                                                    {/* <Button variant="primary"></Button> */}
                                                    {/* <Card.Footer className="text-center">
                                                        <Button variant="primary">Learn More</Button>
                                                    </Card.Footer> */}
                                                </Card>
                                            </Col>

                                            <Col xs={12} xl={4}>
                                            <Card className="my-2" style={{ width: 'auto', border: "2px solid #0F2B48" }}>
                                                    <Image className="px-4 py-4" src={MERNLogo} fluid height="auto" width="auto" style={{
                                                        // border: "2px solid red",
                                                    }} />
                                                    <Card.Body>
                                                        <Card.Title style={{
                                                            // border: "2px solid red",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight: "800",
                                                            fontSize: "20px",
                                                        }}>MERN STACK</Card.Title>
                                                        <Row className="my-2" style={{
                                                            // border: "2px solid red",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight: "800",
                                                            fontSize: "15px",
                                                            // color: "#aaa",
                                                        }}>
                                                            <Col xs={12} xl={12} style={{
                                                                // border: "2px solid red",
                                                            }}>
                                                                Lectures 36
                                                            </Col>
                                                            {/* <Col className="text-right pr-4" xs={6} xl={6} style={{
                                                                border: "2px solid red"
                                                            }}>
                                                                Lectures 8-48
                                                        </Col> */}
                                                        </Row>

                                                        <Card.Text className="py-2" style={{
                                                            // border: "2px solid red",
                                                            listStyleType: "none",
                                                            // color:"#aaa",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight:"800",
                                                        }}>
                                                            <li><FontAwesomeIcon icon={faClock} color="#0F2B48" size="1x" /> <strong>60 min</strong> of Classes</li>
                                                            <li><FontAwesomeIcon icon={faSmile} color="#0F2B48" size="1x" /> Limited Student In One Batch</li>
                                                            <li><FontAwesomeIcon icon={faCalendar} color="#0F2B48" size="1x" /> Flexible Days And Time</li>
                                                        </Card.Text>
                                                        <Row style={{
                                                            fontFamily: "'Nunito', sans-serif",
                                                        }}>
                                                            <Col xs={7} xl={7} style={{
                                                                // border: "2px solid red"
                                                                fontSize:"20px",
                                                            }}>
                                                                <strong>₹12,000/- per class</strong>
                                                            </Col>
                                                            <Col className="text-right" xs={5} xl={5} style={{
                                                                // border: "2px solid red",
                                                                color: "#019977",
                                                                fontSize:"20px",
                                                            }}>
                                                                18% off <FontAwesomeIcon icon={faTag} color="#019977" size="1x" />
                                                            </Col>
                                                        </Row>

                                                    </Card.Body>
                                                    <ButtonStyle1 className="text-center" href="https://drive.google.com/uc?export=download&id=1jMT9Tun_MOrpFfiT7aNNfKg6zfUGh2Rv">
                                                        <FontAwesomeIcon icon={faDownload} color="#0F2B48" size="1x" /> Download Curriculum
                                                    </ButtonStyle1>
                                                    <ButtonStyle>
                                                        Book A Demo
                                                    </ButtonStyle>
                                                    {/* <Button variant="primary"></Button> */}
                                                    {/* <Card.Footer className="text-center">
                                                        <Button variant="primary">Learn More</Button>
                                                    </Card.Footer> */}
                                                </Card>
                                            </Col>

                                            <Col xs={12} xl={4}>
                                            <Card className="my-2" style={{ width: 'auto', border: "2px solid #0F2B48" }}>
                                                    <Image className="px-4 py-4" src={UnityLogo} fluid height="auto" width="auto" style={{
                                                        // border: "2px solid red",
                                                    }} />
                                                    <Card.Body>
                                                        <Card.Title style={{
                                                            // border: "2px solid red",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight: "800",
                                                            fontSize: "20px",
                                                        }}>Game Development</Card.Title>
                                                        <Row className="my-2" style={{
                                                            // border: "2px solid red",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight: "800",
                                                            fontSize: "15px",
                                                            // color: "#aaa",
                                                        }}>
                                                            <Col xs={12} xl={12} style={{
                                                                // border: "2px solid red",
                                                            }}>
                                                                Lectures 48
                                                            </Col>
                                                            {/* <Col className="text-right pr-4" xs={6} xl={6} style={{
                                                                border: "2px solid red"
                                                            }}>
                                                                Lectures 8-48
                                                        </Col> */}
                                                        </Row>

                                                        <Card.Text className="py-2" style={{
                                                            // border: "2px solid red",
                                                            listStyleType: "none",
                                                            // color:"#aaa",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight:"800",
                                                        }}>
                                                            <li><FontAwesomeIcon icon={faClock} color="#0F2B48" size="1x" /> <strong>60 min</strong> of Classes</li>
                                                            <li><FontAwesomeIcon icon={faSmile} color="#0F2B48" size="1x" /> Limited Student In One Batch</li>
                                                            <li><FontAwesomeIcon icon={faCalendar} color="#0F2B48" size="1x" /> Flexible Days And Time</li>
                                                        </Card.Text>
                                                        <Row style={{
                                                            fontFamily: "'Nunito', sans-serif",
                                                        }}>
                                                            <Col xs={7} xl={7} style={{
                                                                // border: "2px solid red"
                                                                fontSize:"20px",
                                                            }}>
                                                                <strong>₹12,000/-</strong>
                                                            </Col>
                                                            <Col className="text-right" xs={5} xl={5} style={{
                                                                // border: "2px solid red",
                                                                color: "#019977",
                                                                fontSize:"20px",
                                                            }}>
                                                                18% off <FontAwesomeIcon icon={faTag} color="#019977" size="1x" />
                                                            </Col>
                                                        </Row>

                                                    </Card.Body>
                                                    <ButtonStyle1 className="text-center" href="https://drive.google.com/uc?export=download&id=1qUChe0eIn0l2TlgkMPOugbB7sW0Ur_Ic">
                                                        <FontAwesomeIcon icon={faDownload} color="#0F2B48" size="1x" /> Download Curriculum
                                                    </ButtonStyle1>
                                                    <ButtonStyle>
                                                        Book A Demo
                                                    </ButtonStyle>
                                                    {/* <Button variant="primary"></Button> */}
                                                    {/* <Card.Footer className="text-center">
                                                        <Button variant="primary">Learn More</Button>
                                                    </Card.Footer> */}
                                                </Card>
                                            </Col>




                                        </Row>

                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third" >
                                        <Row >
                                            <Col xs={12} xl={4}>
                                            <Card className="my-2" style={{ width: 'auto', border: "2px solid #0F2B48" }}>
                                                    <Image className="px-4 py-4" src={DataLogo} fluid height="auto" width="auto" style={{
                                                        // border: "2px solid red",
                                                    }} />
                                                    <Card.Body>
                                                        <Card.Title style={{
                                                            // border: "2px solid red",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight: "800",
                                                            fontSize: "20px",
                                                        }}>Data Structure</Card.Title>
                                                        <Row className="my-2" style={{
                                                            // border: "2px solid red",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight: "800",
                                                            fontSize: "15px",
                                                            // color: "#aaa",
                                                        }}>
                                                            <Col xs={12} xl={12} style={{
                                                                // border: "2px solid red",
                                                            }}>
                                                                Lectures 36
                                                            </Col>
                                                            {/* <Col className="text-right pr-4" xs={6} xl={6} style={{
                                                                border: "2px solid red"
                                                            }}>
                                                                Lectures 8-48
                                                        </Col> */}
                                                        </Row>

                                                        <Card.Text className="py-2" style={{
                                                            // border: "2px solid red",
                                                            listStyleType: "none",
                                                            // color:"#aaa",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight:"800",
                                                        }}>
                                                            <li><FontAwesomeIcon icon={faClock} color="#0F2B48" size="1x" /> <strong>60 min</strong> of Classes</li>
                                                            <li><FontAwesomeIcon icon={faSmile} color="#0F2B48" size="1x" />Limited Student In One Batch</li>
                                                            <li><FontAwesomeIcon icon={faCalendar} color="#0F2B48" size="1x" /> Flexible Days And Time</li>
                                                        </Card.Text>
                                                        <Row style={{
                                                            fontFamily: "'Nunito', sans-serif",
                                                        }}>
                                                            <Col xs={7} xl={7} style={{
                                                                // border: "2px solid red"
                                                                fontSize:"20px",
                                                            }}>
                                                                <strong>₹12,000/-</strong>
                                                            </Col>
                                                            <Col className="text-right" xs={5} xl={5} style={{
                                                                // border: "2px solid red",
                                                                color: "#019977",
                                                                fontSize:"20px",
                                                            }}>
                                                                18% off <FontAwesomeIcon icon={faTag} color="#019977" size="1x" />
                                                            </Col>
                                                        </Row>

                                                    </Card.Body>
                                                    <ButtonStyle1 className="text-center" href="https://drive.google.com/uc?export=download&id=1fGeB9kFBGI5GcjYkrmvOoF0Yn-wNWW43">
                                                        <FontAwesomeIcon icon={faDownload} color="#0F2B48" size="1x" /> Download Curriculum
                                                    </ButtonStyle1>
                                                    <ButtonStyle>
                                                        Book A Demo
                                                    </ButtonStyle>
                                                    {/* <Button variant="primary"></Button> */}
                                                    {/* <Card.Footer className="text-center">
                                                        <Button variant="primary">Learn More</Button>
                                                    </Card.Footer> */}
                                                </Card>
                                            </Col>

                                            <Col xs={12} xl={4}>
                                            <Card className="my-2" style={{ width: 'auto', border: "2px solid #0F2B48" }}>
                                                    <Image className="px-4 py-4" src={AnimationLogo} fluid height="auto" width="auto" style={{
                                                        // border: "2px solid red",
                                                    }} />
                                                    <Card.Body>
                                                        <Card.Title style={{
                                                            // border: "2px solid red",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight: "800",
                                                            fontSize: "20px",
                                                        }}>Animation</Card.Title>
                                                        <Row className="my-2" style={{
                                                            // border: "2px solid red",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight: "800",
                                                            fontSize: "15px",
                                                            // color: "#aaa",
                                                        }}>
                                                            <Col xs={12} xl={12} style={{
                                                                // border: "2px solid red",
                                                            }}>
                                                                Lectures 48
                                                            </Col>
                                                            {/* <Col className="text-right pr-4" xs={6} xl={6} style={{
                                                                border: "2px solid red"
                                                            }}>
                                                                Lectures 8-48
                                                        </Col> */}
                                                        </Row>

                                                        <Card.Text className="py-2" style={{
                                                            // border: "2px solid red",
                                                            listStyleType: "none",
                                                            // color:"#aaa",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight:"800",
                                                        }}>
                                                            <li><FontAwesomeIcon icon={faClock} color="#0F2B48" size="1x" /> <strong>60 min</strong> of Classes</li>
                                                            <li><FontAwesomeIcon icon={faSmile} color="#0F2B48" size="1x" /> One to One Classes</li>
                                                            <li><FontAwesomeIcon icon={faCalendar} color="#0F2B48" size="1x" /> Flexible Days And Time</li>
                                                        </Card.Text>
                                                        <Row style={{
                                                            fontFamily: "'Nunito', sans-serif",
                                                        }}>
                                                            <Col xs={7} xl={7} style={{
                                                                // border: "2px solid red"
                                                                fontSize:"20px",
                                                            }}>
                                                                <strong>₹12,000/- </strong>
                                                            </Col>
                                                            <Col className="text-right" xs={5} xl={5} style={{
                                                                // border: "2px solid red",
                                                                color: "#019977",
                                                                fontSize:"20px",
                                                            }}>
                                                                18% off <FontAwesomeIcon icon={faTag} color="#019977" size="1x" />
                                                            </Col>
                                                        </Row>

                                                    </Card.Body>
                                                    <ButtonStyle1 className="text-center" href="https://drive.google.com/uc?export=download&id=1DQbOr-kGIJqlzsdRXc1OQf-niihWSmTA">
                                                        <FontAwesomeIcon icon={faDownload} color="#0F2B48" size="1x" /> Download Curriculum
                                                    </ButtonStyle1>
                                                    <ButtonStyle>
                                                        Book A Demo
                                                    </ButtonStyle>
                                                    {/* <Button variant="primary"></Button> */}
                                                    {/* <Card.Footer className="text-center">
                                                        <Button variant="primary">Learn More</Button>
                                                    </Card.Footer> */}
                                                </Card>
                                            </Col>

                                            <Col xs={12} xl={4}>
                                            <Card className="my-2" style={{ width: 'auto', border: "2px solid #0F2B48" }}>
                                                    <Image className="px-4 py-4" src={MachineLogo} fluid height="auto" width="auto" style={{
                                                        // border: "2px solid red",
                                                    }} />
                                                    <Card.Body>
                                                        <Card.Title style={{
                                                            // border: "2px solid red",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight: "800",
                                                            fontSize: "20px",
                                                        }}>Machine Learning</Card.Title>
                                                        <Row className="my-2" style={{
                                                            // border: "2px solid red",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight: "800",
                                                            fontSize: "15px",
                                                            // color: "#aaa",
                                                        }}>
                                                            <Col xs={12} xl={12} style={{
                                                                // border: "2px solid red",
                                                            }}>
                                                                Lectures 54
                                                            </Col>
                                                            {/* <Col className="text-right pr-4" xs={6} xl={6} style={{
                                                                border: "2px solid red"
                                                            }}>
                                                                Lectures 8-48
                                                        </Col> */}
                                                        </Row>

                                                        <Card.Text className="py-2" style={{
                                                            // border: "2px solid red",
                                                            listStyleType: "none",
                                                            // color:"#aaa",
                                                            fontFamily: "'Nunito', sans-serif",
                                                            fontWeight:"800",
                                                        }}>
                                                            <li><FontAwesomeIcon icon={faClock} color="#0F2B48" size="1x" /> <strong>60 min</strong> of Classes</li>
                                                            <li><FontAwesomeIcon icon={faSmile} color="#0F2B48" size="1x" /> Limited Student In One Batch</li>
                                                            <li><FontAwesomeIcon icon={faCalendar} color="#0F2B48" size="1x" /> Flexible Days And Time</li>
                                                        </Card.Text>
                                                        <Row style={{
                                                            fontFamily: "'Nunito', sans-serif",
                                                        }}>
                                                            <Col xs={7} xl={7} style={{
                                                                // border: "2px solid red"
                                                                fontSize:"20px",
                                                            }}>
                                                                <strong>₹16,000/- </strong>
                                                            </Col>
                                                            <Col className="text-right" xs={5} xl={5} style={{
                                                                // border: "2px solid red",
                                                                color: "#019977",
                                                                fontSize:"20px",
                                                            }}>
                                                                18% off <FontAwesomeIcon icon={faTag} color="#019977" size="1x" />
                                                            </Col>
                                                        </Row>

                                                    </Card.Body>
                                                    <ButtonStyle1 className="text-center" href="#">
                                                        <FontAwesomeIcon icon={faDownload} color="#0F2B48" size="1x" /> Download Curriculum
                                                    </ButtonStyle1>
                                                    <ButtonStyle>
                                                        Book A Demo
                                                    </ButtonStyle>
                                                    {/* <Button variant="primary"></Button> */}
                                                    {/* <Card.Footer className="text-center">
                                                        <Button variant="primary">Learn More</Button>
                                                    </Card.Footer> */}
                                                </Card>
                                            </Col>




                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </div >
        );
    }
}


export default CollegeTab;