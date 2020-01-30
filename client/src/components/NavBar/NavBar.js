//import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import "./NavBar.css";

const navBar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  // const [collapsed, setCollapsed] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  // const toggleNavbar = () => setCollapsed(!collapsed);

  const toggle = () => setIsOpen(!isOpen);

  
  return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>Sugar Pin
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {isAuthenticated && (
                  <NavItem>
                  <NavLink href="/main">Main</NavLink>
                  </NavItem>
                )}
              </NavItem>
              <NavItem>
              <NavLink href="/">Home</NavLink>
              </NavItem>

              <NavItem>
                {!isAuthenticated && (
                  <button onClick={() => loginWithRedirect({})}>Log in</button>
                )}
              </NavItem>

              <NavItem>
                {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}

export default navBar;











