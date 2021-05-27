import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavItem, Nav, Collapse, NavbarToggler, NavbarBrand } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
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
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarBrand style={{ color: 'Black' }}>Fitgenie</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} className="dark">
                            <Nav dark navbar className="d-flex justify-content-center">
                                <NavItem>
                                    <NavLink className="nav-link" to="/care">
                                        <div className="text-dark">
                                            <span className="fa fa-cutlery mr-1" /> Eat
                                            </div>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/care">
                                        <div className="text-dark">
                                            <span className="fa fa-stethoscope mr-1" /> Care
                                            </div>
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