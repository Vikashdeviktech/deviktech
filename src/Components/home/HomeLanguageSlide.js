import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import About from "../../images/About.png"
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
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
import Bootstrap from "../../images/BootstrapLogo.png"
import CSSLogo from "../../images/CSSLogo.png"


class HomeLanguageSlide extends React.Component {
    render() {

        return (
            <div >
                
                <Container className="my-4 py-4" style={{
                boxShadow: "5px 0px 20px 5px #4141413a",
                borderRadius: "10px",
            }}>
                {/* <h3 className="pb-3" style={{
                    textAlign: "center",
                    fontSize: "40px",
                    fontWeight: "bolder",
                    fontFamily: "'Nunito', sans-serif",
                }}>Programming Language</h3> */}
                    <Carousel indicators={false} controls={false}>
                        <Carousel.Item>
                            <CardDeck>
                                <Card>
                                    <Card.Img className="d-block h-100 w-100"
                                        src={C}
                                        alt="Third slide" />
                                </Card>
                                <Card>
                                    <Card.Img className="d-block h-100 w-100"
                                        src={Cplus}
                                        alt="Third slide" />
                                </Card>
                                <Card>
                                    <Card.Img className="d-block h-100 w-100"
                                        src={java}
                                        alt="Third slide" />
                                </Card>
                                <Card>
                                    <Card.Img className="d-block h-100 w-100"
                                        src={javascript}
                                        alt="Third slide" />
                                </Card>

                            </CardDeck>
                        </Carousel.Item>



                        <Carousel.Item>
                            <CardDeck>
                                <Card>
                                    <Card.Img className="d-block h-100 w-100"
                                        src={python}
                                        alt="Third slide" />
                                </Card>
                                <Card>
                                    <Card.Img className="d-block h-100 w-100"
                                        src={node}
                                        alt="Third slide" />
                                </Card>
                                <Card>
                                    <Card.Img className="d-block h-100 w-100"
                                        src={html}
                                        alt="Third slide" />
                                </Card>
                                <Card>
                                    <Card.Img className="d-block h-100 w-100"
                                        src={mongo}
                                        alt="Third slide" />
                                </Card>
                            </CardDeck>
                        </Carousel.Item>



                        <Carousel.Item>
                            <CardDeck>
                                <Card>
                                    <Card.Img className="d-block h-100 w-100"
                                        src={MitLogo}
                                        alt="Third slide" />
                                </Card>
                                <Card>
                                    <Card.Img className="d-block h-100 w-100"
                                        src={ScratchLogo}
                                        alt="Third slide" />
                                </Card>
                                <Card>
                                    <Card.Img className="d-block h-100 w-100"
                                        src={Bootstrap}
                                        alt="Third slide" />
                                </Card>
                                <Card>
                                    <Card.Img className="d-block h-100 w-100"
                                        src={CSSLogo}
                                        alt="Third slide" />
                                </Card>
                            </CardDeck>
                        </Carousel.Item>


                    </Carousel>
                </Container>






            </div>


        )
    }
}
export default HomeLanguageSlide;