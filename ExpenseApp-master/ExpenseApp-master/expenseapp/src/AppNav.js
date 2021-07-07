import React, { Component } from 'react';
import {Nav,Navbar,NavItem,NavbarBrand, NavLink} from 'reactstrap';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class AppNav extends Component {
    state = {  }
    render() {
        return (
          <div>
      <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Expenses Tracking Application</NavbarBrand> 
          <Nav className="m1-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/categories">Categories</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/expenses">Expenses</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
    </div>

        );
      }
}
 
export default AppNav;