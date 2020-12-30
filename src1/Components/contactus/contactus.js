
import React, { Component } from 'react';
import styled from "styled-components";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import googleMap from './images/googleMap.png';
import "bootstrap-social"





class ContactUs extends Component {

  render() {
    return (


      <Container className="mb-5" >
        <h1 style={{ textDecoration: `underline`, textAlign: `center` }}> You can Contact Us</h1>
        <Row style={{ backgroundColor: ` #08192b` }}>

          <Col md={6}>
            <hr className="bg-warning" />
            <Card style={{}}>
              <Card.Img variant="top" src={googleMap} />
              <Card.Body>
                <Card.Title>Bangalore Head(Office)</Card.Title>
                <Card.Text style={{ fontSize: `15px` }}>
                  DEVIKTECH EDUCATION LLP,
                  112,CKG ROAD,NAGAYANAPALYA,
                  M S NAGAR,
                  BANGALORE,560033,
                  KARNATAKA
    </Card.Text>

    Email:-<a href="info@deviktech.com">info@deviktech.com</a>
                <p>8618234817 , 7439474237</p>
              </Card.Body>
            </Card>
            <hr className="bg-warning" />
          </Col>

          <Col md={6}>
            <hr className="bg-warning" />
<Container >
            <a class="btn btn-block btn-social btn-twitter" style={{border:`solid white 1px`,color:`white`}}  href="https://twitter.com/deviktech?s=08" target="_blank">
              <span class="fa fa-twitter"></span> Connect on Twitter
                            </a>
            <a class="btn btn-block btn-social btn-facebook" style={{border:`solid white 1px`,color:`white`}}   href="https://www.facebook.com/deviktech/" target="_blank">
              <span class="fa fa-facebook"></span> Connect on Facebook
                            </a>
            <a class="btn btn-block btn-social btn-instagram" style={{border:`solid white 1px`,color:`white`}}  href="https://instagram.com/deviktech_education?igshid=1754nsk9seulq" target="_blank">
              <span class="fa fa-instagram"></span> Connect on Instagram
                            </a>
          <a class="btn btn-block btn-social btn-linkedin" style={{border:`solid white 1px`,color:`white`}}  href="https://www.linkedin.com/company/deviktech-education-services" target="_blank">
              <span class="fa fa-linkedin"></span> Connect on Linkdin
                            </a>
                            </Container>
                            <Container  fluid className="mt-5">

                              <lable style={{color:`white`}}>Enquery:</lable>
                              <form>
                              <lable style={{color:`white`}}>Your email :</lable><br/>
                              <input placeholder="email id "/>
                              <br/>
                              <lable style={{color:`white`}}>Contact no.</lable><br/>
                              <input placeholder="+91xxxxxxxx"/>
                             
                              
                              </form>
                            <lable style={{color:`white`}}>You can message us :</lable>
                            <br/>
                            <textarea placeholder="type your message" style={{width:`100%`,borderRadius:`1em`}} rows="5" col="10"></textarea>
                            <br/>
                            <Button variant="outline-success" style={{ width: `100%`, marginTop: `8px`, marginBottom: `10px` }}>send</Button>{' '}
                            </Container>

            <hr className="bg-warning" />

          </Col>


        </Row>

      </Container>

    );
  }
}

export default ContactUs;