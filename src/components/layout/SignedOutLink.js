import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { IoIosLogIn, IoMdPerson } from "react-icons/io";

function SignedOutLink() {
  return (
    <Nav>
      <Nav.Link href="/signup">
        <Button variant="light">
          <IoMdPerson fontSize="large" />
          &nbsp;Sign Up
        </Button>
      </Nav.Link>
      <Nav.Link href="/signin">
        <Button variant="light">
          <IoIosLogIn fontSize="large" />
          &nbsp;Login
        </Button>
      </Nav.Link>
    </Nav>
  );
}
export default SignedOutLink;
