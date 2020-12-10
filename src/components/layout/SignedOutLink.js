import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { IoIosLogIn, IoMdPerson } from "react-icons/io";

function SignedOutLink() {
  /*const useStyles = makeStyles({
    root: {
      background: '#33CA7F',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 30,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  });

  const classes = useStyles();*/

  return (
    <Nav>
      <Nav.Link href="/signup">
        <Button variant="light">
          <IoMdPerson fontSize="large" />
          &nbsp;Sign Up
        </Button>
      </Nav.Link>
      <Nav.Link href="/signin">
        <Button variant="contained" /*classes={{root: classes.root}}*/>
          <IoIosLogIn fontSize="large" />
          &nbsp;Log in
        </Button>
      </Nav.Link>
    </Nav>
  );
}
export default SignedOutLink;
