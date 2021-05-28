import React, { Component } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Form, FormGroup, Button } from "reactstrap";
import GoogleLogin from 'react-google-login';

class Login extends Component {

    constructor(props) {
        super(props);

        // MAINTAIN STATE
        this.state = {
            email: '',
            password: '',
        }

        // BIND METHODS SO THAT CONTEXT IS PRESERVED
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

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
            password : this.state.password ,
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
        return (
            <div className="loginBG  my-auto">
                <div className="d-flex justify-content-end">
                    <Card className="col-md-5 mx-auto ">

                        <CardHeader>Login</CardHeader>
                        <CardBody >
                            <Form method="post">
                                <div className="d-flex justify-content-center">
                                    <img style={{ width: '80%', height: '80%' }} src="https://res.cloudinary.com/didf23s1x/image/upload/v1609433589/RMS/Login_tjskfe.gif" />
                                </div>
                                <FormGroup className="d-flex justify-content-center">


                                    <GoogleLogin
                                        clientId="671959910473-q5vu4qnig20dkibffi718pha5vcsjvn2.apps.googleusercontent.com"
                                        buttonText="Login" onSuccess={this.responseGoogle} onFaliure={this.responseGoogle}
                                        cookiePolicy={'single_host_origin'}
                                        // className="bg-success"
                                        render={renderProps => (
                                            <Button color="success" onClick={renderProps.onClick} disabled={renderProps.disabled}>Login With Google</Button>
                                        )}
                                    />
                                </FormGroup>
                            </Form>
                        </CardBody>
                        <CardFooter>Foof</CardFooter>
                    </Card>

                </div>
            </div>
        );
    }
}

export default Login;
