import React from "react";
import FlipNumbers from 'react-flip-numbers';
import { Container, Row, Col } from 'react-bootstrap'


class AboutUsMission extends React.Component {
    render() {
        return (
            <div>
                <Container fluid style={{
                    // border: "2px solid red",
                    height:"auto",
                    backgroundColor:"#08192B",
                }}>
                    <Row>
                        <Col xs={12} xl={4} style={{
                            // border: "2px solid red",
                            height:"auto",
                        }}>
                            <h1 className="pt-4 pb-2 text-center">
                            <FlipNumbers height={50} width={40} color="#cfd9e0" background="rgba(255, 255, 255, 0)" play perspective={1000} numbers="528" duration="10" delay="2s" />
                            </h1>
                            <h3 className="pb-4 text-center" style={{
                                color: "#cfd9e0",
                                fontFamily: "'Nunito', sans-serif",
                            }}>Students Empowered</h3>
                        </Col>
                        <Col xs={12} xl={4} style={{
                            // border: "2px solid red",
                            height:"auto",
                        }}>
                            <h1 className="pt-4 pb-2 text-center">
                                <FlipNumbers height={50} width={40} color="#cfd9e0" background="rgba(255, 255, 255, 0)" play perspective={1000} numbers="204" duration="10" delay="4s" />
                            </h1>
                            <h3 className="pb-4 text-center" style={{
                                color: "#cfd9e0",
                                fontFamily: "'Nunito', sans-serif",
                            }}>Personalised Live Coaching</h3>
                        </Col>
                        <Col xs={12} xl={4} style={{
                            // border: "2px solid red",
                            height:"auto",
                        }}>
                            <h1 className="pt-4 pb-2 text-center">
                            <FlipNumbers height={50} width={40} color="#cfd9e0" background="rgba(255, 255, 255, 0)" play perspective={1000} numbers="248" duration="10" delay="6s" />
                            </h1>
                            <h3 className="pb-4 text-center" style={{
                                color: "#cfd9e0",
                                fontFamily: "'Nunito', sans-serif",
                            }}>Jobs and Internships</h3>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}
export default AboutUsMission;