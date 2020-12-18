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
        path: '/collagePage',
        component: CollegePage
    },
    {
        path: '/aboutUs',
        component: AboutUs
    },
    {
        path: '/k12',
        component: K12component
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
