import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Card, CardImg, CardBody, Button, Form, Label } from 'reactstrap';
import Header from './Header';

class ScheduleWithId extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.scheduleId,
            slot: "",
            redirectVar: false,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange( event ){
        let target = event.target
        let name = target.name;
        let value = target.value;
        this.setState({
            slot: value
        })
    }

    handleSubmit(){
        if(!this.state.slot == ""){
            this.setState({
                redirectVar: true,
            })
        }
    }

    render() {
        if(this.state.redirectVar){
            alert("Get your recommend menu, best suited for you");
            return(
                <Redirect to="/eat"/>
            )
        }
        return (
            <div>
                <Header />
                <Card className="m-2" role="button" style={{ backgroundColor: "#F3F4F6", borderColor: "#F3F4F6" }}>
                    <div className="row d-flex justify-content-center">
                        <div className="col-5 col" >
                            <CardImg className="mt-2" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_600,c_fit/dpr_2/v1/cult-media/v2web/workouts/22_id/PRODUCT_BNR_2020-03-04T11:36:46.263Z.png"></CardImg>
                            <CardBody>
                                <p style={{ color: "#F59E0B", size: "7px" }}>SUBTITLE</p>
                                <h5>San Francisco</h5>
                                <p className="mt-3" style={{ color: "#6B7284", size: "10px" }}>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </CardBody>
                        </div>
                        <div className="col-6 col mx-auto">
                            <h2 style={{ color: "#D37B22" }}>Select your schedule</h2>
                            <p style={{ color: "#ED0D78" }}>Get your own professionally recomended menu, best suited according to your preferences and your workout.</p>

                            <Form >
                                <Label >9:00am to 12:00pm :
                                    <input onChange={this.handleInputChange} className="ml-2 mt-3" type="radio" name="slot" value="slot1" />
                                </Label><br />

                                <Label>3:00pm to 6:00pm :
                                    <input onChange={this.handleInputChange} className="ml-2 mt-2" type="radio" name="slot" value="slot2" />
                                </Label><br />

                                <Label>6:00pm to 9:00pm :
                                    <input onChange={this.handleInputChange} className="ml-2 mt-2" type="radio" name="slot" value="slot3" />
                                </Label><br />
                                <Button style={{ backgroundColor: "#D37B22" }} className="btn btn-sm mt-3" onClick={this.handleSubmit}>Select</Button>
                            </Form>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default ScheduleWithId;
