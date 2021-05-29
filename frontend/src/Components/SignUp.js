import React, { Component } from 'react';
import { Form, FormGroup, Input, Card, Button, Label, CardHeader, FormFeedback } from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            TEMP: false,
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            height: '',
            weight: '',
            bloodGroup: '',
            standardSignUpError: '',
            redirectVarSignUp: false,
            touched: {
                firstName: false,
                lastName: false,
                email: false,
                age: '',
                height: '',
                weight: '',
                bloodGroup: '',
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

        // if (this.state.firstName.length === 0 || this.state.lastName.length === 0 || this.state.email.length === 0) {
        //     this.setState({
        //         TEMP: false,
        //         standardSignUpError: "You have not filled all the fields",
        //     });
        // }
        // else {
        //     this.setState({
        //         TEMP: true,
        //     });
        // }
        // if (this.state.TEMP && this.state.standardSignUpError.length === 0) {
        //     event.preventDefault();
        //     this.setState({
        //         redirectVarSignUp: true,
        //     });

            let data = {
                email: this.state.email,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                age: this.state.age,
                weight: this.state.weight,
                height: this.state.height,
                bloodGroup: this.state.bloodGroup,
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
                .catch(err => {
                    alert(err);
                })
        // }
    }

    validate(firstName, lastName, email, age, height, weight, bloodGroup) {
        let errors = {
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            height: '',
            weight: '',
            bloodGroup: '',
        }

        if (this.state.touched.firstName && firstName.length < 3) {
            errors.firstName = 'Please enter valid first name';
        } else if (this.state.touched.firstName && firstName.length > 10) {
            errors.firstName = 'First name should be less than 11 characters';
        }

        if (this.state.touched.lastName && lastName.length < 3) {
            errors.lastName = 'Please enter valid lat name';
        } else if (this.state.touched.lastName && lastName.length > 10) {
            errors.lastName = 'Last Name should be less than 11 characters';
        }
        return errors;
    }


    render() {

        let errors = this.validate(this.state.firstName, this.state.lastName, this.state.email, this.state.age, this.state.weight, this.state.height, this.state.bloodGroup)

        if (this.state.redirectVarSignUp) {
            return (
                <Redirect to="/login" />
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
                                <img alt="demo" src="https://res.cloudinary.com/dzqhcry3r/image/upload/v1622209466/SignUp_pjjzpw.png" style={{ width: "70%", height: "70%" }} />
                            </div>
                            <FormGroup>
                                <Label className="text-light" htmlFor="firstName">First Name</Label>
                                <Input type="text" name="firstName" id="firstName"
                                    value={this.state.firstName} onBlur={this.handlerBlur('firstName')}
                                    valid={errors.firstName === ''} invalid={errors.firstName !== ''}
                                    placeholder="First Name" onChange={this.handleInputChange} />
                                <FormFeedback>{errors.firstName}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label className="text-light" htmlFor="lastName">Last Name</Label>
                                <Input type="text" name="lastName" id="lastName"
                                    value={this.state.lastName} onBlur={this.handlerBlur('lastName')}
                                    valid={errors.lastName === ''} invalid={errors.lastName !== ''}
                                    placeholder="Last Name" onChange={this.handleInputChange} />
                                <FormFeedback>{errors.lastName}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label className="text-light" htmlFor="email">Email</Label>
                                <Input type="email" name="email" id="email"
                                    value={this.state.email} onBlur={this.handlerBlur('email')}
                                    valid={errors.email === ''} invalid={errors.email !== ''}
                                    placeholder="Email" onChange={this.handleInputChange} />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label className="text-light" htmlFor="age">Age</Label>
                                <Input type="number" name="age" id="age"
                                    value={this.state.age} onBlur={this.handlerBlur('age')}
                                    valid={errors.age === ''} invalid={errors.age !== ''}
                                    placeholder="Age" onChange={this.handleInputChange} />
                                <FormFeedback>{errors.age}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label className="text-light" htmlFor="height">Height</Label>
                                <Input type="number" name="height" id="height"
                                    value={this.state.height} onBlur={this.handlerBlur('height')}
                                    valid={errors.height === ''} invalid={errors.height !== ''}
                                    placeholder="Height (in cm)" onChange={this.handleInputChange} />
                                <FormFeedback>{errors.height}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label className="text-light" htmlFor="weight">Weight</Label>
                                <Input type="number" name="weight" id="weight"
                                    value={this.state.weight} onBlur={this.handlerBlur('weight')}
                                    valid={errors.weight === ''} invalid={errors.weight !== ''}
                                    placeholder="Weight (in Kg)" onChange={this.handleInputChange} />
                                <FormFeedback>{errors.weight}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label className="text-light" htmlFor="bloodGroup">Blood Group</Label>
                                <Input type="text" name="bloodGroup" id="bloodGroup"
                                    value={this.state.bloodGroup} onBlur={this.handlerBlur('bloodGroup')}
                                    valid={errors.bloodGroup === ''} invalid={errors.bloodGroup !== ''}
                                    placeholder="Blood Group" onChange={this.handleInputChange} />
                                <FormFeedback>{errors.bloodGroup}</FormFeedback>
                            </FormGroup>
                            <p className="text-danger d-flex justify-content-center">{this.state.standardSignUpError}</p>
                            <div className="d-flex justify-content-center">
                                <Button type="button" onClick={this.handleSignUpSubmit} value="submit" style={{ backgroundColor: "#0D50DA" }}><span className="fa fa-user fa-lg mr-1"></span> Sign Up</Button>
                            </div>
                        </Form>
                    </Card>

                </div>
            </div>

        );
    }
}

export default SignUp;
