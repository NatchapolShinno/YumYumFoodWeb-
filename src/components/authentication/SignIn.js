import React, { Component } from "react";
import { Form, Button, Container,Col } from "react-bootstrap";
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from "react-router-dom";

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
      <Container style={{ padding: "20px 0 0 0" }}>
        <Col sm={6}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Label style={{ fontSize: "25px" }}>
              <b>LOGIN</b>
            </Form.Label>
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
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                onChange={this.handleChange}
                placeholder="Password"
              />
            </Form.Group>
            {authError ? <p class="text-danger">{authError}</p> : null}
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Container>
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
