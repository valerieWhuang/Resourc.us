import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {Link} from 'react-router-dom';

// bootstrap components
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import {
  Nav,
  Navbar as RBNavBar,
  NavItem,
} from "react-bootstrap";
// import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome,
  faAddressCard,
  faUserFriends,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <RBNavBar bg="dark" expand="lg">
      <RBNavBar.Toggle aria-controls="basic-navbar-nav" />
      <RBNavBar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/"><h1>Resourc.us</h1></Link>
          <NavItem className="navItem">
            <Nav.Link as={Link} to="/home" className="content">
              <FontAwesomeIcon icon={faHome}/>
              <span className="label">Home</span>
            </Nav.Link>
          </NavItem>
          <NavItem className="navItem">
            <Nav.Link as={Link} to="/profile" className="content">
              <FontAwesomeIcon icon={faAddressCard}/>
              <span className="label">Profile</span>
            </Nav.Link>
          </NavItem>
          <NavItem className="navItem">
            <Nav.Link as={Link} to="/teams" className="content">
              <FontAwesomeIcon icon={faUserFriends}/>
              <span className="label">Teams</span>
            </Nav.Link>
          </NavItem>
          <NavItem className="navItem">
            <Nav.Link as={Link} to="/resources" className="content">
              <FontAwesomeIcon icon={faBookOpen}/>
              <span className="label">Resources</span>
            </Nav.Link>
          </NavItem>
        </Nav>
      </RBNavBar.Collapse>
    </RBNavBar>
  );
}

export {NavBar};
