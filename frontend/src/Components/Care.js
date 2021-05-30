import axios from 'axios';
import React, { Component } from 'react'
import { Card, CardBody, FormGroup, Label, Input, Button } from 'reactstrap';
import Header from './Header';

export default class Care extends Component {
    constructor(props) {
        super(props);

        this.state = {
            role: 'trainer',
            trainer: [],
            nutritionist: [],
            professional: 'Malav Doshi',
            date: '',
            time: 'slot1',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.book = this.book.bind(this);
    }

    componentDidMount() {
        axios.defaults.withCredentials = true;
        axios.get('http://localhost:5000/getList')
            .then(response => {
                if(response.data.success) {
                    
                }
            })
            .catch(err => {
                alert(err);
            })
    }

    book(event) {
        // alert(JSON.stringify(this.state))
        let data = {
            role: this.state.role,
            name: this.state.professional,
            date: this.state.date,
            time: this.state.time,
        };

        axios.defaults.withCredentials = true;
        axios.post('http://localhost:5000/appointment', data)
            .then(response => {
                if(response.data.success) {
                    alert(response.data.msg);
                }
            })
            .catch(err => {
                alert(err)
            })
    }

    handleInputChange = (event) => {
        let target = event.target;
        let value = target.value;
        let name = target.name;
        this.setState({
            [name]: value,
        });

    }

    render() {
        let displayProfessional;
        if (this.state.role === 'trainer') {
            displayProfessional = <select onChange={this.handleInputChange} className="mt-2" name="professional" style={{ border: '1px solid black', width: "100%" }} id="professional">
                <option value="Malav Doshi">Malav Doshi</option>
            </select>
        } else if(this.state.role === 'physiotherapist') {
            displayProfessional = <select onChange={this.handleInputChange} onBlur={this.handleInputChange} className="mt-2" name="professional" style={{ border: '1px solid black', width: "100%" }} id="professional">
                <option value="Samkit Kundalia">Samkit Kundalia</option>
            </select>
        } else {
            displayProfessional = <select onChange={this.handleInputChange} onBlur={this.handleInputChange} className="mt-2" name="professional" style={{ border: '1px solid black', width: "100%" }} id="professional">
                <option value="Parth Shah">Parth Shah</option>
                <option value="Aneri Dalwadi">Aneri Dalwadi</option>
            </select>
        }

        return (
            <div>
                <Header />
                <img className="img-fluid" src='https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/6bd4f44d-7f9b-4971-8279-09097acd476a.png' alt="img" />
                <div className="mt-5 container">
                    <Card style={{ borderColor: 'white' }}>
                        <h4><div style={{ color: '#503FA8' }} className="d-flex justify-content-center">My Appointments</div></h4>
                        <CardBody>
                            <div className="row">
                                <table>
                                    <tr>
                                        <th><div className="d-flex justify-content-center">Name</div></th>
                                        <th><div className="d-flex justify-content-center">Date</div></th>
                                        <th><div className="d-flex justify-content-center">Time</div></th>
                                        <th><div className="d-flex justify-content-center">Role</div></th>
                                    </tr>
                                    <tr>
                                        <td><div className="d-flex justify-content-center">Malav Doshi</div></td>
                                        <td><div className="d-flex justify-content-center">May 28, 2021</div></td>
                                        <td><div className="d-flex justify-content-center">1730 IST</div></td>
                                        <td><div className="d-flex justify-content-center">Trainer</div></td>
                                    </tr>
                                    <tr>
                                        <td><div className="d-flex justify-content-center">Parth Shah</div></td>
                                        <td><div className="d-flex justify-content-center">May 29, 2021</div></td>
                                        <td><div className="d-flex justify-content-center">1800 IST</div></td>
                                        <td><div className="d-flex justify-content-center">Nutritionist</div></td>
                                    </tr>
                                </table>
                            </div>
                        </CardBody>
                    </Card>
                    <div className="mt-5">
                        <h4><div style={{ color: '#503FA8' }} className="d-flex justify-content-center">Easy Schedule</div></h4>
                        <div className="d-flex justify-content-center">
                            <div className="col-9">
                                <FormGroup className="mt-2">
                                    <Label>Choose role</Label>
                                    <select onChange={this.handleInputChange} className="mt-2" name="role" style={{ border: '1px solid black', width: "100%" }} id="role">
                                        <option value="trainer">Trainer</option>
                                        <option value="nutritionist">Nutritionist</option>
                                        <option value="physiotherapist">Physiotherapist</option>
                                    </select>
                                </FormGroup>
                                <FormGroup className="mt-2">
                                    <Label>Choose professional</Label>
                                    {displayProfessional}
                                </FormGroup>
                                <FormGroup className="mt-2">
                                    <Label>Choose Date</Label>
                                    <Input onChange={this.handleInputChange} type="date" name='date' />
                                </FormGroup>
                                <FormGroup className="mt-2">
                                    <Label>Choose Time</Label>
                                    <select onChange={this.handleInputChange} className="mt-2" name="time" style={{ border: '1px solid black', width: "100%" }} id="time">
                                        <option value="slot1">7am - 8:30am</option>
                                        <option value="slot2">10am - 11:30am</option>
                                        <option value="slot3">5pm - 6:30pm</option>
                                    </select>
                                </FormGroup>
                                <div className="my-2 d-flex justify-content-center">
                                    <Button style={{ backgroundColor: '#503FA8', height: '37px', width: '100px', borderRadius: '10vw', borderColor: '#503FA8' }} onClick={this.book}>Book</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
