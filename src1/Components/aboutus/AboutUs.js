import React from "react";
import AboutusBgImage from "./AboutusBgImage"
import AboutUsPara from "./AboutUsPara"
import AboutUsMission from "./AboutUsMission"
import AboutUsModel from "./AboutUsModel"
import AboutSchool from "./AboutSchool";




class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <AboutusBgImage />
                <AboutUsPara/>
                <AboutUsMission/>
                <AboutUsModel/>
                <AboutSchool />
            </div>

        )
    }
}
export default AboutUs;