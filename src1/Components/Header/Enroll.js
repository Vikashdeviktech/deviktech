import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { Zoom } from 'react-reveal';
import styled from 'styled-components'

const ButtonStyle = styled.button`
background-color: #271F44;
color: #fff;
padding: 0.5rem 2rem;
border: 2px solid #271F44;
border-radius: 5px;
font-family: 'Nunito', sans-serif;

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


class Enroll extends React.Component {
    enroll=()=>{
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSfu0Iw5dSJNbymQetE7trMsoil-WWqUfylVgyg7GC0TYjdECw/viewform?vc=0&c=0&w=1','_blank')
    }
    
    render() {
        return (
            <div>
                <Zoom>
                    <Container fluid style={{
                        // border:"2px solid red",
                        height: "auto",
                        backgroundColor: "#C5D8FF",
                    }}>
                        <Row>
                            <Col xs={12} xl={8} style={{
                                // border:"2px solid black",
                                height: "auto",
                                textAlign: "center",
                            }}>
                                <h5 className="my-3">A perfect platform to become the next creator of Programming world.</h5>
                            </Col>
                            <Col xs={12} xl={4} style={{
                                // border:"2px solid black",
                                height: "auto",
                                textAlign: "center",
                            }}>
                                <ButtonStyle className="my-2" onClick={this.enroll}>Enroll Now</ButtonStyle>
                            </Col>
                        </Row>


                    </Container>
                </Zoom>
            </div >
        );
    }
}


export default Enroll;