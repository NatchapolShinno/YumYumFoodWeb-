import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from "react-bootstrap";
import { Button, Icon, Avatar } from "@material-ui/core";
import { IoIosLogOut, IoMdRestaurant } from "react-icons/io";
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLink = (props) => {

  return (
    <Nav>
      <Nav.Link href="/createproject">
        <Button variant="light">
          <IoMdRestaurant fontSize="large" />
          &nbsp;New Restaurant
        </Button>
      </Nav.Link>
      <Nav.Link href="/">
        <Button variant="light" disabled>
          Signed in as: &nbsp;
          <a href="/" style={{ color: "GrayText" }}>
            {props.profile.lastName}&nbsp;&nbsp;{props.profile.firstName}
          </a>
        </Button>
      </Nav.Link>
      <Nav.Link href="/">
        <Avatar>{props.profile.initials}</Avatar>
      </Nav.Link>
      <Nav.Link href="/">
        <Button variant="light" onClick={props.signOut}>
          <IoIosLogOut fontSize="large" />
          &nbsp;Log Out
        </Button>
      </Nav.Link>
    </Nav>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  };
}
export default connect(null, mapDispatchToProps)(SignedInLink);
