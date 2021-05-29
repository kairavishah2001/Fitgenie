import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavItem, Nav, Collapse, NavbarToggler, NavbarBrand } from 'reactstrap';
import cookie from 'react-cookies';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            cartCount: 0,
        }

        this.toggleNav = this.toggleNav.bind(this);
        this.increamentCart = this.increamentCart.bind(this);
    }

    increamentCart(){
        this.setState({
            cartCount: (this.state.cartCount + 1),
        })
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
                        <img alt="Logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png" style={{ height: "55px", width: "55px" }} className="mr-5"></img>
                        <NavbarBrand href='/home' className="mr-auto text-dark" >FitGenie</NavbarBrand>
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
                                        <h5 className="text-dark ">
                                            <span className="fa fa-stethoscope ml-5" /> Care
                                        </h5>
                                    </NavLink>
                                </NavItem>
                                <NavItem className="mt-3 mx-auto">
                                        <h5 className="text-dark" role="button" onClick={this.increamentCart}>
                                            <span className="fa fa-shopping-cart" /> Cart
                                            <span className="cart-icon">{this.state.cartCount}</span>
                                        </h5>
                                    {/* <NavLink className="nav-link" to="/cart">
                                        <h5 className="text-dark">
                                            <span className="fa fa-shopping-cart" /> Cart
                                            <span className="cart-icon">0</span>
                                        </h5>
                                    </NavLink> */}
                                </NavItem>
                                <NavItem className=" ml-5">
                                    <NavLink className="nav-link" to="/">
                                        {/* <img alt="Profile" src={cookie.load("cookie").imageUrl} className="rounded-circle mr-2" style={{height:"45px", width:"45px"}} ></img> */}
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