import React from 'react';
import styled from 'styled-components';



const WhyUs = styled("div")`
  border: 2px solid black;
  font-size: 50px;
//   width:70%;
  padding:20px;
//   height:70vh;
  text-align: center;
  background: #cfd9e0;
  
  @media screen and (max-width:1150px){
      height: auto;
      padding: 10px;
      font-size: 30px;
      text-align:center;
  }
  `




const ParaWhyus = styled("div")`
  border: 10px double #08192B;
  display: flex;
  flex-direction: row;
//   width:70%;
  justify-content: space-evenly;
  font-size: 20px;
  padding:5px;
  color: #08192B;
  text-align: center;
  
  @media screen and (max-width:1150px){
      height: auto;
      padding: 10px;
      font-size: 10px;
      text-align:center;
      flex-direction: column;
  }
  `


const Aboutbutton = styled("button")`

font-size: large;
transition-duration: 0.3s;
cursor: pointer;
background-color: rgba(255, 255, 255, 0); 
color:#08192B;
border: 2px solid #08192B;  
border-radius: 10px;
font-family: 'Nunito', sans-serif;
padding: 15px;
// width:100%;

:hover{
    background-color: #0E2A47; 
    color:#ffffff;
}

@media screen and (max-width:1150px){
    height: auto;
    width:100%;
    margin-top:5px;
}

`


class AboutUsWhyUs extends React.Component {
    render() {
        return (
            <div>
                <WhyUs>
                    Why Us?
                   <ParaWhyus>DevikTech trains students to develop their skills in Coding. These students in turn participate in different competitions around the country and globe and  the very participation creates a sense of winning among many students. Some students go on to win these competitions and thus bring laurels to the school. Thus the school not only becomes a better place to learn, but is also ahead of other schools who are not implementing something like this.
                    Besides these the quality of skills among teachers also improves and they become more and more involved with technology.
                    And we have the example right now ,many government schools are struggling to conduct online classes, not because they don’t have resources(they are already provided laptops and video conferencing accounts by authorities, but because they don’t have the skills to operate online. One of the best online educational site. Trained By Expertise's, Using Top-Notch Technologies.


                   </ParaWhyus>
                    <Aboutbutton>Know More</Aboutbutton>
                </WhyUs>

            </div>
        )
    }
}
export default AboutUsWhyUs;