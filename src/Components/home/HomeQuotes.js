import React from "react";
import BgMainArea from "../../images/BgMainArea.png"
import { Row, Col, Container, Image } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import About from "../../images/About.png"
import Button from 'react-bootstrap/Button'
import { Fade, Zoom } from 'react-reveal';
import GirlOnMainArea from "../../images/GirlOnMainArea.png"
import HappyImage from "../../images/HappyImage.png"
import HappyImage2 from "../../images/HappyImage2.png"
import HappyImage3 from "../../images/HappyImage3.png"



class HomeQuotes extends React.Component {
    render() {

        return (
            <div>
                <Container  style={{
                    // border: "2px solid #aaa",
                    borderRadius: "10px",
                    // height: "auto",
                    color: "#08192B",
                    fontFamily: "'Nunito', sans-serif",
                }}>
                    <Zoom>
                        <Container className="py-4" style={{
                            // border: "2px solid pink",
                            // height: "50vh",
                        }}>
                            <Row>
                                <Col xs={12} xl={4} style={{
                                    // border: "2px solid pink",
                                    // height: "50vh",
                                }}>
                                    <Image className="px-4 py-4" src={HappyImage} fluid height="auto" width="auto" style={{
                                        // textAlign: "center",
                                        // padding: "2%",
                                    }} />
                                </Col>
                                <Col xs={12} xl={8} style={{
                                    // border: "2px solid green",
                                    // height: "50vh",
                                }}>
                                    <Row style={{
                                        // border: "2px solid green",
                                        // height: "50vh",
                                    }}>
                                        <h3 className="mt-3 pt-3" style={{
                                            fontSize: "15px",
                                            fontWeight: "800",
                                        }}>
                                            Get 2 Years Ahead
                                    </h3>
                                    </Row>
                                    <Row>
                                        <h1 className="my-1 py-1 pl-4" style={{
                                            fontSize: "30px",
                                            fontWeight: "800",
                                            borderLeft: "10px solid #091A2C",
                                            borderRadius: "10px",
                                        }}>
                                            A perfect platform<br></br> to become the next creator of Programming world.
                                           
                                    </h1>
                                        <h5 className="my-2 py-2" style={{
                                            fontSize: "15px",
                                            fontWeight: "800",
                                        }}>
                                            We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world. We provide one to one sessions for all types of doubt clarifications. 
                                            
                                    </h5>

                                    </Row>
                                </Col>
                            </Row>

                        </Container>


                       

                        <Container className="text-right my-4" style={{
                            // border: "2px solid pink",
                            // height: "50vh",
                        }}>
                            <Row>

                                <Col xs={12} xl={8} style={{
                                    // border: "2px solid green",
                                    // height: "50vh",
                                }}>
                                    <Row xl={12} classname="text-right" style={{
                                        // border: "2px solid green",
                                        // height: "50vh",
                                    }}>
                                        <p className="text-right mt-3 pt-3" style={{
                                            fontSize: "15px",
                                            fontWeight: "800",
                                            // border:"2px solid red",
                                            width: "100vh"
                                        }}>
                                            Get 2 Years Ahead
                                    </p>
                                        <h1 className=" pr-4" style={{
                                            fontSize: "30px",
                                            fontWeight: "800",
                                            borderRight: "10px solid #091A2C",
                                            borderRadius: "10px",
                                            // border: "2px solid pink",
                                            width:"100vh"
                                        }}>
                                             Experts<br></br> Thats Explore Your Potential
                                    </h1>
                                        <h5 className="my-2 py-2" style={{
                                            fontSize: "15px",
                                            fontWeight: "800",
                                        }}>
                                            We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world. We provide one to one sessions for all types of doubt clarifications.
                                    </h5>

                                    </Row>
                                </Col>
                                <Col xs={12} xl={4} style={{
                                    // border: "2px solid pink",
                                    // height: "50vh",
                                }}>
                                    <Image className="px-4 py-4" src={HappyImage3} fluid height="auto" width="auto" style={{
                                        // textAlign: "center",
                                        // padding: "2%",
                                    }} />
                                </Col>
                            </Row>

                        </Container>


                        <Container className="py-4" style={{
                            // border: "2px solid pink",
                            // height: "50vh",
                        }}>
                            <Row>
                                <Col xs={12} xl={4} style={{
                                    // border: "2px solid pink",
                                    // height: "50vh",
                                }}>
                                    <Image className="px-4 py-4" src={HappyImage2} fluid height="auto" width="auto" style={{
                                        // textAlign: "center",
                                        // padding: "2%",
                                    }} />
                                </Col>
                                <Col xs={12} xl={8} style={{
                                    // border: "2px solid green",
                                    // height: "50vh",
                                }}>
                                    <Row style={{
                                        // border: "2px solid green",
                                        // height: "50vh",
                                    }}>
                                        <h3 className="mt-3 pt-3" style={{
                                            fontSize: "15px",
                                            fontWeight: "800",
                                        }}>
                                            Get 2 Years Ahead
                                    </h3>
                                    </Row>
                                    <Row>
                                        <h1 className="my-1 py-1 pl-4" style={{
                                            fontSize: "30px",
                                            fontWeight: "800",
                                            borderLeft: "10px solid #091A2C",
                                            borderRadius: "10px",
                                        }}>
                                            Explore Enjoy<br></br> and Grow
                                           
                                    </h1>
                                        <h5 className="my-2 py-2" style={{
                                            fontSize: "15px",
                                            fontWeight: "800",
                                        }}>
                                            We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world. We provide one to one sessions for all types of doubt clarifications. 
                                            
                                    </h5>

                                    </Row>
                                </Col>
                            </Row>

                        </Container>
                    </Zoom>
                </Container>



            </div >


        )
    }
}
export default HomeQuotes;