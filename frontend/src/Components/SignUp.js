import React, { Component } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import {Form, Card, CardHeader} from 'reactstrap';

class SignUp extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            TEMP: false,
            loginEmailError: '',
            loginPasswordError: '',
            loginError: '',
            firstname: '',
            lastname: '',
            redirectVar: false,
            redirectVarSignUp: false,
            google: false,
            otp: '',
            standardSignUpError: '',
            responseMsg: '',
            touched: {
                firstname: false,
                lastname: false,
                roll: false,
                email: false,
            }
        }
    
    }

    render() {
        return (
            <div className="loginBG  my-auto">
                <div className="d-flex justify-content-end">
                    <Card className="col-md-4 mt-4 mx-auto shadow">
                        <div className="d-flex justify-content-center mt-3">
                            <h3>
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png" style={{ height: "40px", width: "40px" }}></img>
                                <strong> Login to join us</strong>
                            </h3>
                        </div>
                        <CardHeader className="d-flex justify-content-center" style={{ backgroundColor: "white" }}>
                            <h6> Choose Fit over Fat</h6>
                        </CardHeader>
                            <Form method="post" className="d-flex justify-content-center">

                                <Button className="btn" style={{buttonColor:"#0D50DA"}}>Sign Up</Button>
                            </Form>
                    </Card>

                </div>
            </div>
        
        );
    }
}

export default SignUp;
