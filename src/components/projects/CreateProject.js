import React, { Component } from "react";
import { Form, Button, Container,Col } from "react-bootstrap";
import { createProject } from '../../store/actions/projectActions'
import { connect } from 'react-redux'

class CreateProject extends Component {
  state = {
    restaurantName: " ",
    address: " ",
    openHours: " ",
    priceType: " ",
    phone: " ",
    image: " ",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push('/');
  };
  render() {
    return (
      <Container style={{ padding: "20px 0 0 0" }}>
        <Col sm={8}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Label style={{ fontSize: "25px" }}>
              <b>CREATE RESTAURANT</b>
            </Form.Label>

            <Form.Group controlId="restaurantName">
              <Form.Label>Restaurant's Name</Form.Label>
              <Form.Control
                type="text"
                id="restaurantName"
                onChange={this.handleChange}
                placeholder="Enter name"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                id="address"
                onChange={this.handleChange}
                placeholder="Enter address"
                required
              />
            </Form.Group>
            <Form.Group controlId="openHours">
              <Form.Label>Enter openhours</Form.Label>
              <Form.Control
                type="text"
                id="openHours"
                onChange={this.handleChange}
                placeholder="Enter open hours"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price and Type of Restaurant</Form.Label>
              <Form.Control
                type="text"
                id="priceType"
                onChange={this.handleChange}
                placeholder="($-$$$) - Type of restaurant"
                required
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                pattern="[0]{1}[0-9]{2}-[0-9]{3}-[0-9]{4}"
                id="phone"
                onChange={this.handleChange}
                placeholder="0xx-xxx-xxxx"
                required
              />
            </Form.Group>
            <Form.Group controlId="openHours">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control
                type="file"
                id="image"
                onChange={this.handleChange}
                placeholder="Select files"
                name="image"
                accept="image"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              CREATE RESTAURANT
            </Button>
          </Form>
        </Col>
      </Container>
    );
  }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        createProject: (project) => dispatch(createProject(project))
    }
}
export default connect(null, mapDispatchToProps)(CreateProject);
