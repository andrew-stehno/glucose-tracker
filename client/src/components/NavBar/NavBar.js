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
import ProfilePopover from "../Popover/Popover";





const navBar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const [collapsed, setCollapsed] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const toggle = () => setIsOpen(!isOpen);

    console.log(user + " This is the user")
  
  return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand id="Popover1">
          <img className="img-fluid navBarProfile" src="https://pbs.twimg.com/media/EFvCuCLUEAAaxsC.jpg" alt="suspicious snek"></img>
          <ProfilePopover/>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {isAuthenticated && (
                  <NavItem>
                  <NavLink href="/">Home</NavLink>
                  
                  {/* <NavLink href="/profile">Profile</NavLink> */}

                  <NavLink href="/profile">
                    {/* <img className="img-fluid" src="./snek.png" alt="suspicious snek"></img> */}
                    
                    </NavLink>
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











