import React from 'react';
import { Container, Card, CardDeck, Row } from 'react-bootstrap'
import { Zoom } from 'react-reveal';
import About from "../../images/About.png"
import About34 from "../../images/About34.png"
import About4a from "../../images/About4.png"
import About3a from "../../images/About3.png"
import About2 from "../../images/Sliders1.jpg"
import About3 from "../../images/Sliders2.jpg"
import About4 from "../../images/Sliders3.jpg"
import About5 from "../../images/Sliders4.jpg"



class AboutUsModel extends React.Component {
    render() {
        return (
            <div className="py-4" style={{
                backgroundColor: "#E5F5FF",
            }}>
                <Zoom>
                    <Container className="my-4">
                        <h3 className="my-4" style={{
                            textAlign: "center",
                            fontSize: "40px",
                            fontWeight: "bolder",
                            fontFamily: "'Nunito', sans-serif",
                            // backgroundColor:"#cfd9e0",
                        }}>Our Vision</h3>
                        <CardDeck className="mb-4">
                            <Card>
                                {/* <Card.Img className="d-block w-100"
                                    src={About}
                                    alt="Third slide" /> */}
                                <Row style={{
                                    backgroundImage: 'url(' + About2 + ')',
                                    backgroundSize: "cover",
                                    height: "20vh",
                                    // borderRadius:"20px",
                                    margin:"1px",
                                }}></Row>
                                <Card.Body>
                                    <Card.Title>Vision 1</Card.Title>
                                    <Card.Text>
                                    Our vision is a world where a coding competition does not requires any age limitation.
                            </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                {/* <Card.Img className="d-block w-100"
                                    src={About}
                                    alt="Third slide" /> */}
                                    <Row style={{
                                    backgroundImage: 'url(' + About3 + ')',
                                    backgroundSize: "cover",
                                    height: "20vh",
                                    // borderRadius:"20px",
                                    margin:"1px",
                                }}></Row>
                                <Card.Body>
                                    <Card.Title>Vision 2</Card.Title>
                                    <Card.Text>
                                    To provide a world-class qualification in coding.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                {/* <Card.Img className="d-block w-100"
                                    src={About}
                                    alt="Third slide" /> */}
                                    <Row style={{
                                    backgroundImage: 'url(' + About4 + ')',
                                    backgroundSize: "cover",
                                    height: "20vh",
                                    // borderRadius:"20px",
                                    margin:"1px",
                                }}></Row>
                                <Card.Body>
                                    <Card.Title>Vision 3</Card.Title>
                                    <Card.Text>
                                        To create an explorable, enjoyable learning environment where anyone can learn to code without any prior exposure to coding to achieve the growth in career life.
                            </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>

                        <CardDeck>
                            <Card>
                                <Card.Img className="d-block w-100"
                                    src={About34}
                                    alt="Third slide" style={{
                                        borderRadius:"0px",
                                    }} />
                                <Card.Body>
                                    <Card.Title>Vision 4</Card.Title>
                                    <Card.Text>
                                        Our vision is to fill the knowledge gap between all ages to create a world where a competition does not requires any age limitation.
                            </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img className="d-block w-100"
                                    src={About3a}
                                    alt="Third slide" style={{
                                        borderRadius:"0px",
                                    }}/>
                                <Card.Body>
                                    <Card.Title>Vision 5</Card.Title>
                                    <Card.Text>
                                        Our vision is to fill the skill and quality gap of whole generation to live in the world where competition does not require any age limitation.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img className="d-block w-100"
                                    src={About4a}
                                    alt="Third slide" style={{
                                        borderRadius:"0px",
                                    }} />
                                <Card.Body>
                                    <Card.Title>Vision 6</Card.Title>
                                    <Card.Text>
                                        Our vision is to fill the Employability gap of whole generation and to decrease the unemployment rate of the world.
                            </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Container>
                </Zoom>

            </div>
        )
    }
}
export default AboutUsModel;