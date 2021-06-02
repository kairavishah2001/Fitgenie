import axios from 'axios';
import React, { Component } from 'react'
import { Card, CardBody, FormGroup, Label, Input, Button } from 'reactstrap';
import Header from './Header';
import Aos from 'aos';
import "aos/dist/aos.css";

function DisplayAppointments({ result }) {
    let renderList
    if (result.length === 0) {
        renderList = <div className="d-flex justify-content-center">
            <img src="https://cdn.discordapp.com/attachments/802068802732425227/849505425966497822/Empty.gif" alt="nothing" />
        </div>
    } else {
        // eslint-disable-next-line array-callback-return
        renderList = result.map((rl) => {
            if (rl.appointmentTime === 'slot1') {
                return (
                    <tr>
                        <td><div className="d-flex justify-content-center">{rl.pName}</div></td>
                        <td><div className="d-flex justify-content-center">{rl.appointmentDate}</div></td>
                        <td><div className="d-flex justify-content-center">7am - 8:30am</div></td>
                        <td><div className="d-flex justify-content-center">{rl.role}</div></td>
                    </tr>
                );
            } else if (rl.appointmentTime === 'slot2') {
                return (
                    <tr>
                        <td><div className="d-flex justify-content-center">{rl.pName}</div></td>
                        <td><div className="d-flex justify-content-center">{rl.appointmentDate}</div></td>
                        <td><div className="d-flex justify-content-center">10am - 11:30am</div></td>
                        <td><div className="d-flex justify-content-center">{rl.role}</div></td>
                    </tr>
                );
            }
            return (
                <tr>
                    <td><div className="d-flex justify-content-center">{rl.pName}</div></td>
                    <td><div className="d-flex justify-content-center">{rl.appointmentDate}</div></td>
                    <td><div className="d-flex justify-content-center">5pm - 6:30pm</div></td>
                    <td><div className="d-flex justify-content-center">{rl.role}</div></td>
                </tr>
            );
        })

    }

    return (
        renderList
    );
}

export default class Care extends Component {
    constructor(props) {
        super(props);

        this.state = {
            role: 'Trainer',
            trainer: [],
            nutritionist: [],
            physiotherapist: [],
            professional: 'Ashna Gandhi',
            date: '',
            time: 'slot1',
            result: [],
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.book = this.book.bind(this);
    }

    componentDidMount() {
        Aos.init({ duration: 1000 });
        axios.defaults.withCredentials = true;
        axios.get('http://fitgenie.ml:5000getList')
            .then(response => {
                if (response.data.success) {
                    this.setState({
                        result: response.data.data,
                    });
                }
            })
            .catch(err => {
                alert(err);
            })
    }

    book(event) {
        let data = {
            role: this.state.role,
            name: this.state.professional,
            date: this.state.date,
            time: this.state.time,
        };

        axios.defaults.withCredentials = true;
        axios.post('http://fitgenie.ml:5000appointment', data)
            .then(response => {
                if (response.data.success) {
                    console.log("Inserted");
                }
            })
            .catch(err => {
                alert(err)
            })
            .finally(res => {
                window.location.reload();
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
        if (this.state.role === 'Trainer') {
            displayProfessional = <select onChange={this.handleInputChange} className="mt-2" name="professional" style={{ border: '1px solid black', width: "100%" }} id="professional">
                <option value="Ashna Gandhi">Ashna Gandhi</option>
                <option value="Sumit Singh">Sumit Singh</option>
                <option value="Aakash Hupta">Aakash Hupta</option>
            </select>
        } else if (this.state.role === 'Physiotherapist') {
            displayProfessional = <select onChange={this.handleInputChange} onBlur={this.handleInputChange} className="mt-2" name="professional" style={{ border: '1px solid black', width: "100%" }} id="professional">
                <option value="Sanjay Shah">Sanjay Shah</option>
            </select>
        } else {
            displayProfessional = <select onChange={this.handleInputChange} onBlur={this.handleInputChange} className="mt-2" name="professional" style={{ border: '1px solid black', width: "100%" }} id="professional">
                <option value="Vibha Patel">Vibha Ptel</option>
                <option value="Vikas Bothra">Vikas Bothra</option>
            </select>
        }

        return (
            <div>
                <Header />
                <img  data-aos="fade-up" className="img-fluid" src='https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/6bd4f44d-7f9b-4971-8279-09097acd476a.png' alt="img" />
                <div className="mt-5 container" data-aos="fade-up">
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
                                    <DisplayAppointments result={this.state.result} />
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
                                        <option value="Trainer">Trainer</option>
                                        <option value="Nutritionist">Nutritionist</option>
                                        <option value="Physiotherapist">Physiotherapist</option>
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
