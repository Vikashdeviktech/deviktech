import React from 'react'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import About from "../../images/About.png"
import About1 from "../../images/1.png"
import About2 from "../../images/2.png"
import About3 from "../../images/3.png"
import About4 from "../../images/4.png"
import About5 from "../../images/5.png"
import About6 from "../../images/6.png"
import { Fade, Zoom } from 'react-reveal';


class CollegeDifferent extends React.Component {
    render() {

        return (
            <div>
                <Zoom>
                    <Container className="my-4">
                        <h3 className="my-4" style={{
                            textAlign: "center",
                            fontSize: "40px",
                            fontWeight: "bolder",
                            fontFamily: "'Nunito', sans-serif",
                        }}>How Are We Different</h3>
                        <CardDeck className="mb-4">
                            <Card>
                                <Card.Img className="d-block w-100"
                                    src={About2}
                                    alt="Third slide" />
                                <Card.Body>
                                    <Card.Title>Get Certified</Card.Title>
                                    <Card.Text>
                                    Having a secured certification will take you ahead of others.
                            </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img className="d-block w-100"
                                    src={About3}
                                    alt="Third slide" />
                                <Card.Body>
                                    <Card.Title>Get Mentor Support</Card.Title>
                                    <Card.Text>
                                    Having an all time available mentor is like cherry on top of cake.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img className="d-block w-100"
                                    src={About4}
                                    alt="Third slide" />
                                <Card.Body>
                                    <Card.Title>Exceptional Faculty</Card.Title>
                                    <Card.Text>
                                    Having right people around at right time is must to excel in career.
                            </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                        <CardDeck className="mb-4">
                            <Card>
                                <Card.Img className="d-block w-100"
                                    src={About5}
                                    alt="Third slide" />
                                <Card.Body>
                                    <Card.Title>Course Curriculum</Card.Title>
                                    <Card.Text>
                                    Having a proper course curriculum will make you prepare in the first place.
                            </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img className="d-block w-100"
                                    src={About6}
                                    alt="Third slide" />
                                <Card.Body>
                                    <Card.Title>Get Placement</Card.Title>
                                    <Card.Text>
                                    All you need is commitment to work which will lead you to get placement.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img className="d-block w-100"
                                    src={About1}
                                    alt="Third slide" />
                                <Card.Body>
                                    <Card.Title>Codezen</Card.Title>
                                    <Card.Text>
                                    Codezen
                            </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>

                        
                    </Container>
                </Zoom>
            </div >
        );
    }
}


export default CollegeDifferent;