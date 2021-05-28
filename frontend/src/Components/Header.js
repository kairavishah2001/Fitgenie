import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavItem, Nav, Collapse, NavbarToggler, NavbarBrand } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        });
    }

    render() {
        return (
            <div className="box-shadow">
                <Navbar className="color-nav sticky-top" dark expand="md">
                <div className="container ml-auto">
                    <img src="logo.jpg" alt="" style={{height:"55px", width:"55px"}} className="mr-5"></img>
                    <h3 className="mr-auto text-dark" href="/">FitGenie</h3>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar className="dark">
                        <Nav navbar className="mx-auto col-6">
                                 <NavItem className="mt-2">
                                    <NavLink className="nav-link" to="/care">
                                        <h5 className="text-dark ml-1">
                                            <span className="fa fa-cutlery" /> Eat
                                        </h5>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="mt-2 mx-auto">
                                    <NavLink className="nav-link" to="/care">
                                        <h5 className="text-dark">
                                            <span className="fa fa-stethoscope ml-5" /> Care
                                        </h5>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="mt-2 ml-5">
                                    <NavLink className="nav-link" to="/care">
                                        <h5 className="text-dark">
                                            <span className="fa fa-handshake-o ml-5" /> Subscription
                                        </h5>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="mt-2 ml-5 mx-auto">
                                    <NavLink className="nav-link" to="/login">
                                        <h5 className="text-dark">
                                            <span className="fa fa-sign-in ml-5" /> Login
                                        </h5>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>

        );
    }
}

export default Header;