import React, { Component } from "react";
import { Form, Button, Container,Col } from "react-bootstrap";
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from "react-router-dom";

import './forms.css';

class SignIn extends Component {
  state = {
      email:'',
      password:''
  };
  handleChange = (e) => {
    this.setState({
        [e.target.id] : e.target.value
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="formContainer">
          <Form onSubmit={this.handleSubmit}>
            <Form.Label style={{ fontSize: "25px" }}>
              <h1 className="header">Login to <br></br>YumYum</h1>
            </Form.Label>


            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                id="email"
                onChange={this.handleChange}
                placeholder="Enter email"
              />
            </Form.Group>


            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                onChange={this.handleChange}
                placeholder="Password"
              />
            </Form.Group>


            {authError ? <p class="text-danger">{authError}</p> : <br></br> } 

            <center>
            <Button variant="success" type="submit">
              Login
            </Button>
            </center>

          </Form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
