//import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";
import "./NavBar.css";

const navBar = props => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  // const [collapsed, setCollapsed] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  // const toggleNavbar = () => setCollapsed(!collapsed);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navBar mb-5" color="blue" light expand="md">
        <NavbarBrand>
          <a href="/">
            <img width="200" src="../images/sugar_pin_logo.png" alt="pricked finger logo" />
          </a>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {isAuthenticated && (
              <>
                <NavLink href="/Main">Your Sugar Pin</NavLink>
                <NavLink href="/Search">Search</NavLink>
              </>
            )}

            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>

            <NavItem>
              {!isAuthenticated && (
                <Button onClick={() => loginWithRedirect({})}>
                  Log in
                </Button>
              )}
            </NavItem>

            <NavItem>
              {isAuthenticated && (
                <Button className="btn btn-primary" onClick={() => logout()}>
                  Log out
                </Button>
              )}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default navBar;
