import React from 'react'
import collegeImage from "../../images/collegeImage.png"
import { Container, Tab, Tabs, TabContainer, Nav, Row, Col, Image, Card, Button } from 'react-bootstrap'
import { Zoom } from 'react-reveal';
import GirlOnMainArea from "../../images/PythonSchool.png"
import styled from 'styled-components'

const ButtonStyle = styled.button`
background-color: #0F2B48;
color: #fff;
padding: 0.5rem 2rem;
border: 2px solid #0F2B48;
border-radius: 5px;
font-family: 'Nunito', sans-serif;

:focus{
    outline:none;
}

:hover, :active {
    background-color: #271F44;
    border: 2px solid #271F44;
    color: #fff;
    font-family: 'Nunito', sans-serif;
}
`;


class SchoolWhyCoding extends React.Component {

    enroll=()=>{
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSfu0Iw5dSJNbymQetE7trMsoil-WWqUfylVgyg7GC0TYjdECw/viewform?vc=0&c=0&w=1','_blank')
    }
    render() {

        return (
            <div className="py-4">
                <Container style={{
                    height: "auto",
                }}>
                    <Row style={{
                        // border: "2px solid red",
                        // height: "20vh",
                    }}>
                        
                    </Row>
                    <Row style={{
                        // border: "2px solid red",
                        // height: "20vh",
                    }}>
                        <Col xl={6} style={{
                            // border: "2px solid black",
                            // height: "20vh",
                        }}>
                            <Image className="px-4 py-4" src={GirlOnMainArea} fluid height="auto" width="auto" style={{
                                // border: "2px solid red",
                            }} />
                        </Col>
                        <Col xl={6}>
                            <p style={{
                                // border: "2px solid #0F2B48",
                                fontWeight: "800",
                                fontSize: "35px",
                                lineHeight: "65px",
                                letterSpacing: "0.02em",
                                fontFamily: "'Nunito', sans-serif",
                                // textAlign: "center",
                            }}>
                                Why Coding For Kids</p>

                                <p style={{
                                // border: "2px solid #0F2B48",
                                // fontWeight: "650",
                                fontSize: "15px",
                                // lineHeight: "65px",
                                // letterSpacing: "0.02em",
                                fontFamily: "'Nunito', sans-serif",
                                // textAlign: "center",
                            }}>
                                <li>Language teaches children how to communicate and teaches logical thinking. Language also strengthens both verbal and and written skills.  Children should be exposed to different languages at an early age. </li>
                                <li>Coding helps children to be able to  visualize abstract concepts, lets them apply math to real-world situations, and makes math fun and creative.  Coding is present in many of today’s STEM programs. </li>
                                <li>Children who learn to code understand how to plan and organize thoughts.  This can lead to better writing skills that can be built upon as coding skills develop over time. </li>
                                </p>

                                <ButtonStyle onClick={this.enroll} className="mt-3">Book Demo</ButtonStyle>
                        </Col>
                    </Row>



                </Container>


            </div >
        );
    }
}


export default SchoolWhyCoding;