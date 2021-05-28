import React, { Component } from 'react';
import {Form, FormGroup, Input, Card, Button, Label, CardHeader, FormFeedback} from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            TEMP: false,
            firstname: '',
            lastname: '',
            email: '',
            standardSignUpError: '',
            redirectVarSignUp: false,
            touched: {
                firstname: false,
                lastname: false,
                email: false,
            }
        }

        this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
        this.handlerBlur = this.handlerBlur.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handlerBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
    }

    handleInputChange(event) {
        this.setState({
            standardSignUpError: '',
            responseMsg: '',
        });
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    async handleSignUpSubmit(event) {
        
        let errors = this.validate(this.state.firstname, this.state.lastname,this.state.email)
        if (this.state.firstname.length < 3 || this.state.lastname.length < 3 || this.state.email.length === 0 || errors.lastName === '' || errors.firstName === ''|| errors.email === '') {
            this.setState({
                TEMP: false,
                standardSignUpError: "You have not filled all the fields",
            });
        }
        else{
            this.setState({
                TEMP: true,
            });
        }
        if (this.state.TEMP && this.state.standardSignUpError.length === 0) {
            event.preventDefault();
            this.setState({
                redirectVarSignUp: true,
            });

            let data = {
                email: this.state.email,
                firstName: this.state.firstName,
                lastName: this.state.lastname,
            }

            axios.defaults.withCredentials = true;
            axios.post('http://localhost:5000/signUp', data)
                .then(response => {
                    if (response.data.success) {
                        this.setState({
                            redirectVarSignUp: true,
                        });
                    }
                    else {
                        alert(response.data.msg);
                    }
                })
                .catch(response => {
                    alert('Something went wrong. Please try again later');
                })
        }
    }

    validate(firstname, lastname, roll, email, password, cPassword) {
        let errors = {
            firstname: '',
            lastname: '',
            email: '',
        }

        if (this.state.touched.firstname && firstname.length < 3) {
            errors.firstname = 'Please enter valid first name';
        } else if (this.state.touched.firstname && firstname.length > 10) {
            errors.firstname = 'First name should be less than 11 characters';
        }

        if (this.state.touched.lastname && lastname.length < 3) {
            errors.lastname = 'Please enter valid lat name';
        } else if (this.state.touched.lastname && lastname.length > 10) {
            errors.lastname = 'Last Name should be less than 11 characters';
        }

        if (this.state.touched.email) {
            errors.email = 'Enter valid email';
        }
        return errors;
    }


    render() {

        let errors = this.validate(this.state.firstname, this.state.lastname,this.state.email)
       
        if (this.state.redirectVarSignUp) {
            return (
                <Redirect to="/home" />
            )
        }
        return (
            <div className="loginBG  my-auto">
                <div className="d-flex justify-content-end">
                    <Card className="col-md-3 mt-5 mx-auto shadow">
                        <div className="d-flex justify-content-center mt-3">
                            <h3>
                                <img alt="demo" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png" style={{ height: "40px", width: "40px" }}></img>
                                <strong> Sign Up to join us</strong>
                            </h3>
                        </div>
                        <CardHeader className="d-flex justify-content-center" style={{ backgroundColor: "white" }}>
                            <h6> Choose Fit over Fat</h6>
                        </CardHeader>                        
                        <Form method="post" className="m-3">
                        <div className="d-flex justify-content-center">
                            <img alt="demo" src="https://res-console.cloudinary.com/dzqhcry3r/thumbnails/v1/image/upload/v1622209466/U2lnblVwX3Bqanpwdw==/preview" style={{ width:"70%", height:"70%"}}/>
                        </div>
                            <FormGroup>
                                <Label className="text-light" htmlFor="firstname">First Name</Label>
                                <Input type="text" name="firstname" id="firstname"
                                    value={this.state.firstname} onBlur={this.handlerBlur('firstname')}
                                    valid={errors.firstname === ''} invalid={errors.firstname !== ''}
                                    placeholder="First Name" onChange={this.handleInputChange} />
                                <FormFeedback>{errors.firstname}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label className="text-light" htmlFor="lastname">Last Name</Label>
                                <Input type="text" name="lastname" id="lastname"
                                    value={this.state.lastname} onBlur={this.handlerBlur('lastname')}
                                    valid={errors.lastname === ''} invalid={errors.lastname !== ''}
                                    placeholder="Last Name" onChange={this.handleInputChange} />
                                <FormFeedback>{errors.lastname}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label className="text-light" htmlFor="email">Email</Label>
                                <Input type="email" name="email" id="email"
                                    value={this.state.email} onBlur={this.handlerBlur('email')}
                                    valid={errors.email === ''} invalid={errors.email !== ''}
                                    placeholder="Email" onChange={this.handleInputChange} />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </FormGroup>
                            <p className="text-danger d-flex justify-content-center">{this.state.standardSignUpError}</p>
                            <div className="d-flex justify-content-center">
                                <Button type="button" onClick={this.handleSignUpSubmit} value="submit" style={{backgroundColor: "#0D50DA" }}><span className="fa fa-user fa-lg mr-1"></span> Sign Up</Button>
                            </div>
                        </Form>
                    </Card>

                </div>
            </div>

        );
    }
}

export default SignUp;
