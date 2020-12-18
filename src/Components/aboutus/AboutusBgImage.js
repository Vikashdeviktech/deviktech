import React from "react";
// import Aboutimage from "./images/aboutimage.jpg"
import About from "../../images/About.png"
import styled from 'styled-components';
import { Container, Image, Jumbotron, Button } from 'react-bootstrap'
import Enroll from '../Header/Enroll'


class AboutusBgImage extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron style={{
                    margin: "0px",
                    backgroundImage: 'url(' + About + ')',
                    backgroundAttachment: "fixed",
                    borderRadius: "0px",
                    // border: "2px solid red",
                    backgroundSize: "cover",
                    height: "auto",
                }}>
                    <h1 className="my-4 pt-4" style={{
                        // border: "2px solid red",
                        textAlign: "center",
                        height: "auto",
                        color: "#fff",
                        fontWeight: "500",
                        fontSize: "70px",
                        lineHeight: "65px",
                        letterSpacing: "0.02em",
                        fontFamily: "'Nunito', sans-serif",
                        // height: "20vh",
                    }}>Our Mission</h1>
                    <p className="my-4 pt-4" style={{
                        // border: "2px solid red",
                        textAlign: "center",
                        height: "auto",
                        color: "#fff",
                        fontWeight: "500",
                        fontSize: "40px",
                        lineHeight: "65px",
                        letterSpacing: "0.02em",
                        fontFamily: "'Nunito', sans-serif",
                        // height: "20vh",
                    }}>To Convert Education Digital</p>
                </Jumbotron>
                <Enroll />
            </div>

        )
    }
}
export default AboutusBgImage;