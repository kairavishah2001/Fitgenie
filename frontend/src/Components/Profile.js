import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header';
import cookie from 'react-cookies';
import { Card } from 'reactstrap';

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: '',
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            weight: '',
            gender: '',
            height: '',
            bloodGroup: '',
        }
    }

    componentDidMount() {
        axios.defaults.withCredentials = true;
        axios.get('http://localhost:5000/profile')
            .then(response => {
                if (response.data.success) {
                    this.setState({
                        userId: response.data.data[0].userId,
                        firstName: response.data.data[0].firstName,
                        lastName: response.data.data[0].lastName,
                        email: response.data.data[0].email,
                        age: response.data.data[0].age,
                        weight: response.data.data[0].weight,
                        height: response.data.data[0].height,
                        bloodGroup: response.data.data[0].bloodGroup,
                    });
                }
            })
            .catch(err => {
                alert(err);
            })
    }

    render() {
        return (
            <div>
                <Header />
                <img className="img-fluid" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/d4c7f869-682e-4df4-ba10-729c49042ce1.png" alt="emnem" />
                <div className="container">
                    <div className="row mt-2">
                        <div className="col-md-6">
                            <Card>
                                <div className="d-flex justify-content-center">
                                    <h3 className="text-primary">My Dashboard</h3>
                                </div>
                                <div className="row">
                                    <div className="col-6 d-flex justify-content-center mb-4">
                                        <img alt="Profile" src={cookie.load("cookie").imageUrl} className="mt-3" />
                                    </div>
                                    <div className="col-6 mb-2" style={{ borderLeft: '1px solid grey' }}>
                                            <h5 className="d-flex justify-content-center">Name: Sameep Vani</h5>
                                            <h5 className="d-flex justify-content-center">Height: 175cm</h5>
                                            <h5 className="d-flex justify-content-center">Weight: 75Kg</h5>
                                            <h5 className="d-flex justify-content-center">Age: 20</h5>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="d-flex justify-content-center">
                                <h3 className="text-primary">My Goals</h3>
                            </div>
                            <h5>Hi</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
