//import React from "react";
import { useAuth0 } from "../react-auth0-spa";
//import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';




const navBar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Sugar Pin</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>

            <NavItem>
              {!isAuthenticated && (
                <button onClick={() => loginWithRedirect({})}>Log in</button>
              )}
            </NavItem>

            <NavItem>
              {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
            </NavItem>

            <NavItem>
              {isAuthenticated && (
                <NavItem>
                <NavLink href="/">Home</NavLink>
                
                <NavLink href="/profile">Profile</NavLink>
                </NavItem>
              )}
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div >
  );
};

export default navBar;











