import axios from 'axios';
import React, { Component } from 'react';
// import { Redirect } from 'react-router';
import { Card, CardImg, CardBody, Button, Form, Label, Input } from 'reactstrap';
import Header from './Header';
import Recommendation from './Recomendations';

class ScheduleWithId extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.scheduleId,
            slot: "",
            redirectVar: false,
            result: {},
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        let target = event.target
        // let name = target.name;
        let value = target.value;
        this.setState({
            slot: value
        })
    }

    handleSubmit() {
        // alert(JSON.stringify(this.state));
        let data = {
            workoutId: this.props.scheduleId,
            time: this.state.slot,
        }

        // alert(data.time);
        
        axios.defaults.withCredentials = true;
        axios.post('http://localhost:5000/addSchedule', data)
            .then(response => {
                if(response.data.success) {
                    this.setState({
                        redirectVar: true,
                    })
                }
            })
            .catch(err => {
                alert(err);
            })
    }

    componentDidMount() {
        axios.get('http://localhost:5000/getSchedule', { headers: { id: this.props.scheduleId } })
            .then(response => {
                if (response.data.success) {
                    this.setState({
                        result: response.data.data[0],
                    });
                }
            })
            .catch(err => {
                alert(err);
            })
    }

    render() {
        if (this.state.redirectVar) {
            return(
                <div>
                    <Recommendation id={this.props.scheduleId} />
                </div>
            )
        }
        return (
            <div>
                <Header />
                <Card className="m-2" role="button" style={{ backgroundColor: "#F3F4F6", borderColor: "#F3F4F6" }}>
                    <div className="row d-flex justify-content-center">
                        <div className="col-5 col" >
                            <CardImg className="mt-2" src={this.state.result.image}></CardImg>
                            <CardBody>
                                {/* <p style={{ color: "#F59E0B", size: "7px" }}>{this.state.result.reqNutrient}</p> */}
                                <h5>{this.state.result.workType}</h5>
                                <p className="mt-3" style={{ color: "#6B7284", size: "10px" }}>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </CardBody>
                        </div>
                        <div className="col-6 col mx-auto">
                            <h2 style={{ color: "#D37B22" }}>Select your schedule</h2>
                            <p style={{ color: "#ED0D78" }}>Get your own professionally recomended menu, best suited according to your preferences and your workout.</p>

                            <Form >
                                <Label>9:00am to 12:00pm
                                    <Input onChange={this.handleInputChange} className="ml-2" type="radio" name="slot" value="slot1" />
                                </Label><br />

                                <Label>3:00pm to 6:00pm
                                    <Input onChange={this.handleInputChange} className="ml-3.5" type="radio" name="slot" value="slot2" />
                                </Label><br />

                                <Label>6:00pm to 9:00pm
                                    <Input onChange={this.handleInputChange} className="ml-3.5" type="radio" name="slot" value="slot3" />
                                </Label><br />
                                <Button style={{ backgroundColor: "#D37B22", height: '37px', width: '100px', borderRadius: '10vw' }} className="btn btn-sm mt-3" onClick={this.handleSubmit}>Select</Button>
                            </Form>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default ScheduleWithId;
