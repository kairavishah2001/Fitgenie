import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header';

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
        axios.get('http://localhost:5000/profile')
            .then(response => {
                if(response.data.success) {
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
            </div>
        )
    }
}
