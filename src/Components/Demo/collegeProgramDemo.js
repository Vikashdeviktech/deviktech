import React from 'react';
import { Button, Form } from 'react-bootstrap';
import "./collegeProgramDemo.css";
import { Redirect } from "react-router";
import axios from 'axios';


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class CollegeProgramDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: null,
      studentEmail: null,
      studentNumber: null,
      studentCourse: null,

      errors: {
        studentName: '',
        studentEmail: '',
        studentNumber: '',
        studentCourse: '',
        redirect: false,
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = {
      studentName: this.state.studentName,
      studentEmail: this.state.studentEmail,
      studentNumber: this.state.studentNumber,
      studentCourse: this.state.studentCourse,


    }
    axios.post(`/routes/collegeDemo`, {
      studentName: this.state.studentName,
      studentEmail: this.state.studentEmail,
      studentNumber: this.state.studentNumber,
      studentCourse: this.state.studentCourse,
    }).then(response => {
      if (response) {
        this.props.history.push("/welcome");
      }

    }).catch(err => { alert(err) })
  }



  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    console.log(value)
    switch (name) {
      case 'studentName':
        errors.studentName =
          value.length < 3
            ? 'Full Name must be 3 characters long!'
            : '';
        break;
      case 'studentEmail':
        errors.studentEmail =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'studentNumber':
        errors.studentNumber =
          value.length == 10
            ? ''
            : 'Invalid Length!';
        break;

      default:
        break;
    }

    this.setState({
      errors, [name]: value,

    });

  }

  render() {
    const { errors } = this.state;
    return (

      <div className='wrapperCollege'>
        <div className='form-wrapper'>
          <h2>Book a  Demo</h2>
          <form onSubmit={this.handleSubmit}>
            <div className='fullName'>
              <input type='text' name='studentName' onChange={this.handleChange} placeholder="Enter Name" required />
              {errors.studentName.length > 0 &&
                <span className='error'>{errors.studentName}</span>}
            </div>
            <div className='email'>
              <input type='email' name='studentEmail' onChange={this.handleChange} placeholder="Enter  Email Id" required />
              {errors.studentEmail.length > 0 &&
                <span className='error'>{errors.studentEmail}</span>}
            </div>
            <div className='password'>

              <input type='number' name='studentNumber' onChange={this.handleChange} placeholder="Enter Number" required />
              {errors.studentNumber.length > 0 &&
                <span className='error'>{errors.studentNumber}</span>}
            </div>

            <Form.Group controlId="exampleForm.SelectCustom">

              <Form.Label>Select Course</Form.Label>
              <Form.Control as="select" custom required>
                <option></option>
                <option>C</option>
                <option>Python</option>
                <option>Java</option>
                <option>C++</option>
                <option>App Development</option>
                <option>FullStack(MERN Stack)</option>
                <option>Game Developmet</option>
                <option>Data Structure</option>
                <option>Animation </option>
                <option>Machine Learning</option>



              </Form.Control>
            </Form.Group>
            <input id="createButton" type="submit" />
          </form>
        </div>

      </div>
    )
  }
}

export default CollegeProgramDemo;