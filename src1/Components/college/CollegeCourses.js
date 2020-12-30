import React from 'react'
import { Container, Image } from 'react-bootstrap'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import FOUNDATION from "../../images/FOUNDATION.png"
import DEVELOPMENT from "../../images/DEVELOPMENT.png"
import ADVANCE from "../../images/ADVANCE.png"
import { Fade, Zoom } from 'react-reveal';

const card = [
    {
        title: "Adesh Singh",
        text: "Yadav"
    },
    {
        title: "Adesh Singh1",
        text: "Yadav"
    },
    {
        title: "Adesh Singh2",
        text: "Yadav"
    },



]

class CollegeCourses extends React.Component {
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
                        }}>Courses</h3>
                        <CardDeck className="mb-4">

                            <Card style={{
                                // border: "2px solid black",
                                fontFamily: "'Nunito', sans-serif",
                            }}>
                                <Container className="text-center" >
                                    <Image className="px-4 py-4" src={FOUNDATION} fluid height="300px" width="296.88px" style={{
                                        // border: "2px solid red",
                                    }} />
                                </Container>
                                <Card.Body>
                                    <Card.Title className="text-center" style={{
                                        // border: "2px solid black",
                                        fontFamily: "'Nunito', sans-serif",
                                        fontWeight: "800",
                                    }}>FOUNDATION COURSE</Card.Title>
                                    <Card.Text className="text-left">
                                        •	Code will be the next universal language of the world.<br></br>
                                        •	Coding or programming skill teaches you how to think innovatively and create solutions for real-world problems.<br></br>
                                        •	Programming is easy to learn.<br></br>
                                        •	Programming skill will be an enormous booster for your career life.

                            </Card.Text>
                                </Card.Body>

                            </Card>


                            <Card style={{
                                // border: "2px solid black",
                                fontFamily: "'Nunito', sans-serif",
                            }}>
                                <Container className="text-center" >
                                    <Image className="px-4 py-4" src={DEVELOPMENT} fluid height="300px" width="296.88px" style={{
                                        // border: "2px solid red",
                                    }} />
                                </Container>
                                <Card.Body>
                                    <Card.Title className="text-center"
                                        style={{
                                            // border: "2px solid black",
                                            fontFamily: "'Nunito', sans-serif",
                                            fontWeight: "800",
                                        }}>DEVELOPMENT COURSE</Card.Title>
                                    <Card.Text className="text-left">
                                        •	In simple words MERN Stack is the complete combination of Frontend and Backend which uses JavaScript as a programming language.<br></br>
                                        •	MERN Stack includes MangoDB, Express, React and Node.js Technologies.<br></br>
                                        •	Practical knowledge of MERN stack can assure you a bright future.

                                    </Card.Text>
                                </Card.Body>

                            </Card>




                            <Card style={{
                                // border: "2px solid black",
                                fontFamily: "'Nunito', sans-serif",
                            }}>
                                <Container className="text-center" >
                                    <Image className="px-4 py-4" src={ADVANCE} fluid height="300px" width="296.88px" style={{
                                        // border: "2px solid red",
                                    }} />
                                </Container>
                                <Card.Body>
                                    <Card.Title className="text-center" style={{
                                        // border: "2px solid black",
                                        fontFamily: "'Nunito', sans-serif",
                                        fontWeight: "800",
                                    }}>ADVANCE COURSE</Card.Title>
                                    <Card.Text className="text-left">
                                        •	Machine learning is a buzz word right now in the world of technology and according to Gartner, there will be 2.3 million jobs in the field of Machine learning by 2022.<br></br>
                                        •	Machine learning an application of Artificial Intelligence which allows software applications like Google Map to become accurate in prediction.<br></br>


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


export default CollegeCourses;