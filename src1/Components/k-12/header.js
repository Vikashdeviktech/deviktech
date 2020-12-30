import React from 'react';
import { Container, Row, Col, Image, Card, Form, CardDeck } from 'react-bootstrap';
import About from '../aboutus/AboutUs';
import { Fade, Zoom } from 'react-reveal';
import collegeImage900 from "../../images/collegeImage900.png"
import C from "../../images/C.png"
import Cplus from "../../images/C++wbg.png"
import java from "../../images/java_wbg.png"
import MERNLogo from "../../images/MERNLogo.png"
import WebDesign from "../../images/WebDesign.png"
import javascript from "../../images/javascript_wbg.png"
import ScratchLogo from "../../images/ScratchLogo.png"
import MitLogo from "../../images/MitLogo.png"
import html from "../../images/html_wbg.png"
import python from "../../images/python_wbg.png"
import node from "../../images/node_wbg.png"
import mongo from "../../images/mongo_wbg.png"

export default function Header() {
    return (
        <div>
            <Container className="py-4" fluid d-flex flex-column style={{
                // backgroundImage: 'url(' + BgMainArea + ')',
                backgroundAttachment: "fixed",
                // border: "2px solid red",
                backgroundColor:"#0F2B48",
                backgroundSize: "cover",
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
                                    fontWeight: "800",
                                    fontSize: "70px",
                                    lineHeight: "65px",
                                    letterSpacing: "0.02em",
                                    // textTransform: "uppercase",
                                    fontFamily: "'Nunito', sans-serif",
                                    color:"#D3DEEB",
                                }}>School Program
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
                                    // border: "2px solid black",
                                    boxShadow: "2px 0px 10px 2px #F3F3F3",
                                    borderRadius: "10px",
                                    backgroundColor: "F3F3F3",
                                    padding: "5%",
                                    height: "auto",
                                    margin: "5% 10% 4% 10%",
                                    // color: "#08192B",
                                    color:"#D3DEEB",
                                    fontWeight: "700",
                                    fontFamily: "'Nunito', sans-serif",
                                }}>
                                    <CardDeck className="my-4">
                                        <Card>
                                            <a href="https://en.wikipedia.org/wiki/C_(programming_language)">
                                                <Card.Img className="d-block h-100 w-100"
                                                    src={ScratchLogo}
                                                    alt="Third slide" /></a>
                                        </Card>
                                        <Card>
                                            <a href="https://en.wikipedia.org/wiki/C_(programming_language)">
                                                <Card.Img className="d-block h-100 w-100"
                                                    src={MitLogo}
                                                    alt="Third slide" />
                                            </a>

                                        </Card>
                                        <Card>
                                            <a href="https://en.wikipedia.org/wiki/C_(programming_language)">
                                                <Card.Img className="d-block h-100 w-100"
                                                    src={WebDesign}
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
                                                    src={html}
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
                            <Image className="px-4 py-4" src={collegeImage900} fluid height="auto" width="auto" style={{ textAlign: "center", }} />
                        </Zoom>

                        {/* <img src={GirlOnMainArea} height="550px" width="600px"></img> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )


}