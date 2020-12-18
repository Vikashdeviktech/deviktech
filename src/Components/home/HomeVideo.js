import React from "react";
import BgMainArea from "../../images/BgMainArea.png"
import { Row, Col, Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel'
import About from "../../images/About.png"
import Button from 'react-bootstrap/Button'
import { Fade, Zoom } from 'react-reveal';
import Image from 'react-bootstrap/Image'


class HomeVideo extends React.Component {
    render() {

        return (
            <div>
                <Container fluid style={{
                    // border: "2px solid red",
                    backgroundColor: "#c5d8ff",
                }}>
                    <Fade left >
                        <p className="text-center" style={{
                            // border: "2px solid red",
                            textAlign: "center",
                            fontSize: "40px",
                            fontWeight: "bolder",
                            fontFamily: "'Nunito', sans-serif",
                            // backgroundColor:"#c5d8ff",
                        }}>Journey from Beginning to Advance</p>
                    </Fade>
                    <Zoom>
                        <Container>
                            <iframe className="mb-4" src="https://www.youtube.com/embed/4HqSUv-hd44" style={{
                                // border: "2px solid red",
                                padding: "0px",
                                height: "70vh",
                                width: "100%",
                                // backgroundImage: 'url(' + BgMainArea + ')',
                                // backgroundAttachment: "fixed",
                                // backgroundSize: "cover",
                                // backgroundColor:"#eeeeee",
                            }}></iframe>
                        </Container>

                    </Zoom>
                </Container>
            </div>


        )
    }
}
export default HomeVideo;