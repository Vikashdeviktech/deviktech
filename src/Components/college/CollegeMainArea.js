import React from 'react'
import collegeImage from "../../images/collegeImage.png"
import {Container,Row,Col,Form,Image,CardDeck,Card} from 'react-bootstrap'
import { Zoom } from 'react-reveal';
import C from "../../images/C.png"
import Cplus from "../../images/C++wbg.png"
import java from "../../images/java_wbg.png"
import javascript from "../../images/javascript_wbg.png"
import html from "../../images/html_wbg.png"
import python from "../../images/python_wbg.png"
import node from "../../images/node_wbg.png"
import mongo from "../../images/mongo_wbg.png"
import ScratchLogo from "../../images/ScratchLogo.png"
import MitLogo from "../../images/MitLogo.png"
import UnityLogo from "../../images/UnityLogo.png"
import EthicalHacking from "../../images/EthicalHacking.png"
import MERNLogo from "../../images/MERNLogo.png"
import WebDesign from "../../images/WebDesign.png"
import AnimationLogo from "../../images/AnimationLogo.png"


class CollegeMainArea extends React.Component {
    render() {

        return (
            <div>
                <Zoom>

                </Zoom>
                <Container className="py-4" fluid d-flex flex-column style={{
                    // backgroundImage: 'url(' + BgMainArea + ')',
                    backgroundAttachment: "fixed",
                    // border: "2px solid red",
                    backgroundSize: "cover",
                    backgroundColor:"#0F2B48",
                    height: "auto",
                }}>
                    <Row>

                        <Col xs={12} md={12} lg={12} xl={6} style={{
                            // border: "2px solid black",
                            height: "auto",
                            padding: "0px",
                        }}>
                            <Zoom>
                                <Col xs={12}>
                                    <h1 style={{
                                        // border: "2px solid black",
                                        height: "auto",
                                        margin: "5% 10% 0% 10%",
                                        // color: "#08192B",
                                        color:"#D3DEEB",
                                        fontWeight: "800",
                                        fontSize: "70px",
                                        lineHeight: "65px",
                                        letterSpacing: "0.02em",
                                        // textTransform: "uppercase",
                                        fontFamily: "'Nunito', sans-serif",
                                    }}>College Program
                            </h1>
                                </Col>

                                <Col xs={12}>
                                    <p style={{
                                        // border: "2px solid black",
                                        height: "auto",
                                        margin: "5% 10% 1% 10%",
                                        // color: "#08192B",
                                        color:"#D3DEEB",
                                        fontWeight: "700",
                                        fontFamily: "'Nunito', sans-serif",
                                    }}>DevikTech students are trained in such a way that they are always 3 years ahead of the students of their age. We at DevikTech provide a wide range of courses to empower students from different fields. We provide Live sessions by the industry experts and project which help our students in the real world.</p>
                                </Col>
                                <Col xs={12}>
                                    <Form style={{
                                        border: "2px solid #D3DEEB",
                                        // boxShadow: "5px 0px 20px 5px #4141413a",
                                        borderRadius: "10px",
                                        backgroundColor: "#0F2B48",
                                        padding: "5%",
                                        height: "auto",
                                        margin: "5% 10% 4% 10%",
                                        color: "#08192B",
                                        fontWeight: "700",
                                        fontFamily: "'Nunito', sans-serif",
                                    }}>
                                        <CardDeck className="my-4">
                                            <Card>
                                                <a href="https://en.wikipedia.org/wiki/C_(programming_language)">
                                                    <Card.Img className="d-block h-100 w-100"
                                                        src={MERNLogo}
                                                        alt="Third slide" /></a>
                                            </Card>
                                            <Card>
                                                <a href="https://en.wikipedia.org/wiki/C_(programming_language)">
                                                    <Card.Img className="d-block h-100 w-100"
                                                        src={Cplus}
                                                        alt="Third slide" />
                                                </a>

                                            </Card>
                                            <Card>
                                                <a href="https://en.wikipedia.org/wiki/C_(programming_language)">
                                                    <Card.Img className="d-block h-100 w-100"
                                                        src={java}
                                                        alt="Third slide" />
                                                </a>
                                            </Card>
                                            <Card>
                                                <a href="https://en.wikipedia.org/wiki/C_(programming_language)">
                                                    <Card.Img className="d-block h-100 w-100"
                                                        src={javascript}
                                                        alt="Third slide" />
                                                </a>
                                            </Card>

                                        </CardDeck>
                                        <CardDeck className="my-4">
                                            <Card>
                                                <a href="https://en.wikipedia.org/wiki/C_(programming_language)">
                                                    <Card.Img className="d-block h-100 w-100"
                                                        src={AnimationLogo}
                                                        alt="Third slide" />
                                                </a>

                                            </Card>
                                            <Card>
                                                <a href="https://en.wikipedia.org/wiki/C_(programming_language)">
                                                    <Card.Img className="d-block h-100 w-100"
                                                        src={node}
                                                        alt="Third slide" />
                                                </a>

                                            </Card>
                                            <Card>
                                                <a href="https://en.wikipedia.org/wiki/C_(programming_language)">
                                                    <Card.Img className="d-block h-100 w-100"
                                                        src={python}
                                                        alt="Third slide" />
                                                </a>

                                            </Card>
                                            <Card>
                                                <a href="https://en.wikipedia.org/wiki/C_(programming_language)">
                                                    <Card.Img className="d-block h-100 w-100"
                                                        src={mongo}
                                                        alt="Third slide" />
                                                </a>

                                            </Card>

                                        </CardDeck>
                                        {/* <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Enter Email For Latest Update</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                    </Form.Text>
                                        </Form.Group>
                                        <Form.Group>
                                            <label>*Hurry Only Few Seats Avaialble</label>
                                        </Form.Group>
                                        <Button style={{ backgroundColor: "#0F4FCD" }} type="submit">
                                            Get Updates
                                </Button> */}
                                    </Form>
                                </Col>
                            </Zoom>




                        </Col>
                        <Col xs={12} md={12} lg={12} xl={6} style={{
                            // border: "2px solid black",
                            height: "auto",
                        }}>
                            <Zoom>
                                <Image className="px-4 py-4" src={collegeImage} fluid height="auto" width="auto" style={{ textAlign: "center", }} />
                            </Zoom>

                            {/* <img src={GirlOnMainArea} height="550px" width="600px"></img> */}
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}


export default CollegeMainArea;