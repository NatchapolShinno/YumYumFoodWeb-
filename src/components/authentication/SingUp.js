import React, { Component } from "react";
import { Form, Button, Container,Col } from "react-bootstrap";
import {signUp} from '../../store/actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";

import './forms.css'

class SignUp extends Component {
  state = {
    email: " ",
    password: " ",
    firstName:" ",
    lastName:" ",
    phone:" ",
    DOB:" "
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state)
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to = '/'/>
    return (
      <div className="formContainer">
          <Form onSubmit={this.handleSubmit}>
            <Form.Label style={{ fontSize: "25px" }}>
              <h1 className="header">Sign Up</h1>
            </Form.Label>

            <Form.Group controlId="name">
              <Form.Row>
                <Col>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    id="firstName"
                    onChange={this.handleChange}
                    placeholder="Firstname"
                  />
                </Col>
                <Col>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    id="lastName"
                    onChange={this.handleChange}
                    placeholder="Lastname"
                  />
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                id="email"
                onChange={this.handleChange}
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="inputPassword6">Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                onChange={this.handleChange}
                placeholder="Enter password"
                aria-describedby="passwordHelpInline"
              />
              <Form.Text id="passwordHelpBlock" muted>
                Must be 6-20 characters long.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                id="phone"
                onChange={this.handleChange}
                placeholder="0xx-xxx-xxxx"
              />
            </Form.Group>
            <Form.Group controlId="DOB">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                id="DOB"
                onChange={this.handleChange}
                placeholder="Enter DOB"
              />
            </Form.Group>
            {authError ? <p class="text-danger">{authError}</p> : null}
            <Button variant="primary" type="submit">
              SIGN UP
            </Button>
            
          </Form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
