import React from 'react'
import collegeImage from "../../images/collegeImage.png"
import { Container, Tab, Tabs, TabContainer, Nav, Row, Col, Image, Card, Button, Breadcrumb, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Zoom } from 'react-reveal';
import SchoolDemo from "../../images/SchoolDemo.png"
import CPlusCourses from "../../images/CPlusCourses.png"
import { faSmile, faCalendar, faClock, faTag, faDownload, faUserGraduate, faChalkboardTeacher, faStar, faStarHalfAlt, faGrinStars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import JavaCourse from "../../images/JavaCourse.png"
import ScratchCourse from "../../images/ScratchCourse.png"
import AppCourse from "../../images/AppCourse.png"
import PythonCourse from "../../images/PythonCourse.png"
import MernCourse from "../../images/MernCourse.png"
import GameCourse from "../../images/GameCourse.png"
import PythonKidsCourse from "../../images/PythonKidsCourse.png"
import WebDesignCourse from "../../images/WebDesignCourse.png"
import MITcourse from "../../images/MITcourse.png"
import MachineLearningCourse from "../../images/MachineLearningCourse.png"
import DataStructureCourse from "../../images/DataStructureCourse.png"
import EthicalHackingCourse from "../../images/EthicalHackingCourse.png"
import AnimationCourse from "../../images/AnimationCourse.png"





const ButtonStyle = styled.button`
background-color: #0F2B48;
border: 2px solid #0F2B48;
color: #fff;
padding: 0.2rem 0.5rem;
border-radius: 5px;
font-family: 'Nunito', sans-serif;

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

const renderTooltip = (props) => (
    <Tooltip className="d-none d-sm-block" id="button-tooltip" {...props}>
        Up Coming Batch<br></br>31 October 2020
    </Tooltip>
);



class AllCourses extends React.Component {
   advancePython = () => {
       console.log(this.props)
        this.props.history.push('/CourseDescription');
        
    }
    render() {

        return (
            <div style={{
                fontFamily: "'Nunito', sans-serif",
            }}>
                <Container>
                    <h1 className="pt-4" style={{
                        fontSize: "50px",
                        fontWeight: "bold",
                        color: "#0F2B48",
                    }}>All Certification Courses
                        </h1>
                    <p style={{
                        color: "#aaa",
                    }}>We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world. We provide one to one sessions for all types of doubt clarifications. We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world. We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world. We provide one to one sessions for all types of doubt clarifications. We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world. We provide one to one sessions for all types of doubt clarifications.</p>
                    <p style={{
                        color: "#aaa",
                    }}>We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world. We provide one to one sessions for all types of doubt clarifications. We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world. </p>
                    <p style={{
                        color: "#aaa",
                    }}>We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world.</p>

                    <Card className="my-2" style={{
                        border: "none",
                    }}>
                        <Card.Header as="h5" style={{
                            backgroundColor: "#0F2B48",
                            color: "#fff",
                        }}>Featured</Card.Header>


                        
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 50, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Card.Body>
                                <Row style={{
                                    border: "2px solid #aaa",
                                    // height: "50vh",
                                }}>
                                    <Col xl={3} className="my-3 text-center" style={{
                                        // border: "2px solid green",
                                        // height: "50vh",
                                    }}><Image src={ScratchCourse} height="200" width="auto" /></Col>
                                    <Col xl={7} className="my-2" style={{
                                        // border: "2px solid green",
                                    }}>
                                        <Card.Title className="my-3" style={{
                                            // border: "2px solid green",
                                            fontSize: "40px",
                                            fontWeight: "bold",
                                        }}>Story Telling with Code</Card.Title>
                                        <Col xl={12} style={{
                                            // border: "2px solid green",
                                        }}>
                                            <Row style={{
                                                fontSize: "15px",
                                                color: "#ABABAB",
                                            }}>
                                                <Col xl={3} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faClock} size="1x" /> 60 min of Classes
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faUserGraduate} size="1x" /> Limited Student In Batch's
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faCalendar} size="1x" /> Flexible Days And Time
                                            </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={12} className="my-3" style={{
                                            // border: "2px solid green",
                                            padding: "0px",
                                            fontSize: "15px",
                                            // fontWeight: "bold",
                                        }}>
                                            <li>Over view of Object, Class, Abstraction, Encapsulation</li>
                                            <li>Over view of Inheritance, Polymorphism</li>
                                            <li>Over view of Overloading concept</li>
                                            <li>Over view of Advance concept</li>
                                        </Col>
                                    </Col>
                                    <Col xl={2} className="text-center" style={{
                                        // border: "2px solid green"
                                    }}>
                                        <Row className="text-center mt-4">
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faChalkboardTeacher} size="1x" /> 72 Lectures</h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}>Flat 18% off <FontAwesomeIcon icon={faTag} size="1x" /></h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faGrinStars} size="1x" /> 1 Free Demo</h5></Col>

                                            <Col xs={12} className="px-4 text-center">
                                                <FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStarHalfAlt} color="#FFC700" size="1x" />(4.5/5)
                                            </Col>
                                            <Col xs={12} className="my-2 px-4 text-center">
                                                <ButtonStyle variant="primary">Course Details</ButtonStyle>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </OverlayTrigger>


                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 50, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Card.Body>
                                <Row style={{
                                    border: "2px solid #aaa",
                                    // height: "50vh",
                                }}>
                                    <Col xl={3} className="my-3 text-center" style={{
                                        // border: "2px solid green",
                                        // height: "50vh",
                                    }}><Image src={AnimationCourse} height="200" width="auto" /></Col>
                                    <Col xl={7} className="my-2" style={{
                                        // border: "2px solid green",
                                    }}>
                                        <Card.Title className="my-3" style={{
                                            // border: "2px solid green",
                                            fontSize: "40px",
                                            fontWeight: "bold",
                                        }}>Animation For Kids</Card.Title>
                                        <Col xl={12} style={{
                                            // border: "2px solid green",
                                        }}>
                                            <Row style={{
                                                fontSize: "15px",
                                                color: "#ABABAB",
                                            }}>
                                                <Col xl={3} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faClock} size="1x" /> 60 min of Classes
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faUserGraduate} size="1x" /> Limited Student In Batch's
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faCalendar} size="1x" /> Flexible Days And Time
                                            </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={12} className="my-3" style={{
                                            // border: "2px solid green",
                                            padding: "0px",
                                            fontSize: "15px",
                                            // fontWeight: "bold",
                                        }}>
                                            <li>Over view of Object, Class, Abstraction, Encapsulation</li>
                                            <li>Over view of Inheritance, Polymorphism</li>
                                            <li>Over view of Overloading concept</li>
                                            <li>Over view of Advance concept</li>
                                        </Col>
                                    </Col>
                                    <Col xl={2} className="text-center" style={{
                                        // border: "2px solid green"
                                    }}>
                                        <Row className="text-center mt-4">
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faChalkboardTeacher} size="1x" /> 72 Lectures</h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}>Flat 18% off <FontAwesomeIcon icon={faTag} size="1x" /></h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faGrinStars} size="1x" /> 1 Free Demo</h5></Col>

                                            <Col xs={12} className="px-4 text-center">
                                                <FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStarHalfAlt} color="#FFC700" size="1x" />(4.5/5)
                                            </Col>
                                            <Col xs={12} className="my-2 px-4 text-center">
                                                <ButtonStyle variant="primary">Course Details</ButtonStyle>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </OverlayTrigger>



                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 50, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Card.Body>
                                <Row style={{
                                    border: "2px solid #aaa",
                                    // height: "50vh",
                                }}>
                                    <Col xl={3} className="my-3 text-center" style={{
                                        // border: "2px solid green",
                                        // height: "50vh",
                                    }}><Image src={AnimationCourse} height="200" width="auto" /></Col>
                                    <Col xl={7} className="my-2" style={{
                                        // border: "2px solid green",
                                    }}>
                                        <Card.Title className="my-3" style={{
                                            // border: "2px solid green",
                                            fontSize: "40px",
                                            fontWeight: "bold",
                                        }}>Animation </Card.Title>
                                        <Col xl={12} style={{
                                            // border: "2px solid green",
                                        }}>
                                            <Row style={{
                                                fontSize: "15px",
                                                color: "#ABABAB",
                                            }}>
                                                <Col xl={3} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faClock} size="1x" /> 60 min of Classes
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faUserGraduate} size="1x" /> Limited Student In Batch's
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faCalendar} size="1x" /> Flexible Days And Time
                                            </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={12} className="my-3" style={{
                                            // border: "2px solid green",
                                            padding: "0px",
                                            fontSize: "15px",
                                            // fontWeight: "bold",
                                        }}>
                                            <li>Over view of Object, Class, Abstraction, Encapsulation</li>
                                            <li>Over view of Inheritance, Polymorphism</li>
                                            <li>Over view of Overloading concept</li>
                                            <li>Over view of Advance concept</li>
                                        </Col>
                                    </Col>
                                    <Col xl={2} className="text-center" style={{
                                        // border: "2px solid green"
                                    }}>
                                        <Row className="text-center mt-4">
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faChalkboardTeacher} size="1x" /> 72 Lectures</h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}>Flat 18% off <FontAwesomeIcon icon={faTag} size="1x" /></h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faGrinStars} size="1x" /> 1 Free Demo</h5></Col>

                                            <Col xs={12} className="px-4 text-center">
                                                <FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStarHalfAlt} color="#FFC700" size="1x" />(4.5/5)
                                            </Col>
                                            <Col xs={12} className="my-2 px-4 text-center">
                                                <ButtonStyle variant="primary">Course Details</ButtonStyle>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </OverlayTrigger>
                    </Card>

                    {/* Foundation */}

                    <Card className="my-2" style={{
                        border: "none",
                    }}>
                        <Card.Header as="h5" style={{
                            backgroundColor: "#0F2B48",
                            color: "#fff",
                        }}>Foundation</Card.Header>


                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 50, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Card.Body>
                                <Row style={{
                                    border: "2px solid #aaa",
                                    // height: "50vh",
                                }}>
                                    <Col xl={3} className="my-3 text-center" style={{
                                        // border: "2px solid green",
                                        // height: "50vh",
                                    }}><Image src={CPlusCourses} height="200" width="auto" /></Col>
                                    <Col xl={7} className="my-2" style={{
                                        // border: "2px solid green",
                                    }}>
                                        <Card.Title className="my-3" style={{
                                            // border: "2px solid green",
                                            fontSize: "40px",
                                            fontWeight: "bold",
                                        }}>C++ Programming Language</Card.Title>
                                        <Col xl={12} style={{
                                            // border: "2px solid green",
                                        }}>
                                            <Row style={{
                                                fontSize: "15px",
                                                color: "#ABABAB",
                                            }}>
                                                <Col xl={3} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faClock} size="1x" /> 60 min of Classes
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faUserGraduate} size="1x" /> Limited Student In Batch's
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faCalendar} size="1x" /> Flexible Days And Time
                                            </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={12} className="my-3" style={{
                                            // border: "2px solid green",
                                            padding: "0px",
                                            fontSize: "15px",
                                            // fontWeight: "bold",
                                        }}>
                                            <li>Over view of Object, Class, Abstraction, Encapsulation</li>
                                            <li>Over view of Inheritance, Polymorphism</li>
                                            <li>Over view of Overloading concept</li>
                                            <li>Over view of Advance concept</li>
                                        </Col>
                                    </Col>
                                    <Col xl={2} className="text-center" style={{
                                        // border: "2px solid green"
                                    }}>
                                        <Row className="text-center mt-4">
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faChalkboardTeacher} size="1x" /> 72 Lectures</h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}>Flat 18% off <FontAwesomeIcon icon={faTag} size="1x" /></h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faGrinStars} size="1x" /> 1 Free Demo</h5></Col>

                                            <Col xs={12} className="px-4 text-center">
                                                <FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStarHalfAlt} color="#FFC700" size="1x" />(4.5/5)
                                            </Col>
                                            <Col xs={12} className="my-2 px-4 text-center">
                                                <ButtonStyle variant="primary">Course Details</ButtonStyle>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </OverlayTrigger>



                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 50, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Card.Body>
                                <Row style={{
                                    border: "2px solid #aaa",
                                    // height: "50vh",
                                }}>
                                    <Col xl={3} className="my-3 text-center" style={{
                                        // border: "2px solid green",
                                        // height: "50vh",
                                    }}><Image src={JavaCourse} height="200" width="auto" /></Col>
                                    <Col xl={7} className="my-2" style={{
                                        // border: "2px solid green",
                                    }}>
                                        <Card.Title className="my-3" style={{
                                            // border: "2px solid green",
                                            fontSize: "40px",
                                            fontWeight: "bold",
                                        }}>Java Programming Language</Card.Title>
                                        <Col xl={12} style={{
                                            // border: "2px solid green",
                                        }}>
                                            <Row style={{
                                                fontSize: "15px",
                                                color: "#ABABAB",
                                            }}>
                                                <Col xl={3} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faClock} size="1x" /> 60 min of Classes
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faUserGraduate} size="1x" /> Limited Student In Batch's
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faCalendar} size="1x" /> Flexible Days And Time
                                            </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={12} className="my-3" style={{
                                            // border: "2px solid green",
                                            padding: "0px",
                                            fontSize: "15px",
                                            // fontWeight: "bold",
                                        }}>
                                            <li>Over view of Object, Class, Abstraction, Encapsulation</li>
                                            <li>Over view of Inheritance, Polymorphism</li>
                                            <li>Over view of Overloading concept</li>
                                            <li>Over view of Advance concept</li>
                                        </Col>
                                    </Col>
                                    <Col xl={2} className="text-center" style={{
                                        // border: "2px solid green"
                                    }}>
                                        <Row className="text-center mt-4">
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faChalkboardTeacher} size="1x" /> 72 Lectures</h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}>Flat 18% off <FontAwesomeIcon icon={faTag} size="1x" /></h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faGrinStars} size="1x" /> 1 Free Demo</h5></Col>

                                            <Col xs={12} className="px-4 text-center">
                                                <FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStarHalfAlt} color="#FFC700" size="1x" />(4.5/5)
                                            </Col>
                                            <Col xs={12} className="my-2 px-4 text-center">
                                                <ButtonStyle variant="primary">Course Details</ButtonStyle>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </OverlayTrigger>



                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 50, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Card.Body>
                                <Row style={{
                                    border: "2px solid #aaa",
                                    // height: "50vh",
                                }}>
                                    <Col xl={3} className="my-3 text-center" style={{
                                        // border: "2px solid green",
                                        // height: "50vh",
                                    }}><Image src={PythonKidsCourse} height="200" width="auto" /></Col>
                                    <Col xl={7} className="my-2" style={{
                                        // border: "2px solid green",
                                    }}>
                                        <Card.Title className="my-3" style={{
                                            // border: "2px solid green",
                                            fontSize: "40px",
                                            fontWeight: "bold",
                                        }}>Introduction to Coding</Card.Title>
                                        <Col xl={12} style={{
                                            // border: "2px solid green",
                                        }}>
                                            <Row style={{
                                                fontSize: "15px",
                                                color: "#ABABAB",
                                            }}>
                                                <Col xl={3} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faClock} size="1x" /> 60 min of Classes
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faUserGraduate} size="1x" /> Limited Student In Batch's
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faCalendar} size="1x" /> Flexible Days And Time
                                            </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={12} className="my-3" style={{
                                            // border: "2px solid green",
                                            padding: "0px",
                                            fontSize: "15px",
                                            // fontWeight: "bold",
                                        }}>
                                            <li>Over view of Object, Class, Abstraction, Encapsulation</li>
                                            <li>Over view of Inheritance, Polymorphism</li>
                                            <li>Over view of Overloading concept</li>
                                            <li>Over view of Advance concept</li>
                                        </Col>
                                    </Col>
                                    <Col xl={2} className="text-center" style={{
                                        // border: "2px solid green"
                                    }}>
                                        <Row className="text-center mt-4">
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faChalkboardTeacher} size="1x" /> 72 Lectures</h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}>Flat 18% off <FontAwesomeIcon icon={faTag} size="1x" /></h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faGrinStars} size="1x" /> 1 Free Demo</h5></Col>

                                            <Col xs={12} className="px-4 text-center">
                                                <FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStarHalfAlt} color="#FFC700" size="1x" />(4.5/5)
                                            </Col>
                                            <Col xs={12} className="my-2 px-4 text-center">
                                                <ButtonStyle variant="primary">Course Details</ButtonStyle>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </OverlayTrigger>


                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 50, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Card.Body>
                                <Row style={{
                                    border: "2px solid #aaa",
                                    // height: "50vh",
                                }}>
                                    <Col xl={3} className="my-3 text-center" style={{
                                        // border: "2px solid green",
                                        // height: "50vh",
                                    }}><Image src={PythonCourse} height="200" width="auto" /></Col>
                                    <Col xl={7} className="my-2" style={{
                                        // border: "2px solid green",
                                    }}>
                                        <Card.Title className="my-3" style={{
                                            // border: "2px solid green",
                                            fontSize: "40px",
                                            fontWeight: "bold",
                                        }}>Python for Kids</Card.Title>
                                        <Col xl={12} style={{
                                            // border: "2px solid green",
                                        }}>
                                            <Row style={{
                                                fontSize: "15px",
                                                color: "#ABABAB",
                                            }}>
                                                <Col xl={3} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faClock} size="1x" /> 60 min of Classes
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faUserGraduate} size="1x" /> Limited Student In Batch's
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faCalendar} size="1x" /> Flexible Days And Time
                                            </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={12} className="my-3" style={{
                                            // border: "2px solid green",
                                            padding: "0px",
                                            fontSize: "15px",
                                            // fontWeight: "bold",
                                        }}>
                                            <li>Over view of Object, Class, Abstraction, Encapsulation</li>
                                            <li>Over view of Inheritance, Polymorphism</li>
                                            <li>Over view of Overloading concept</li>
                                            <li>Over view of Advance concept</li>
                                        </Col>
                                    </Col>
                                    <Col xl={2} className="text-center" style={{
                                        // border: "2px solid green"
                                    }}>
                                        <Row className="text-center mt-4">
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faChalkboardTeacher} size="1x" /> 72 Lectures</h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}>Flat 18% off <FontAwesomeIcon icon={faTag} size="1x" /></h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faGrinStars} size="1x" /> 1 Free Demo</h5></Col>

                                            <Col xs={12} className="px-4 text-center">
                                                <FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStarHalfAlt} color="#FFC700" size="1x" />(4.5/5)
                                            </Col>
                                            <Col xs={12} className="my-2 px-4 text-center">
                                                <ButtonStyle variant="primary">Course Details</ButtonStyle>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </OverlayTrigger>



                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 50, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Card.Body>
                                <Row style={{
                                    border: "2px solid #aaa",
                                    // height: "50vh",
                                }}>
                                    <Col xl={3} className="my-3 text-center" style={{
                                        // border: "2px solid green",
                                        // height: "50vh",
                                    }}><Image src={PythonCourse} height="200" width="auto" /></Col>
                                    <Col xl={7} className="my-2" style={{
                                        // border: "2px solid green",
                                    }}>
                                        <Card.Title className="my-3" style={{
                                            // border: "2px solid green",
                                            fontSize: "40px",
                                            fontWeight: "bold",
                                        }}>Advance Python</Card.Title>
                                        <Col xl={12} style={{
                                            // border: "2px solid green",
                                        }}>
                                            <Row style={{
                                                fontSize: "15px",
                                                color: "#ABABAB",
                                            }}>
                                                <Col xl={3} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faClock} size="1x" /> 60 min of Classes
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faUserGraduate} size="1x" /> Limited Student In Batch's
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faCalendar} size="1x" /> Flexible Days And Time
                                            </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={12} className="my-3" style={{
                                            // border: "2px solid green",
                                            padding: "0px",
                                            fontSize: "15px",
                                            // fontWeight: "bold",
                                        }}>
                                            <li>Over view of Object, Class, Abstraction, Encapsulation</li>
                                            <li>Over view of Inheritance, Polymorphism</li>
                                            <li>Over view of Overloading concept</li>
                                            <li>Over view of Advance concept</li>
                                        </Col>
                                    </Col>
                                    <Col xl={2} className="text-center" style={{
                                        // border: "2px solid green"
                                    }}>
                                        <Row className="text-center mt-4">
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faChalkboardTeacher} size="1x" /> 72 Lectures</h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}>Flat 18% off <FontAwesomeIcon icon={faTag} size="1x" /></h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faGrinStars} size="1x" /> 1 Free Demo</h5></Col>

                                            <Col xs={12} className="px-4 text-center">
                                                <FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStarHalfAlt} color="#FFC700" size="1x" />(4.5/5)
                                            </Col>
                                            <Col xs={12} className="my-2 px-4 text-center">
                                                {console.log(this.props)}
                                                <ButtonStyle variant="primary" onClick={this.advancePython}>Course Details</ButtonStyle>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </OverlayTrigger>
                    </Card>

                    {/* Development */}


                    <Card className="my-2" style={{
                        border: "none",
                    }}>
                        <Card.Header as="h5" style={{
                            backgroundColor: "#0F2B48",
                            color: "#fff",
                        }}>Development</Card.Header>


                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 50, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Card.Body>
                                <Row style={{
                                    border: "2px solid #aaa",
                                    // height: "50vh",
                                }}>
                                    <Col xl={3} className="my-3 text-center" style={{
                                        // border: "2px solid green",
                                        // height: "50vh",
                                    }}><Image src={MITcourse} height="200" width="auto" /></Col>
                                    <Col xl={7} className="my-2" style={{
                                        // border: "2px solid green",
                                    }}>
                                        <Card.Title className="my-3" style={{
                                            // border: "2px solid green",
                                            fontSize: "40px",
                                            fontWeight: "bold",
                                        }}>App Development for Kids</Card.Title>
                                        <Col xl={12} style={{
                                            // border: "2px solid green",
                                        }}>
                                            <Row style={{
                                                fontSize: "15px",
                                                color: "#ABABAB",
                                            }}>
                                                <Col xl={3} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faClock} size="1x" /> 60 min of Classes
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faUserGraduate} size="1x" /> Limited Student In Batch's
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faCalendar} size="1x" /> Flexible Days And Time
                                            </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={12} className="my-3" style={{
                                            // border: "2px solid green",
                                            padding: "0px",
                                            fontSize: "15px",
                                            // fontWeight: "bold",
                                        }}>
                                            <li>Over view of Object, Class, Abstraction, Encapsulation</li>
                                            <li>Over view of Inheritance, Polymorphism</li>
                                            <li>Over view of Overloading concept</li>
                                            <li>Over view of Advance concept</li>
                                        </Col>
                                    </Col>
                                    <Col xl={2} className="text-center" style={{
                                        // border: "2px solid green"
                                    }}>
                                        <Row className="text-center mt-4">
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faChalkboardTeacher} size="1x" /> 72 Lectures</h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}>Flat 18% off <FontAwesomeIcon icon={faTag} size="1x" /></h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faGrinStars} size="1x" /> 1 Free Demo</h5></Col>

                                            <Col xs={12} className="px-4 text-center">
                                                <FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStarHalfAlt} color="#FFC700" size="1x" />(4.5/5)
                                            </Col>
                                            <Col xs={12} className="my-2 px-4 text-center">
                                                <ButtonStyle variant="primary">Course Details</ButtonStyle>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </OverlayTrigger>



                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 50, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Card.Body>
                                <Row style={{
                                    border: "2px solid #aaa",
                                    // height: "50vh",
                                }}>
                                    <Col xl={3} className="my-3 text-center" style={{
                                        // border: "2px solid green",
                                        // height: "50vh",
                                    }}><Image src={MernCourse} height="200" width="auto" /></Col>
                                    <Col xl={7} className="my-2" style={{
                                        // border: "2px solid green",
                                    }}>
                                        <Card.Title className="my-3" style={{
                                            // border: "2px solid green",
                                            fontSize: "40px",
                                            fontWeight: "bold",
                                        }}>Full Stack Development for Kids</Card.Title>
                                        <Col xl={12} style={{
                                            // border: "2px solid green",
                                        }}>
                                            <Row style={{
                                                fontSize: "15px",
                                                color: "#ABABAB",
                                            }}>
                                                <Col xl={3} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faClock} size="1x" /> 60 min of Classes
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faUserGraduate} size="1x" /> Limited Student In Batch's
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faCalendar} size="1x" /> Flexible Days And Time
                                            </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={12} className="my-3" style={{
                                            // border: "2px solid green",
                                            padding: "0px",
                                            fontSize: "15px",
                                            // fontWeight: "bold",
                                        }}>
                                            <li>Over view of Object, Class, Abstraction, Encapsulation</li>
                                            <li>Over view of Inheritance, Polymorphism</li>
                                            <li>Over view of Overloading concept</li>
                                            <li>Over view of Advance concept</li>
                                        </Col>
                                    </Col>
                                    <Col xl={2} className="text-center" style={{
                                        // border: "2px solid green"
                                    }}>
                                        <Row className="text-center mt-4">
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faChalkboardTeacher} size="1x" /> 72 Lectures</h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}>Flat 18% off <FontAwesomeIcon icon={faTag} size="1x" /></h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faGrinStars} size="1x" /> 1 Free Demo</h5></Col>

                                            <Col xs={12} className="px-4 text-center">
                                                <FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStarHalfAlt} color="#FFC700" size="1x" />(4.5/5)
                                            </Col>
                                            <Col xs={12} className="my-2 px-4 text-center">
                                                <ButtonStyle variant="primary">Course Details</ButtonStyle>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </OverlayTrigger>



                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 50, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Card.Body>
                                <Row style={{
                                    border: "2px solid #aaa",
                                    // height: "50vh",
                                }}>
                                    <Col xl={3} className="my-3 text-center" style={{
                                        // border: "2px solid green",
                                        // height: "50vh",
                                    }}><Image src={GameCourse} height="200" width="auto" /></Col>
                                    <Col xl={7} className="my-2" style={{
                                        // border: "2px solid green",
                                    }}>
                                        <Card.Title className="my-3" style={{
                                            // border: "2px solid green",
                                            fontSize: "40px",
                                            fontWeight: "bold",
                                        }}>Game Development for Kids</Card.Title>
                                        <Col xl={12} style={{
                                            // border: "2px solid green",
                                        }}>
                                            <Row style={{
                                                fontSize: "15px",
                                                color: "#ABABAB",
                                            }}>
                                                <Col xl={3} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faClock} size="1x" /> 60 min of Classes
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faUserGraduate} size="1x" /> Limited Student In Batch's
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faCalendar} size="1x" /> Flexible Days And Time
                                            </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={12} className="my-3" style={{
                                            // border: "2px solid green",
                                            padding: "0px",
                                            fontSize: "15px",
                                            // fontWeight: "bold",
                                        }}>
                                            <li>Over view of Object, Class, Abstraction, Encapsulation</li>
                                            <li>Over view of Inheritance, Polymorphism</li>
                                            <li>Over view of Overloading concept</li>
                                            <li>Over view of Advance concept</li>
                                        </Col>
                                    </Col>
                                    <Col xl={2} className="text-center" style={{
                                        // border: "2px solid green"
                                    }}>
                                        <Row className="text-center mt-4">
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faChalkboardTeacher} size="1x" /> 72 Lectures</h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}>Flat 18% off <FontAwesomeIcon icon={faTag} size="1x" /></h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faGrinStars} size="1x" /> 1 Free Demo</h5></Col>

                                            <Col xs={12} className="px-4 text-center">
                                                <FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStarHalfAlt} color="#FFC700" size="1x" />(4.5/5)
                                            </Col>
                                            <Col xs={12} className="my-2 px-4 text-center">
                                                <ButtonStyle variant="primary">Course Details</ButtonStyle>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </OverlayTrigger>


                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 50, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Card.Body>
                                <Row style={{
                                    border: "2px solid #aaa",
                                    // height: "50vh",
                                }}>
                                    <Col xl={3} className="my-3 text-center" style={{
                                        // border: "2px solid green",
                                        // height: "50vh",
                                    }}><Image src={WebDesignCourse} height="200" width="auto" /></Col>
                                    <Col xl={7} className="my-2" style={{
                                        // border: "2px solid green",
                                    }}>
                                        <Card.Title className="my-3" style={{
                                            // border: "2px solid green",
                                            fontSize: "40px",
                                            fontWeight: "bold",
                                        }}>Web Designing For Kids</Card.Title>
                                        <Col xl={12} style={{
                                            // border: "2px solid green",
                                        }}>
                                            <Row style={{
                                                fontSize: "15px",
                                                color: "#ABABAB",
                                            }}>
                                                <Col xl={3} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faClock} size="1x" /> 60 min of Classes
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faUserGraduate} size="1x" /> Limited Student In Batch's
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faCalendar} size="1x" /> Flexible Days And Time
                                            </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={12} className="my-3" style={{
                                            // border: "2px solid green",
                                            padding: "0px",
                                            fontSize: "15px",
                                            // fontWeight: "bold",
                                        }}>
                                            <li>Over view of Object, Class, Abstraction, Encapsulation</li>
                                            <li>Over view of Inheritance, Polymorphism</li>
                                            <li>Over view of Overloading concept</li>
                                            <li>Over view of Advance concept</li>
                                        </Col>
                                    </Col>
                                    <Col xl={2} className="text-center" style={{
                                        // border: "2px solid green"
                                    }}>
                                        <Row className="text-center mt-4">
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faChalkboardTeacher} size="1x" /> 72 Lectures</h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}>Flat 18% off <FontAwesomeIcon icon={faTag} size="1x" /></h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faGrinStars} size="1x" /> 1 Free Demo</h5></Col>

                                            <Col xs={12} className="px-4 text-center">
                                                <FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStarHalfAlt} color="#FFC700" size="1x" />(4.5/5)
                                            </Col>
                                            <Col xs={12} className="my-2 px-4 text-center">
                                                <ButtonStyle variant="primary">Course Details</ButtonStyle>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </OverlayTrigger>


                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 50, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Card.Body>
                                <Row style={{
                                    border: "2px solid #aaa",
                                    // height: "50vh",
                                }}>
                                    <Col xl={3} className="my-3 text-center" style={{
                                        // border: "2px solid green",
                                        // height: "50vh",
                                    }}><Image src={AppCourse} height="200" width="auto" /></Col>
                                    <Col xl={7} className="my-2" style={{
                                        // border: "2px solid green",
                                    }}>
                                        <Card.Title className="my-3" style={{
                                            // border: "2px solid green",
                                            fontSize: "40px",
                                            fontWeight: "bold",
                                        }}>App Development </Card.Title>
                                        <Col xl={12} style={{
                                            // border: "2px solid green",
                                        }}>
                                            <Row style={{
                                                fontSize: "15px",
                                                color: "#ABABAB",
                                            }}>
                                                <Col xl={3} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faClock} size="1x" /> 60 min of Classes
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faUserGraduate} size="1x" /> Limited Student In Batch's
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faCalendar} size="1x" /> Flexible Days And Time
                                            </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={12} className="my-3" style={{
                                            // border: "2px solid green",
                                            padding: "0px",
                                            fontSize: "15px",
                                            // fontWeight: "bold",
                                        }}>
                                            <li>Over view of Object, Class, Abstraction, Encapsulation</li>
                                            <li>Over view of Inheritance, Polymorphism</li>
                                            <li>Over view of Overloading concept</li>
                                            <li>Over view of Advance concept</li>
                                        </Col>
                                    </Col>
                                    <Col xl={2} className="text-center" style={{
                                        // border: "2px solid green"
                                    }}>
                                        <Row className="text-center mt-4">
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faChalkboardTeacher} size="1x" /> 72 Lectures</h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}>Flat 18% off <FontAwesomeIcon icon={faTag} size="1x" /></h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faGrinStars} size="1x" /> 1 Free Demo</h5></Col>

                                            <Col xs={12} className="px-4 text-center">
                                                <FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStarHalfAlt} color="#FFC700" size="1x" />(4.5/5)
                                            </Col>
                                            <Col xs={12} className="my-2 px-4 text-center">
                                                <ButtonStyle variant="primary">Course Details</ButtonStyle>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </OverlayTrigger>


                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 50, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Card.Body>
                                <Row style={{
                                    border: "2px solid #aaa",
                                    // height: "50vh",
                                }}>
                                    <Col xl={3} className="my-3 text-center" style={{
                                        // border: "2px solid green",
                                        // height: "50vh",
                                    }}><Image src={MernCourse} height="200" width="auto" /></Col>
                                    <Col xl={7} className="my-2" style={{
                                        // border: "2px solid green",
                                    }}>
                                        <Card.Title className="my-3" style={{
                                            // border: "2px solid green",
                                            fontSize: "40px",
                                            fontWeight: "bold",
                                        }}>MERN Stack</Card.Title>
                                        <Col xl={12} style={{
                                            // border: "2px solid green",
                                        }}>
                                            <Row style={{
                                                fontSize: "15px",
                                                color: "#ABABAB",
                                            }}>
                                                <Col xl={3} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faClock} size="1x" /> 60 min of Classes
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faUserGraduate} size="1x" /> Limited Student In Batch's
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faCalendar} size="1x" /> Flexible Days And Time
                                            </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={12} className="my-3" style={{
                                            // border: "2px solid green",
                                            padding: "0px",
                                            fontSize: "15px",
                                            // fontWeight: "bold",
                                        }}>
                                            <li>Over view of Object, Class, Abstraction, Encapsulation</li>
                                            <li>Over view of Inheritance, Polymorphism</li>
                                            <li>Over view of Overloading concept</li>
                                            <li>Over view of Advance concept</li>
                                        </Col>
                                    </Col>
                                    <Col xl={2} className="text-center" style={{
                                        // border: "2px solid green"
                                    }}>
                                        <Row className="text-center mt-4">
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faChalkboardTeacher} size="1x" /> 72 Lectures</h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}>Flat 18% off <FontAwesomeIcon icon={faTag} size="1x" /></h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faGrinStars} size="1x" /> 1 Free Demo</h5></Col>

                                            <Col xs={12} className="px-4 text-center">
                                                <FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStarHalfAlt} color="#FFC700" size="1x" />(4.5/5)
                                            </Col>
                                            <Col xs={12} className="my-2 px-4 text-center">
                                                <ButtonStyle variant="primary">Course Details</ButtonStyle>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </OverlayTrigger>


                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 50, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Card.Body>
                                <Row style={{
                                    border: "2px solid #aaa",
                                    // height: "50vh",
                                }}>
                                    <Col xl={3} className="my-3 text-center" style={{
                                        // border: "2px solid green",
                                        // height: "50vh",
                                    }}><Image src={GameCourse} height="200" width="auto" /></Col>
                                    <Col xl={7} className="my-2" style={{
                                        // border: "2px solid green",
                                    }}>
                                        <Card.Title className="my-3" style={{
                                            // border: "2px solid green",
                                            fontSize: "40px",
                                            fontWeight: "bold",
                                        }}>Game Development</Card.Title>
                                        <Col xl={12} style={{
                                            // border: "2px solid green",
                                        }}>
                                            <Row style={{
                                                fontSize: "15px",
                                                color: "#ABABAB",
                                            }}>
                                                <Col xl={3} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faClock} size="1x" /> 60 min of Classes
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faUserGraduate} size="1x" /> Limited Student In Batch's
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faCalendar} size="1x" /> Flexible Days And Time
                                            </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={12} className="my-3" style={{
                                            // border: "2px solid green",
                                            padding: "0px",
                                            fontSize: "15px",
                                            // fontWeight: "bold",
                                        }}>
                                            <li>Over view of Object, Class, Abstraction, Encapsulation</li>
                                            <li>Over view of Inheritance, Polymorphism</li>
                                            <li>Over view of Overloading concept</li>
                                            <li>Over view of Advance concept</li>
                                        </Col>
                                    </Col>
                                    <Col xl={2} className="text-center" style={{
                                        // border: "2px solid green"
                                    }}>
                                        <Row className="text-center mt-4">
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faChalkboardTeacher} size="1x" /> 72 Lectures</h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}>Flat 18% off <FontAwesomeIcon icon={faTag} size="1x" /></h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faGrinStars} size="1x" /> 1 Free Demo</h5></Col>

                                            <Col xs={12} className="px-4 text-center">
                                                <FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStarHalfAlt} color="#FFC700" size="1x" />(4.5/5)
                                            </Col>
                                            <Col xs={12} className="my-2 px-4 text-center">
                                                <ButtonStyle variant="primary">Course Details</ButtonStyle>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </OverlayTrigger>



                       
                    </Card>

                    {/* Advance */}

                    <Card className="my-2" style={{
                        border: "none",
                    }}>
                        <Card.Header as="h5" style={{
                            backgroundColor: "#0F2B48",
                            color: "#fff",
                        }}>Advance</Card.Header>


                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 50, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Card.Body>
                                <Row style={{
                                    border: "2px solid #aaa",
                                    // height: "50vh",
                                }}>
                                    <Col xl={3} className="my-3 text-center" style={{
                                        // border: "2px solid green",
                                        // height: "50vh",
                                    }}><Image src={MachineLearningCourse} height="200" width="auto" /></Col>
                                    <Col xl={7} className="my-2" style={{
                                        // border: "2px solid green",
                                    }}>
                                        <Card.Title className="my-3" style={{
                                            // border: "2px solid green",
                                            fontSize: "40px",
                                            fontWeight: "bold",
                                        }}>Machine Learning </Card.Title>
                                        <Col xl={12} style={{
                                            // border: "2px solid green",
                                        }}>
                                            <Row style={{
                                                fontSize: "15px",
                                                color: "#ABABAB",
                                            }}>
                                                <Col xl={3} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faClock} size="1x" /> 60 min of Classes
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faUserGraduate} size="1x" /> Limited Student In Batch's
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faCalendar} size="1x" /> Flexible Days And Time
                                            </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={12} className="my-3" style={{
                                            // border: "2px solid green",
                                            padding: "0px",
                                            fontSize: "15px",
                                            // fontWeight: "bold",
                                        }}>
                                            <li>Over view of Object, Class, Abstraction, Encapsulation</li>
                                            <li>Over view of Inheritance, Polymorphism</li>
                                            <li>Over view of Overloading concept</li>
                                            <li>Over view of Advance concept</li>
                                        </Col>
                                    </Col>
                                    <Col xl={2} className="text-center" style={{
                                        // border: "2px solid green"
                                    }}>
                                        <Row className="text-center mt-4">
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faChalkboardTeacher} size="1x" /> 72 Lectures</h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}>Flat 18% off <FontAwesomeIcon icon={faTag} size="1x" /></h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faGrinStars} size="1x" /> 1 Free Demo</h5></Col>

                                            <Col xs={12} className="px-4 text-center">
                                                <FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStarHalfAlt} color="#FFC700" size="1x" />(4.5/5)
                                            </Col>
                                            <Col xs={12} className="my-2 px-4 text-center">
                                                <ButtonStyle variant="primary">Course Details</ButtonStyle>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </OverlayTrigger>


                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 50, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Card.Body>
                                <Row style={{
                                    border: "2px solid #aaa",
                                    // height: "50vh",
                                }}>
                                    <Col xl={3} className="my-3 text-center" style={{
                                        // border: "2px solid green",
                                        // height: "50vh",
                                    }}><Image src={DataStructureCourse} height="200" width="auto" /></Col>
                                    <Col xl={7} className="my-2" style={{
                                        // border: "2px solid green",
                                    }}>
                                        <Card.Title className="my-3" style={{
                                            // border: "2px solid green",
                                            fontSize: "40px",
                                            fontWeight: "bold",
                                        }}>Data Structure And Algorithm </Card.Title>
                                        <Col xl={12} style={{
                                            // border: "2px solid green",
                                        }}>
                                            <Row style={{
                                                fontSize: "15px",
                                                color: "#ABABAB",
                                            }}>
                                                <Col xl={3} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faClock} size="1x" /> 60 min of Classes
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faUserGraduate} size="1x" /> Limited Student In Batch's
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faCalendar} size="1x" /> Flexible Days And Time
                                            </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={12} className="my-3" style={{
                                            // border: "2px solid green",
                                            padding: "0px",
                                            fontSize: "15px",
                                            // fontWeight: "bold",
                                        }}>
                                            <li>Over view of Object, Class, Abstraction, Encapsulation</li>
                                            <li>Over view of Inheritance, Polymorphism</li>
                                            <li>Over view of Overloading concept</li>
                                            <li>Over view of Advance concept</li>
                                        </Col>
                                    </Col>
                                    <Col xl={2} className="text-center" style={{
                                        // border: "2px solid green"
                                    }}>
                                        <Row className="text-center mt-4">
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faChalkboardTeacher} size="1x" /> 72 Lectures</h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}>Flat 18% off <FontAwesomeIcon icon={faTag} size="1x" /></h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faGrinStars} size="1x" /> 1 Free Demo</h5></Col>

                                            <Col xs={12} className="px-4 text-center">
                                                <FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStarHalfAlt} color="#FFC700" size="1x" />(4.5/5)
                                            </Col>
                                            <Col xs={12} className="my-2 px-4 text-center">
                                                <ButtonStyle variant="primary">Course Details</ButtonStyle>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </OverlayTrigger>


                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 50, hide: 400 }}
                            overlay={renderTooltip}
                        >
                            <Card.Body>
                                <Row style={{
                                    border: "2px solid #aaa",
                                    // height: "50vh",
                                }}>
                                    <Col xl={3} className="my-3 text-center" style={{
                                        // border: "2px solid green",
                                        // height: "50vh",
                                    }}><Image src={EthicalHackingCourse} height="200" width="auto" /></Col>
                                    <Col xl={7} className="my-2" style={{
                                        // border: "2px solid green",
                                    }}>
                                        <Card.Title className="my-3" style={{
                                            // border: "2px solid green",
                                            fontSize: "40px",
                                            fontWeight: "bold",
                                        }}>Ethical Hacking </Card.Title>
                                        <Col xl={12} style={{
                                            // border: "2px solid green",
                                        }}>
                                            <Row style={{
                                                fontSize: "15px",
                                                color: "#ABABAB",
                                            }}>
                                                <Col xl={3} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faClock} size="1x" /> 60 min of Classes
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faUserGraduate} size="1x" /> Limited Student In Batch's
                                            </Col>
                                                <Col xl={4} style={{
                                                    // border: "2px solid green",
                                                    padding: "0px",
                                                }}><FontAwesomeIcon icon={faCalendar} size="1x" /> Flexible Days And Time
                                            </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={12} className="my-3" style={{
                                            // border: "2px solid green",
                                            padding: "0px",
                                            fontSize: "15px",
                                            // fontWeight: "bold",
                                        }}>
                                            <li>Over view of Object, Class, Abstraction, Encapsulation</li>
                                            <li>Over view of Inheritance, Polymorphism</li>
                                            <li>Over view of Overloading concept</li>
                                            <li>Over view of Advance concept</li>
                                        </Col>
                                    </Col>
                                    <Col xl={2} className="text-center" style={{
                                        // border: "2px solid green"
                                    }}>
                                        <Row className="text-center mt-4">
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faChalkboardTeacher} size="1x" /> 72 Lectures</h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}>Flat 18% off <FontAwesomeIcon icon={faTag} size="1x" /></h5></Col>
                                            <Col xs={12}><h5 style={{
                                                // padding: "10px",
                                                // border:"2px solid red",
                                                fontSize: "20px",
                                                fontWeight: "bold",

                                            }}><FontAwesomeIcon icon={faGrinStars} size="1x" /> 1 Free Demo</h5></Col>

                                            <Col xs={12} className="px-4 text-center">
                                                <FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStar} color="#FFC700" size="1x" /><FontAwesomeIcon icon={faStarHalfAlt} color="#FFC700" size="1x" />(4.5/5)
                                            </Col>
                                            <Col xs={12} className="my-2 px-4 text-center">
                                                <ButtonStyle variant="primary">Course Details</ButtonStyle>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </OverlayTrigger>



                        
                    </Card>


                </Container>


            </div >
        );
    }
}


export default AllCourses;