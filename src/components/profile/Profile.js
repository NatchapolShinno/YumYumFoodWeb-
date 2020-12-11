import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Container,Col } from "react-bootstrap";
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Icon, Avatar } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';

import {updateProfile} from '../../store/actions/profileActions';

import './Profile.css';
import { valueToObjectRepresentation } from '@apollo/client/utilities';

class Profile extends React.Component {
    constructor(props)
        {
        super(props)
        this.state = {
            uid: this.props.uid,
            firstName: undefined,
            lastName: undefined,
            phone: undefined,
            DOB: undefined,
            editing: 0
        };
        }

    /*handleEdit () {
        if(this.state.editing === 0)
            {
            this.setState({editing: 1});
            }
        else
            {
            /*verify and send to firestore here*/
       /*     this.setState({editing: 0});
            }
        
    }*/

    handleEdit () {
        if(this.state.editing === 0)
            {
            this.setState({editing: 1});
            }
        else
            {
            this.setState({
                editing: 0,
                firstName: this.props.users.firstName,
                lastName: this.props.users.lastName,
                phone: this.props.users.phone,
                DOB: this.props.users.DOB
                });

            this.forceUpdate();

            }
    }
    

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value,
        });
      };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateProfile(this.state);

        this.setState({editing: 0});
    }

    render() {
        /*RECEIVED DATA:
        DOB: "2020-12-25"
        firstName: "Nantapat"
        initials: "NS"
        lastName: "Sittipatharanan"
        phone: "081-908-9866"*/
        if(this.props.users)
            {
            /*First, set state to be used to handle change*/
            if(!this.state.firstName)
                {
                this.setState({
                    firstName: this.props.users.firstName,
                    lastName: this.props.users.lastName,
                    phone: this.props.users.phone,
                    DOB: this.props.users.DOB
                });
                }

            return (
              <div className="profileContainer">
                <center>
                  <Avatar className="profileAvatar">
                    {this.props.users.initials}
                  </Avatar>
                </center>

                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="name">
                    <Form.Row>
                      <Col>
                        <Form.Control
                          id="firstName"
                          onChange={this.handleChange.bind(this)}
                          defaultValue={this.props.users.firstName}
                          className="nameHeader alignTextRight"
                          plaintext={this.state.editing ? false : true}
                          disabled={this.state.editing ? false : true}
                          pattern="[A-Za-z]{0,}"
                          required
                        />
                      </Col>
                      <Col>
                        <Form.Control
                          id="lastName"
                          onChange={this.handleChange}
                          defaultValue={this.props.users.lastName}
                          className="nameHeader"
                          plaintext={this.state.editing ? false : true}
                          disabled={this.state.editing ? false : true}
                          pattern="[A-Za-z]{0,}"
                          required
                        />
                      </Col>
                    </Form.Row>
                  </Form.Group>
                  {/*  <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        readOnly
                        type="email"
                        id="email"
                        onChange={this.handleChange}
                        placeholder="email address"
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
                    </Form.Group>*/}
                  <Form.Group controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      pattern="[0]{1}[0-9]{2}-[0-9]{3}-[0-9]{4}"
                      id="phone"
                      onChange={this.handleChange}
                      defaultValue={this.props.users.phone}
                      readOnly={this.state.editing ? false : true}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="DOB">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      id="DOB"
                      onChange={this.handleChange}
                      defaultValue={this.props.users.DOB}
                      readOnly={this.state.editing ? false : true}
                      required
                    />
                  </Form.Group>
                  <Button
                    variant={this.state.editing ? "danger" : "primary"}
                    onClick={this.handleEdit.bind(this)}
                  >
                    {this.state.editing ? "Quit Editing" : "Edit Profile"}
                  </Button>
                  &nbsp;
                  <Button
                    type="submit"
                    variant={this.state.editing ? "success" : "secondary"}
                    disabled={this.state.editing ? false : true}
                  >
                    Submit Changes
                  </Button>
                </Form>
              </div>
            );
            }
        else {
            return(
                <div>
                    <CircularProgress size="10em" className="splash">Loading Profile..</CircularProgress>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    /*console.log("TEST" + state);*/
    const id = ownProps.match.params.id;
    console.log("ID " + id);
    const profile = state.firestore.data.users;
    console.log("PROFILE:");
    console.log(state.firestore.data.users);
    const users = profile? profile[id] : null;
    console.log(users);
    return {
      users: users,
      uid: id
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      updateProfile: (user) => dispatch(updateProfile(user))
    }
  }
  

export default compose(
connect(mapStateToProps, mapDispatchToProps),
firestoreConnect(() => ["users"])
)(Profile);
  
