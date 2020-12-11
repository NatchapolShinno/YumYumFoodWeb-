import Logo from '../../image/LOGOLONG.png';
import React from 'react';
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
  
class YumYumNav extends React.Component {

    constructor(props)
    {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.state =
        {
        navClass: 'Navbar'
        }
    }


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, {passive: true});
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        if(window.scrollY > 50)
            {
            this.setState({navClass: 'Navbar scroll'});
            }
        else
            {
            this.setState({navClass: 'Navbar'});
            }
    }

    render() {
        /*const {auth, profile} = this.props;*/
        const auth = this.props.auth;
        const profile = this.props.profile;
        /*console.log(auth);
        console.log(profile);*/
        const links = auth.uid ? <SignedInLink profile={profile} auth={auth}/>:<SignedOutLink/>;

        return (
            <div className={this.state.navClass}>
            <Navbar collapseOnSelect bg="none" expand="lg" variant="light">
                <Navbar.Brand href="/">
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
                    <Nav.Link href="/">Home</Nav.Link>
                    {/*<Nav.Link href="#pricing">Collection</Nav.Link>*/}
                </Nav>
                { links }
                </Navbar.Collapse>
            </Navbar>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
      auth: state.firebase.auth,
      profile: state.firebase.profile

    }
}

export default connect(mapStateToProps)(YumYumNav)