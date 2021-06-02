import React, { Component } from 'react';
import { Form, Label, Input, FormGroup, Card, CardImg, Button } from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";

class Questionnair extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: [],
            redirectVar: false,
        }

        this.saveData = this.saveData.bind(this);
    }

    componentDidMount() {
        Aos.init({ duration: 1000 });
        axios.defaults.withCredentials = true;
        axios.get('http://fitgenie.ml:5000getIngredients')
            .then(response => {
                if (response.data.success) {
                    this.setState({
                        result: response.data.data,
                    })
                    // alert(JSON.stringify(this.state))
                }
            })
            .catch(err => {
                alert(err);
            })
    }

    saveData(event) {
        alert('Saved. Please login again.');
        this.setState({
            redirectVar: true,
        })
    }

    render() {
        if (this.state.redirectVar) {
            return (
                <Redirect to='/login' />
            );
        }
        // eslint-disable-next-line array-callback-return
        let renderList = this.state.result.map((rl) => {
            return (
                <div className="col-4">
                    <FormGroup>
                        <Input id={rl.ingredientId} name={rl.ingredientName} type="checkbox" /> <Label>{rl.ingredientName}</Label>
                    </FormGroup>
                </div>
            );
        })
        return (
            <div>
                <div className="container">
                    <Card style={{ borderColor: 'white' }}>
                        <div className="text-primary d-flex justify-content-center">
                        <h3>Select all that apply</h3>
                        </div>
                        <div className="d-flex justify-content-center">
                            <CardImg style={{ width: '25%' }} className="img-fluid" src="https://cdn.discordapp.com/attachments/802068802732425227/848864910578155550/Forms.gif" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <Form>
                                <div className="d-flex justify-content-center text-primary"><h4>Preferred Items</h4></div>
                                <div className="row">
                                    {renderList}
                                </div>
                                <div className="d-flex justify-content-center text-primary"><h4 className="mt-2">Medical Details</h4></div>
                                {/* <strong>Any aliments?</strong> */}
                                <div className="row">
                                    <div className="col-4">
                                        <FormGroup>
                                            <Input name='diabetes' type="checkbox" /> <Label>Diabetes</Label>
                                        </FormGroup>
                                    </div>
                                    <div className="col-4">
                                        <FormGroup>
                                            <Input name='thyroid' type="checkbox" /> <Label>Thyroid</Label>
                                        </FormGroup>
                                    </div>
                                    <div className="col-4">
                                        <FormGroup>
                                            <Input name='blood pressure' type="checkbox" /> <Label>Blood Pressure</Label>
                                        </FormGroup>
                                    </div>
                                    <div className="col-4">
                                        <FormGroup>
                                            <Input name='cholestrol' type="checkbox" /> <Label>Cholestrol</Label>
                                        </FormGroup>
                                    </div>
                                    <Button onClick={this.saveData} className="my-2" color="primary">Save</Button>
                                </div>
                            </Form>
                        </div>
                    </Card>
                </div>

            </div>
        );
    }
}
export default Questionnair;
