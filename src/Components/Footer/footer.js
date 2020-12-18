import React from "react";
// import footerlogo from "./images/devikTech.Logo.png"
import footerImage from "../../images/footerImage.png"
import footerLogoWhite from "../../images/Logo.White.png"
import { faFacebook, faInstagram, faLinkedin, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
     return (
          <div className="mainfooter">
               {/* footerWhyUs Seaction */}
               <div className="footerwhydiv">

                    {/* footer Image */}

                    <div className="footerlogodiv">
                         <img alt="DevkiTech" src={footerImage} width="300px" height="300px" />

                    </div>

                    {/* footer WhatElseToKnow para Seaction */}

                    <div className="footerwhatparadiv">

                         <div className="whatheadingdiv">
                              What Else To Know
                         </div>
                         <div className="whatparadiv">
                              We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world. We provide one to one sessions for all types of doubt clarifications. We provide Live sessions by the industry experts where you get to know about the various paradigms of problem solving and their applications in the real world.
                              <p>Contact us 9117018454 or 9718365756</p>
                              <button className="footerbutton">Book A Demo</button>
                         </div>

                    </div>
               </div>

               {/* footerlinks Seaction */}

               <div className="linksfooterdiv">
                    <div className="footercourseslinks">
                         <div className="footercourses1">
                              <h3>Courses</h3>
                              <li><a href="#index">C++</a></li>
                              <li><a href="#index">Python</a></li>
                              <li><a href="#index">Core Java</a></li>
                              <li><a href="#index">MERN Stack</a></li>
                              <li><a href="#index">DSA</a></li>
                         </div>
                    </div>
                    <div className="footerk12courseslinks">
                         <div className="footerk12courses1">
                              <h3>K-12 Courses</h3>
                              <li><a href="#index">MIT APP</a></li>
                              <li><a href="#index">Scratch</a></li>
                              <li><a href="#index">Python</a></li>
                              <li><a href="#index">Game Development</a></li>
                              <li><a href="#index">Frontend Development</a></li>
                         </div>
                    </div>
                    <div className="footerworklinks1">
                         <h3>Work with Us</h3>
                         <li><a href="#index">Instructor</a></li>
                         <li><a href="#index">Marketing</a></li>
                         <li><a href="#index">Content Development</a></li>
                         <li><a href="#index">Intership</a></li>
                         <li><a href="#index">Web Developer</a></li>
                    </div>
                   {/*  <div className="footerimage1">
                         <div className="aw">
                              <img alt="DevkiTech" className="footerimage" src={footerLogoWhite} width="170px" height="100px" />
                         </div>
                      <div className="aw">
                              <button className="knowmorebutton">Know More</button>
                         </div> 


                    </div> */}
               </div>






               <div className="footersocialdiv">
                    <div className="socialseactiondiv" target="_blank">
                         Copyright © 2020 DevikTech Education LLP India, All rights reserved. | <a className="footer-link" href="index.html">DevikTech</a>
                    </div>
                    <div className="socialseactiondiv">
                         <a href="index.html" target="_blank">Teams and Condition</a>
                    </div>
                    <div className="socialseactiondiv">
                         <a href="index.html" target="_blank">Private policy</a>
                    </div>
                    <div className="copyrightdiv">
                         <div className="socialmedia">
                              <a href="index.html" target="_blank"><FontAwesomeIcon icon={faFacebook} color="#30D3F6" /></a>
                         </div>

                         <div className="socialmedia">
                              <a href="index.html" target="_blank"><FontAwesomeIcon icon={faInstagram} color="#30D3F6" /></a>
                         </div>
                         <div className="socialmedia">
                              <a href="index.html"  target="_blank"><FontAwesomeIcon icon={faLinkedin} color="#30D3F6" /></a>
                         </div>
                         {/* <div className="socialmedia">
                              <a href="index.html"  target="_blank"><FontAwesomeIcon icon={faYoutube} color="#30D3F6" /></a>
                         </div>
                         <div className="socialmedia">
                              <a href="index.html" target="_blank"><FontAwesomeIcon icon={faWhatsapp} color="#30D3F6" /></a>
                         </div> */}
                    </div>
               </div>
          </div>
     )
}

export default Footer