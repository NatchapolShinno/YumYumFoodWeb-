import Logo from '../../image/LOGOLONG.png';
import {React, useState, useEffect} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import NavDropdown  from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLink";
import SignedOutLink from "./SignedOutLink";
import { connect } from 'react-redux'

import './NavBar.css';

const NavBar = (props) => {
    const {auth, profile} = props;
    console.log(auth);
    const links = auth.uid ? <SignedInLink profile={profile}/>:<SignedOutLink/>;
    return (
        <div className="Navbar">
        <Navbar collapseOnSelect expand="lg" variant="light">
            <Navbar.Brand href="#home">
            <Link to="/">
                <img
                src={Logo}
                height="50"
                className="d-inline-block align-top"
                alt="Logo"
                />
            </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">Collection</Nav.Link>
            </Nav>
            { links }
            </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
  
  const mapStateToProps = (state) => {
      console.log(state);
      return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
  
      }
  }
  
  export default connect(mapStateToProps)(NavBar)