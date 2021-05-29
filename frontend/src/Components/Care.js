import React, { Component } from 'react'
import { Card, CardBody, FormGroup, Label } from 'reactstrap';
import Header from './Header';

export default class Care extends Component {
    render() {
        return (
            <div>
                <Header />
                <img className="img-fluid" src='https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/6bd4f44d-7f9b-4971-8279-09097acd476a.png' alt="img" />
                <div className="mt-5 container">
                    <Card style={{ borderColor: 'white' }}>
                        <h4><div className="text-primary d-flex justify-content-center">My Appointments</div></h4>
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
                        <h4><div className="text-primary d-flex justify-content-center">Easy Schedule</div></h4>
                        <div className="d-flex justify-content-center">
                            <div className="col-9">
                                <FormGroup>
                                    <Label>Choose professional</Label>
                                    <select className="mt-2" name="professional" style={{ width: "100%" }} id="professional">
                                        <option value="md">Malav Doshi</option>
                                        <option value="ps">Parth Shah</option>
                                    </select>
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
