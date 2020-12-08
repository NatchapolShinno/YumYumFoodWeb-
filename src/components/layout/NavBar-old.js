import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav
} from "react-bootstrap";
import Logo from "../../image/LOGOLONG.png";
import SignedInLink from "./SignedInLink";
import SignedOutLink from "./SignedOutLink";
import { connect } from 'react-redux'

const NavBar = (props) => {
  const {auth, profile} = props;
  console.log(auth);
  const links = auth.uid ? <SignedInLink profile={profile}/>:<SignedOutLink/>;
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" sticky="top">
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