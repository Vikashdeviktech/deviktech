import React from 'react'
import collegeImage from "../../images/collegeImage.png"
import { Container, Tab, Tabs, TabContainer, Nav, Row, Col, Image, Card, Button } from 'react-bootstrap'
import { Zoom } from 'react-reveal';
import SchoolDemo from "../../images/SchoolDemo.png"
import styled from 'styled-components'

const ButtonStyle = styled.button`
background-color: #fff;
color: #0F2B48;
padding: 0.5rem 2rem;
border: 2px solid #0F2B48;
border-radius: 5px;
font-family: 'Nunito', sans-serif;
font-weight: bold;

:focus{
    outline:none;
}

:hover, :active {
    background-color: #0F2B48;
    border: 2px solid #0F2B48;
    color: #fff;
    font-family: 'Nunito', sans-serif;
}
`;


class CollegeBookDemo extends React.Component {
    enroll=()=>{
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSfu0Iw5dSJNbymQetE7trMsoil-WWqUfylVgyg7GC0TYjdECw/viewform?vc=0&c=0&w=1','_blank')
    }


    render() {

        return (
            <div className="py-4">
                <Container style={{
                    // border: "2px solid red",
                    boxShadow: "5px 0px 20px 5px #4141413a",
                    borderRadius: "10px",
                    height: "auto",
                }}>
                    <Row>
                        <Col  xl={3}>
                            <Image className="px-4 py-4" src={SchoolDemo} fluid height="auto" width="auto"></Image>
                        </Col>
                        <Col className="text-center" xl={6}>
                            <p className="pt-4" style={{
                                fontFamily: "'Nunito', sans-serif",
                                fontWeight: "800",
                                fontSize: "35px",
                            }}>
                                How to customise learning path?
                            </p>
                            <p style={{
                                fontFamily: "'Nunito', sans-serif",
                                fontSize: "15px",
                            }}>
                                Take the free trial class and our guidance counsellor will help build a custom path based on your child’s performance. Take the free trial class and our guidance counsellor will help build a custom path based on your child’s performance.
                            </p>
                        </Col>
                        <Col className="mt-2 pt-4 text-center" xl={3}>
                            <ButtonStyle onClick={this.enroll} className="mb-2 py-3">Book A Free Demo Now</ButtonStyle>
                        </Col>
                    </Row>

                </Container>


            </div >
        );
    }
}


export default CollegeBookDemo;