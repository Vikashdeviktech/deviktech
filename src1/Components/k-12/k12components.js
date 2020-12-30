import React from 'react';
import Header from './header';
import Enroll from '../Header/Enroll'
import SchoolTab from './SchoolTab';
import SchoolFeatures from './SchoolFeatures';
import SchoolBookDemo from './SchoolBookDemo';
import SchoolPrice from './SchoolPrice';
import SchoolWhyCoding from './SchoolWhyCoding';
import SchoolTestimonials from './SchoolTestimonials';
import SchoolServices from './SchoolServices';



export default function K12component() {
    return (
        <div>
            <Header />
            <Enroll />
            <SchoolFeatures />
            <SchoolTab />
            <SchoolBookDemo />
            {/* <SchoolPrice /> */}
            <SchoolWhyCoding />
            <SchoolServices />
            {/* <SchoolTestimonials /> */}
        </div>
    )
}

