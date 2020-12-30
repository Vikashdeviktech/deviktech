import React from "react";
import HomeSlider from "./HomeSlider.js"
import HomeCourses from "./HomeCourses.js"
import HomeMainArea from "./HomeMainArea.js"
import HomeQuotes from "./HomeQuotes.js"
import HomeVideo from "./HomeVideo.js"
import HomeLanguageSlide from "./HomeLanguageSlide.js"
import HomeWhyUs from "./HomeWhyUs.js"
import Enroll from '../Header/Enroll'
import CollegeBlogs from '../college/CollegeBlogs'
import CollegeBookDemo from '../college/CollegeBookDemo'


class Home extends React.Component {
    render() {
        return (
            <div>
                <HomeMainArea />
                <Enroll />
                <HomeCourses />
                <CollegeBookDemo />
                <HomeQuotes />
                <HomeLanguageSlide />
                <HomeWhyUs />
                {/* <HomeVideo /> */}
                {/* <HomeSlider /> */}
                {/* <CollegeBlogs /> */}
                {/* <HomeMainArea /> */}
                {/* <Journey /> */}
                {/* <ControlledCarousel /> */}

            </div>

        )
    }
}
export default Home;