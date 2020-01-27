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
  NavLink,
  NavbarText
} from 'reactstrap';
import "./NavBar.css";

const navBar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const [collapsed, setCollapsed] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const toggle = () => setIsOpen(!isOpen);

  
  return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand id="Popover1">
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                {isAuthenticated && (
                  <NavItem>
                  <NavLink href="/">Home</NavLink>
                  
                  <NavLink href="/profile">Profile</NavLink>

                  </NavItem>
                )}
            <NavItem>
                {!isAuthenticated && (
                  <button onClick={() => loginWithRedirect({})}>Log in</button>
                )}
              </NavItem>

              <NavItem>
                {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
              </NavItem>

              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
}

export default navBar;











