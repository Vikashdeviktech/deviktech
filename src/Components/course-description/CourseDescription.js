import React from 'react';
import CourseMainArea from './CourseMainArea';
import CoursesWhy from './CoursesWhy';
import CoursesCurriculum from './CoursesCurriculum';
import CourseRequest from './CourseRequest';
import CourseAccordion from './CourseAccordion';
import CollegeBookDemo from '../college/CollegeBookDemo'
import HomeVideo from "../home/HomeVideo"
import HomeSlider from "../home/HomeSlider.js"

class CourseDescription extends React.Component {

    render() {
        return (
            
               <div>
                   <CourseMainArea />
                   <CoursesWhy />
                   <CoursesCurriculum />
                   <CourseRequest />
                   <CourseAccordion />
                   <CollegeBookDemo />
                   <HomeVideo />
                   <HomeSlider />
               </div>
        );
    }
}


export default CourseDescription;