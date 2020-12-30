import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from './Components/home/Home';
import ContactUs from './Components/contactus/contactus.js';
import CollegePage from './Components/college/collegepage';
import AboutUs from './Components/aboutus/AboutUs.js';
import Header from './Components/Header/header.js';
import './Components/Header/header.css';
import Footer from './Components/Footer/footer.js';
import NewFooter from './Components/Footer/NewFooter.js';
// import Home from './Components/home/home1'
import './Components/Footer/footer.css';
import { NavLink } from 'react-bootstrap';
import K12component from './Components/k-12/k12components.js';
import Courses from './Components/Courses/courses';
import CoursesDescription from './Components/course-description/CourseDescription.js';
import Trail from './Components/Demo/trail';
import ChooseClass from './Components/Demo/chooseClass';
import SchoolProgramDemo from './Components/Demo/schoolProgramDemo';
import CollegeProgramDemo from './Components/Demo/collegeProgramDemo';

import DemoTime from './Components/Demo/demoTime';
import WayToJoinClass from './Components/Demo/wayToJoinClass';
import Welcome from './Components/Demo/welcome';





const routeItems = [
    {
        path: '/',
        component: Home
    },
    {

        path: '/contactUs',
        component: ContactUs

    },
    {

        path: '/courses',
        component: Courses

    },
    {
        path: '/CourseDescription',
        component: CoursesDescription
    },
    {
        path: '/collegePage',
        component: CollegePage
    },
    {
        path: '/aboutUs',
        component: AboutUs
    },
    {
        path: '/k12',
        component: K12component
    },
    {
        path: '/trail',
        component: Trail
    },
    {
        path: '/chooseClass',
        component: ChooseClass
    },
    {
        path: '/schoolProgramDemo',
        component: SchoolProgramDemo
    },
    {
        path: '/collegeProgramDemo',
        component: CollegeProgramDemo
    },
    {
        path: '/demoTime',
        component: DemoTime
    },
    {
        path: '/wayToJoinclass',
        component: WayToJoinClass
    },
    {
        path: '/welcome',
        component: Welcome
    }

]

class App extends React.Component {

    render() {
        return (
            <div>



                <Router>
                    <Header />
                    {

                        routeItems.map((item, index) => (
                            <Route key={index} path={item.path} exact strict component={item.component} />
                        ))

                    }

                </Router>

                <NewFooter />
                {/* <Footer /> */}
            </div>
        );
    }
}

export default App
