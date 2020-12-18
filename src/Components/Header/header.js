import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import burger_menu from "../../images/burger_menu.png"
// import headerlogo from "./images/devikTech.Logo.png"
import footerLogoWhite from "../../images/Logo.White.png"
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faGraduationCap, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import logo from "../../images/logo1.png"
import styled from 'styled-components';


const Aboutimagearea = styled("div")`
background-image: url(${logo});
background-size: cover;
background-position: center;
// background-size: contain;
// background-repeat: no-repeat;
height: 5vh;
width:40px;

`

class Header extends React.Component{

    enroll=()=>{
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSfu0Iw5dSJNbymQetE7trMsoil-WWqUfylVgyg7GC0TYjdECw/viewform?vc=0&c=0&w=1','_blank')
    }

    render(){
    return (
        <div>
            
                  {/*   <NavLink to ="/couses" exact>COURSES</NavLink> */}
                 

          <Navbar fixed="top"  className="mainheader" expand="lg">
                <NavLink to ="/" exact>
                    <Aboutimagearea className="mx-4">
                    </Aboutimagearea>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                   
                    <Nav id="navlinks" className="mr-auto">
                        
                        {/* <NavLink className="mr-2" id="links" href="/courses">COURSES</NavLink> */}
                        <NavLink to ="/k12"  exact className="mr-4" id="links" href="/K12">SCHOOL</NavLink>
                        <NavLink to ="/collagePage" exact className="mr-4" id="links" >COLLEGE</NavLink>
                        <NavLink to ="/courses" exact className="mr-4" id="links" href="/courses">COURSES</NavLink>
                     {/*    <NavLink to ="/CourseDescription" exact className="mr-4" id="links" href="/CourseDescription">CoursesDescription</NavLink> */}
                        <NavLink to ="/aboutUs" exact className="mr-4" id="links" href="/aboutus">ABOUT US</NavLink>
                        <NavLink to ="/contactUs" exact className="mr-4" id="links" href="/contactus">CONTACT US</NavLink>
                    </Nav>
                    <Button className="applybuttonheader" onClick={this.enroll}>Enroll Now</Button>
                  
                </Navbar.Collapse>
            </Navbar>






            <Navbar  className="mainheader" expand="lg">
                <NavLink to ="/" exact>
                    <Aboutimagearea className="mx-4">
                    </Aboutimagearea>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                   
                    <Nav id="navlinks" className="mr-auto">
                        
                        {/* <NavLink className="mr-2" id="links" href="/courses">COURSES</NavLink> */}
                        <NavLink to ="/courses" exact className="mr-4" id="links" href="/courses">COURSES</NavLink>
                        <NavLink to ="/collagePage" exact className="mr-4" id="links" >COLLEGE</NavLink>
                        <NavLink to ="/k12"  exact className="mr-4" id="links" href="/K12">SCHOOL</NavLink>
                        <NavLink to ="/aboutUs" exact className="mr-4" id="links" href="/aboutus">ABOUT US</NavLink>
                        <NavLink to ="/contactUs" exact className="mr-4" id="links" href="/contactus">CONTACT US</NavLink>
                    </Nav>
                    <Button className="applybuttonheader" onClick={this.enroll}>Enroll Now</Button>
                </Navbar.Collapse>
            </Navbar>





</div>

    )
}
}
export default Header;