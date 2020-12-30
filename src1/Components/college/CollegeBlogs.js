import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import blog1 from "../../images/blog1.png"
import blog2 from "../../images/blog2.png"
import blog3 from "../../images/blog3.png"
import blog4 from "../../images/blog4.png"
import blog5 from "../../images/blog5.png"
import blog6 from "../../images/blog6.png"
import { Fade, Zoom } from 'react-reveal';


class CollegeBlogs extends React.Component {
    render() {

        return (
            <div style={{
                // border: "2px solid red",
                backgroundColor: "#c5d8ff",
            }}>
                <Zoom>
                    <Container className="pt-2">
                        <h3 className="my-4" style={{
                            textAlign: "center",
                            fontSize: "40px",
                            fontWeight: "bolder",
                            fontFamily: "'Nunito', sans-serif",
                        }}>Blogs And Articles</h3>
                        <Row style={{
                            // border: "2px solid red",
                            height: "auto",
                        }}>
                            <Col xs={12} xl={4} style={{
                                // border: "2px solid red",
                                // height: "50vh",
                            }}>
                                <a href="#as">
                                    <Image className="px-4 py-4" src={blog1} fluid height="auto" width="auto" style={{
                                        // textAlign: "center", 
                                        // margin: "2%", 
                                    }} />
                                </a>

                            </Col>
                            <Col xs={12} xl={4} style={{
                                // border: "2px solid red",
                                // height: "50vh",
                            }}>
                                <a href="#as">
                                    <Image className="px-4 py-4" src={blog2} fluid height="auto" width="auto" style={{
                                        // textAlign: "center", 
                                        // margin: "2%", 
                                    }} />
                                </a>
                            </Col>
                            <Col xs={12} xl={4} style={{
                                // border: "2px solid red",
                                // height: "50vh",
                            }}>
                                <a href="#as">
                                    <Image className="px-4 py-4" src={blog3} fluid height="auto" width="auto" style={{
                                        // textAlign: "center", 
                                        // margin: "2%", 
                                    }} />
                                </a>

                            </Col>
                            <Col xs={12} xl={4} style={{
                                // border: "2px solid red",
                                // height: "50vh",
                            }}>
                                <a href="#as">
                                    <Image className="px-4 py-4" src={blog4} fluid height="auto" width="auto" style={{
                                        // textAlign: "center", 
                                        // margin: "2%", 
                                    }} />
                                </a>

                            </Col>
                            <Col xs={12} xl={4} style={{
                                // border: "2px solid red",
                                // height: "50vh",
                            }}>
                                <a href="#as">
                                    <Image className="px-4 py-4" src={blog5} fluid height="auto" width="auto" style={{
                                        // textAlign: "center", 
                                        // margin: "2%", 
                                    }} />
                                </a>

                            </Col>
                            <Col xs={12} xl={4} style={{
                                // border: "2px solid red",
                                // height: "50vh",
                            }}>
                                <a href="#as">
                                    <Image className="px-4 py-4" src={blog6} fluid height="auto" width="auto" style={{
                                        // textAlign: "center", 
                                        // margin: "2%", 
                                    }} />
                                </a>

                            </Col>

                        </Row>



                    </Container>
                </Zoom>
            </div >
        );
    }
}


export default CollegeBlogs;