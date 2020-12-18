import React from 'react'
import CollegeMainArea from './CollegeMainArea'
import CollegeCourses from './CollegeCourses'
import CollegeDifferent from './CollegeDifferent'
import HomeVideo from "../home/HomeVideo"
import CollegeBlogs from './CollegeBlogs'
import Enroll from '../Header/Enroll'
import CollegeFeatures from './CollegeFeatures'
import CollegeServices from './CollegeServices'
import CollegeTab from './CollegeTab'
import CollegeBookDemo from './CollegeBookDemo'
import CollegePrice from './CollegePrice'


class CollegePage extends React.Component {

    render() {
        return (
            
               <div>
                <CollegeMainArea />
                <Enroll />
                <CollegeFeatures />
                <CollegeTab />
                <CollegeBookDemo />
                {/* <CollegePrice /> */}
                
                {/* <CollegeCourses /> */}
                {/* <HomeVideo /> */}
                {/* <CollegeDifferent /> */}
                <CollegeBlogs />
                <CollegeServices />
               
               </div>
        );
    }
}


export default CollegePage;