import React from "react";
import {Container } from 'react-bootstrap'




class AboutUsPara extends React.Component {
    render() {
        return (
            <div>
                <Container style={{backgroundColor:"#fff"}}>
                    <h1 className="my-4" style={{
                        // border: "2px solid red",
                        textAlign: "center",
                        height: "auto",
                        fontWeight: "800",
                        fontSize: "40px",
                        fontFamily: "'Nunito', sans-serif",
                        
                    }}>Welcome To DevikTech Education LLP</h1>
                    <Container className="mb-4" style={{
                        // border: "2px solid red",
                        height: "auto",
                        fontSize: "18px",
                        
                    }}>
                        <p>
                            We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world. We provide one to one sessions for all types of doubt clarifications. We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world.</p>
                        <p>
                            About Founder- Vikash is a Bachelor of Technology in Computer Science from Sharda University, Greater Noida, NCR, Uttar Pradesh. He has been interested to imparting knowledge to everyone around him since quite young age. It started with teaching his own brother in school, then it expanded to the tuition of neighbouring kids for helping them completing their homework.  It took a serious turn when he started taking classes for high school students in NOIDA during his Engineering Days. Finally after graduation he worked in an INternational Edutech firm. He found certain gaps in the knowledge being imparted to students and the skills required for students. To bridge that gap he started his own venture DEVIKTECH EDUCATION LLP which got incorporated in JUNE 2020.</p>
                        <p>
                            He has a simple philosophy “ getting the students ready for contributing in the process of making INDIA a global engineering power.
                    </p>
                    </Container>

                </Container>
                
            </div>
        )
    }
}
export default AboutUsPara;