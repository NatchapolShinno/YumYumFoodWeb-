import logo from '../../image/LOGOLONG.png';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown  from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import './NavBar.css';

class YumYumNav extends React.Component {
    constructor(props)
    {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
    this.state =
        {
        navclass: 'Navbar'
        }
    }

    componentDidMount()
        {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
        }
    
    componentWillUnmount()
        {
        window.removeEventListener('scroll', this.handleScroll)
        }
    
    handleScroll(event)
        {
        // do something like call `this.setState`
        // access window.scrollY etc
        if(window.scrollY > 50)
            {
            this.setState({navclass: 'Navbar scroll'})
            }
        else
            {
            this.setState({navclass: 'Navbar'})
            }
        }

    render()
        {
    return (
        <div className="Navbar-back">
        <Navbar bg="none" expand="lg"  className={this.state.navclass}>
            <Navbar.Brand href="/" className="YumYum-Logo">
                <img
                src={logo}
                className="YumYum-Logo"
                width="167"
                height="50"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="discover">Discover</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>

                    <Form  inline>
                        <Button variant="success" href="/signin">Sign In</Button>
                    </Form>
                    {/*<Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>*/}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
    }
}

export default YumYumNav;
