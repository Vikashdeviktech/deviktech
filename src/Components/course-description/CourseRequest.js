import React from 'react';
import { Container, Tab, Tabs, TabContainer, Nav, Row, Col, Image, Card, Button, Breadcrumb, OverlayTrigger, Tooltip, Badge } from 'react-bootstrap'
import { faSmile, faCalendar, faClock, faTag, faDownload, faUserGraduate, faSearchPlus, faStar, faStarHalfAlt, faGrinStars, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PythonCourse from "../../images/PythonCourse.png"
import styled from 'styled-components'


const ButtonStyle = styled.button`
background-color: #0F2B48;
border: 2px solid #0F2B48;
color: #fff;
padding: 0.2rem 0.5rem;
border-radius: 5px;
font-family: 'Nunito', sans-serif;

:focus{
    outline:none;
}

:hover, :active {
    background-color: #fff;
    border: 2px solid #0F2B48;
    font-family: 'Nunito', sans-serif;
    color: #0F2B48;
    font-weight: bold;
}
`;

class CourseRequest extends React.Component {

    render() {
        return (
            <div style={{
                fontFamily: "'Nunito', sans-serif",
                backgroundColor: "#fff",
                color: "#696A6C",
            }}>
                <Container className="pt-4" style={{
                    // border: "2px solid red",
                }}>
                    <Row className="pb-4">
                        <Col xs={12} xl={3}></Col>
                        <Col xs={12} className="text-center" xl={3}><Image src={PythonCourse} height="120" width="auto" /></Col>
                        <Col xs={12} xl={3}>
                            <p style={{fontSize:"18px",}}>Can’t find a batch you were looking for?</p>
                            <ButtonStyle variant="primary">Request Batch</ButtonStyle>
                        </Col>
                        <Col xs={12} xl={3}></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}


export default CourseRequest;