import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import About from "../../images/About.png"
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'




class HomeSlider extends React.Component {
    render() {

        return (
            <div>
                <Container className="my-4">
                    <h3 className="my-4" style={{
                        textAlign: "center",
                        fontSize: "40px",
                        fontWeight: "bolder",
                        fontFamily: "'Nunito', sans-serif",
                    }}>Testimonials</h3>
                    <Carousel>
                        <Carousel.Item>
                            <CardDeck>
                                <Card>
                                    <Card.Img className="d-block w-100"
                                        src={About}
                                        alt="Third slide" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
                            </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card>
                                    <Card.Img className="d-block w-100"
                                        src={About}
                                        alt="Third slide" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card>
                                    <Card.Img className="d-block w-100"
                                        src={About}
                                        alt="Third slide" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This card has even longer content than the first to
                                            show that equal height action.
                            </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                            </CardDeck>
                        </Carousel.Item>
                        <Carousel.Item>
                            <CardDeck>
                                <Card>
                                    <Card.Img className="d-block w-100"
                                        src={About}
                                        alt="Third slide" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
                            </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card>
                                    <Card.Img className="d-block w-100"
                                        src={About}
                                        alt="Third slide" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                                <Card>
                                    <Card.Img className="d-block w-100"
                                        src={About}
                                        alt="Third slide" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This card has even longer content than the first to
                                            show that equal height action.
                            </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
                            </CardDeck>
                        </Carousel.Item>

                    </Carousel>
                </Container>






            </div>


        )
    }
}
export default HomeSlider;