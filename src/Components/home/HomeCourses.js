import React from "react";
import CardDeck from 'react-bootstrap/CardDeck'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Fade, Zoom } from 'react-reveal';
import collegeImage from "../../images/collegeImage.png"
import collegeImage900 from "../../images/collegeImage900.png"


class HomeCourses extends React.Component {
    render() {

        return (
            <div style={{
                // border:"2px solid red",
                fontFamily: "'Nunito', sans-serif",
            }} >
                <h3 className="my-4 py-4" style={{
                    textAlign: "center",
                    fontSize: "40px",
                    fontWeight: "bolder",
                    fontFamily: "'Nunito', sans-serif",
                }}>Our Programs</h3>
                <Container>
                    {/* <Fade right>
                        <h3 className="my-4" style={{
                            textAlign: "center",
                            fontSize: "40px",
                            fontWeight: "bolder",
                            fontFamily: "'Nunito', sans-serif",
                        }}>We Cover Both</h3>
                    </Fade> */}

                    <CardDeck className="mb-2 pb-2">
                    <Card style={{
                            borderRadius:"10px",
                            backgroundColor: "#091A2C",
                            color:"#fff",
                        }}>
                            <Fade left>
                                <Image className="px-4 py-4" src={collegeImage} fluid height="auto" width="auto" style={{
                                    // border: "2px solid red",
                                    backgroundColor: "#0F2B48",
                                    borderRadius:"10px",
                                }} />
                                <Card.Body>
                                    <Card.Title style={{
                                        textAlign: "center"
                                    }}>School Program
                                </Card.Title>
                                    <Card.Text style={{
                                        textAlign: "center"
                                    }}>
                                        <Button style={{ backgroundColor: "#091A2C",color:"#fff",border:"2px solid #fff",  }} type="submit">
                                            Know More
                                </Button>
                                    </Card.Text>
                                </Card.Body>
                            </Fade>

                        </Card>
                        

                        <Card style={{
                            borderRadius:"10px",
                            backgroundColor: "#091A2C",
                            color:"#fff",
                        }}>
                            <Fade right>
                                <Image className="px-4 py-4" src={collegeImage900} fluid height="auto" width="auto" style={{
                                    // border: "2px solid red",
                                    backgroundColor: "#0F2B48",
                                    borderRadius:"10px",
                                }} />
                                <Card.Body>
                                    <Card.Title style={{
                                        textAlign: "center"
                                    }}>College Program
                                </Card.Title>
                                    <Card.Text style={{
                                        textAlign: "center"
                                    }}>
                                        <Button style={{ backgroundColor: "#091A2C",color:"#fff",border:"2px solid #fff",  }} type="submit">
                                            Know More
                                </Button>
                                    </Card.Text>
                                </Card.Body>
                            </Fade>

                        </Card>



                    </CardDeck>
                </Container>




            </div>


        )
    }
}
export default HomeCourses;