import React from 'react';
import { Button,CardDeck, Image,Card,Container } from 'react-bootstrap';
import styled from "styled-components";
import { Redirect } from "react-router";
import { Fade, Zoom } from 'react-reveal';
import collegeImage from "../../images/collegeImage.png"
import collegeImage900 from "../../images/collegeImage900.png"
const ButtonWrapper = styled("div")`


   display:flex;
   flex-direction:row;
   justify-content:space-around;
  text-align:center;
  margin:200px 30%;
  width:400px;
  
  @media(max-width:1150px){
      
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    margin:180px 30%;
    width:150px;
    padding:20px;
    height:190px;
`;
class Trail extends React.Component {
  state = {
    redirect1: false,
    redirect2: false
  }
  redirectHandlerSchool = () => {
    this.setState({ redirect1: true })
    this.renderRedirectSchool();
  }
  renderRedirectSchool = () => {
    if (this.state.redirect1) {
      return <Redirect to='/schoolProgramDemo' />
    }
  }
  redirectHandlerCollege = () => {
    this.setState({ redirect2: true })
    this.renderRedirectCollege();
  }
  renderRedirectCollege = () => {
    if (this.state.redirect2) {
      return <Redirect to='/collegeProgramDemo' />
    }
  }
  render() {
    return (
      <div style={{
        // border:"2px solid red",
        fontFamily: "'Nunito', sans-serif",
      }}>
        <h3 className="my-4 py-4" style={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "bolder",
          fontFamily: "'Nunito', sans-serif",
        }}>Our Programs</h3>
        <Container className="mb-4 pb-4">
          <CardDeck className="mb-2 pb-2">
            <Card onClick={this.redirectHandlerSchool} style={{
              borderRadius: "10px",
              backgroundColor: "#091A2C",
              color: "#fff",
              cursor: "pointer",
            }}>
              <Fade left>
                <Image className="px-4 py-4" src={collegeImage} fluid height="auto" width="auto" style={{
                  // border: "2px solid red",
                  backgroundColor: "#0F2B48",
                  borderRadius: "10px",
                }} />
                <Card.Body>
                  <Card.Title style={{
                    textAlign: "center"
                  }}>School Program
                                </Card.Title>
                  <Card.Text style={{
                    textAlign: "center"
                  }}>
                    <Button style={{ backgroundColor: "#091A2C", color: "#fff", border: "2px solid #fff", }} type="submit">
                      Know More
                                </Button>
                  </Card.Text>
                </Card.Body>
              </Fade>

            </Card>{this.renderRedirectSchool()}


            <Card onClick={this.redirectHandlerCollege} style={{
              borderRadius: "10px",
              backgroundColor: "#091A2C",
              color: "#fff",
              cursor: "pointer",
            }}>
              <Fade right>
                <Image className="px-4 py-4" src={collegeImage900} fluid height="auto" width="auto" style={{
                  // border: "2px solid red",
                  backgroundColor: "#0F2B48",
                  borderRadius: "10px",
                }} />
                <Card.Body>
                  <Card.Title style={{
                    textAlign: "center"
                  }}>College Program
                                </Card.Title>
                  <Card.Text style={{
                    textAlign: "center"
                  }}>
                    <Button style={{ backgroundColor: "#091A2C", color: "#fff", border: "2px solid #fff", }} type="submit">
                      Know More
                                </Button>
                  </Card.Text>
                </Card.Body>
              </Fade>

            </Card>{this.renderRedirectCollege()}



          </CardDeck>
        </Container>

        {/* <ButtonWrapper>
          <Button variant="primary" onClick={this.redirectHandlerSchool}>School Program</Button>
          {this.renderRedirectSchool()}
          <Button variant="primary" onClick={this.redirectHandlerCollege}>College Program</Button>
          {this.renderRedirectCollege()}
        </ButtonWrapper> */}
      </div>
    )
  }


}

export default Trail;
