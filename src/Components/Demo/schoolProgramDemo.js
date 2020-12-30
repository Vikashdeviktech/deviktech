import React from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import "./schoolProgramDemo.css";
import { Redirect } from "react-router";
import axios from 'axios';


const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.lengtvah > 0 && (valid = false)
  );
  return valid;
}

class SchoolProgramDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: null,
      parentEmail: null,
      parentNumber: null,
      childName: null,
      childSubject: null,
      childGrade: null,
      childLaptop: null,
      errors: {
        parentName: '',
        parentEmail: '',
        parentNumber: '',
        childName: '',
        childName: '',
        childSubject: '',
        childGrade: '',
        childLaptop: '',
        redirect: false,
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = {
      parentName: this.state.parentName,
      parentEmail: this.state.parentEmail,
      parentNumber: this.state.parentNumber,
      childName: this.state.childName,
      childSubject: this.state.childName,
      childGrade: this.state.childGrade,
      childLaptop: this.state.childLaptop,

    }
    axios.post(`/routes/schoolDemo`, {
      parentName: this.state.parentName,
      parentEmail: this.state.parentEmail,
      parentNumber: this.state.parentNumber,
      childName: this.state.childName,
      childSubject: this.state.childName,
      childGrade: this.state.childGrade,
      childLaptop: this.state.childLaptop,
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
      case 'parentName':
        errors.parentName =
          value.length < 3
            ? 'Full Name must be 3 characters long!'
            : '';
        break;
      case 'parentEmail':
        errors.parentEmail =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'parentNumber':
        errors.parentNumber =
          value.length == 10
            ? ''
            : 'Invalid Length!';
        break;
      case 'childName':
        errors.childName =
          value.length < 3
            ? 'Full Name must be 3 characters long!'
            : '';
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

      <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Book a  Demo</h2>
          <form onSubmit={this.handleSubmit} >
            <div className='fullName'>
              <input type='text' name='parentName' onChange={this.handleChange} placeholder="Enter Parent's Name" required />
              {errors.parentName.length > 0 &&
                <span className='error'>{errors.parentName}</span>}
            </div>
            <div className='email'>
              <input type='email' name='parentEmail' onChange={this.handleChange} placeholder="Enter Parent's Email" required />
              {errors.parentEmail.length > 0 &&
                <span className='error'>{errors.parentEmail}</span>}
            </div>
            <div className='password'>

              <input type='number' name='parentNumber' onChange={this.handleChange} placeholder="Enter Parent's Number" required />
              {errors.parentNumber.length > 0 &&
                <span className='error'>{errors.parentNumber}</span>}
            </div>
            <div className='fullName'>
              <input type='text' name='childName' onChange={this.handleChange} placeholder="Enter Child's Name" required />
              {errors.childName.length > 0 &&
                <span className='error'>{errors.childName}</span>}
            </div>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Select Grade</Form.Label>
              <Form.Control as="select" name='childGrade' onChange={this.handleChange} custom required>
                <option></option>
                <option>1-3</option>
                <option>4-5</option>
                <option>6-8</option>
                <option>9-10</option>
                <option>11-12</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustom">

              <Form.Label>Select Course</Form.Label>
              <Form.Control as="select" name='childSubject' onChange={this.handleChange} custom required>
                <option></option>
                <option>Scratch</option>
                <option>MIT APP</option>
                <option>Animation</option>
                <option>Game development</option>
                <option>Basic Python</option>
                <option>Advance Python</option>
                <option>Web Designing</option>
                <option>FullStack </option>
                <option>Logic Building</option>
                <option>Data Structure</option>


              </Form.Control>

            </Form.Group>

            <Form.Label as="legend" >
              Do You Have A Laptop?
      </Form.Label>
            <Col sm={10} name='childLaptop ' onChange={this.handleChange}>
              <Form.Check
                type="radio"
                label="Yes"
                value="Yes"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="No"
                value="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />

            </Col>

            {/*  <div className='submit'>
              <button id="createButton" onClick={this.redirectHandler}>Book 60 Min Free Class</button>
              {this.renderRedirect()}
            </div> */}
            <input id="createButton" type="submit" />
          </form>
        </div>

      </div>
    )
  }
}

export default SchoolProgramDemo;