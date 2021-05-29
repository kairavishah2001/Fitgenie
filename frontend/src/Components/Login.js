import React, { Component } from 'react';
import { Card, CardHeader, Form, Button } from "reactstrap";
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import cookie from 'react-cookies';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state ={
            redirectVar: false,
            signUp: false,
        }
        // BIND METHODS SO THAT CONTEXT IS PRESERVED
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
        this.SignUp = this.SignUp.bind(this);
    }

    SignUp(){
        this.setState({
            signUp: true,
        })
    }

    responseGoogle = (response) => {
        let data = {
            google: true,
            email: response.profileObj.email,
            imageUrl: response.profileObj.imageUrl,
        }

        cookie.save("cookie", {email: response.profileObj.email, imageUrl: response.profileObj.imageUrl}, {path: '/'});

        this.setState({
            redirectVar: true,
        })

        axios.post("http://localhost:5000/login", data)
            .then((response) => {
                if(response.data.success){
                    alert(response.data.data)
                    cookie.save("cookie", {email:response.data.data.email, role:response.data.data.email}, {path: '/'});
                    this.setState({
                        redirectVar: true,
                    })
                } else {
                    alert(response.data.msg);
                }
            })
            .catch((response) => {
                alert('Something went wrong, please try again later!');
            })

    }

    // STORE IN STATE IF CHANGED
    handleInputChange(event) {
        this.setState({
            msg: '',
        });
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value,
        });
    }

    // SEND REQUEST TO BACKEND
    handleSubmit() {
        let data = {
            email: this.state.email,
            password: this.state.password,
        }

        axios.defaults.withCredentials = true;
        axios.post('http://localhost:5000/addSeller', data)
            .then((response) => {
                console.log(response.data);
                if (response.data.status === 1) {
                    this.setState({
                        msg: 'Succesfully added',
                    });
                }
            })
            .catch((err) => {
                alert(err);
            })
    }



    render() {

        if (this.state.signUp) {
            return(
                <Redirect to='/signUp' />
            )
        }
        if (this.state.redirectVar) {
            return(
                <Redirect to='/home' />
            )
        }
        return (
            <div className="loginBG  my-auto">
                <div className="d-flex justify-content-end">
                    <Card className="col-lg-4 col-7 mt-5 mx-auto shadow">
                        <div className="d-flex justify-content-center mt-3">
                            <h3>
                                <img alt="img" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png" style={{ height: "40px", width: "40px" }}></img>
                                <strong> Login to join us</strong>
                            </h3>
                        </div>
                        <CardHeader className="d-flex justify-content-center" style={{ backgroundColor: "white" }}>
                            <h6> Choose Fit over Fat</h6>
                        </CardHeader>
                            <Form method="post">
                                <div className="d-flex justify-content-center">
                                    <img alt="demo" style={{ width: '75%', height: '75%' }} src="https://res.cloudinary.com/dzqhcry3r/image/upload/v1622208837/LoginPic_n5py55.gif" className="mt-3 mb-5"/>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <GoogleLogin
                                        onSuccess={this.responseGoogle} onFaliure={this.responseGoogle}
                                        clientId="507034768121-uet7c6i282spo8kr3qolrmh8lh3r9msa.apps.googleusercontent.com"
                                        buttonText="Login"
                                        cookiePolicy={'single_host_origin'}
                                        // className="bg-success"
                                        render={renderProps => (
                                            <Button style={{backgroundColor: "#0D50DA" }} onClick={renderProps.onClick} disabled={renderProps.disabled}>Login With Google</Button>
                                        )}
                                    />
                                </div>
                                <a href='/signUp' onClick={this.SignUp} role="button" className="d-flex justify-content-center mt-1 mb-2">Sign Up</a>
                            </Form>
                    </Card>

                </div>
            </div>
        );
    }
}

export default Login;
