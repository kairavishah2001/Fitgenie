import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavItem, Nav, Collapse, NavbarToggler } from 'reactstrap';
import cookie from 'react-cookies';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        });
    }

    render() {
        return (
            <div className="box-shadow">
                <Navbar light className="sticky-top" expand="md">
                    <div className="container ml-auto">
                        <img alt="Logo" src="logo.jpg" style={{ height: "55px", width: "55px" }} className="mr-5"></img>
                        <h3 className="mr-auto text-dark" href="/">FitGenie</h3>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="mx-auto col-12">
                                <NavItem className="mt-2 mx-auto">
                                    <NavLink className="nav-link" to="/eat">
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
                                <NavItem className="mt-2 mx-auto">
                                    <NavLink className="nav-link" to="/subscriptions">
                                        <h5 className="text-dark">
                                            <span className="fa fa-handshake-o" /> Subscription
                                        </h5>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="mt-2 ml-5">
                                    <NavLink className="nav-link" to="/">
                                        <img src={cookie.load("cookie").imageUrl} className="rounded-circle mr-2" style={{height:"45px", width:"45px"}} ></img>
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