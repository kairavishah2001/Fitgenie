import React, { Component, useState } from 'react';
import Header from './Header';
import { Card, CardBody, CardImg, Button } from 'reactstrap';
import { Redirect } from 'react-router';
import axios from 'axios';

function DisplayExercise({ result }) {

    const [redirectVar, changeRedirectVar] = useState(false);
    const [id, changeId] = useState(0);

    function handleClick(event) {
        changeId(event.target.id);
        changeRedirectVar(true);
    }

    let renderList
    if (result.length === 0) {
        renderList = <strong>Nothing Here</strong>
    } else {
        // eslint-disable-next-line array-callback-return
        renderList = result.map((rl) => {
            if (redirectVar) {
                return (
                    <Redirect to={`/schedule/${id}`} />
                );
            }
            return (
                <Card className="m-2 col-md-3" style={{ backgroundColor: "#F3F4F6", borderColor: "#F3F4F6" }}>
                    <div>
                        <CardImg className="mt-2" src={rl.image}></CardImg>
                        <CardBody>
                            <p style={{ color: "#F59E0B", size: "7px" }}>{rl.reqNutrient}</p>
                            <h5>{rl.workType}</h5>
                            <p className="mt-3" style={{ color: "#6B7284", size: "10px" }}>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            <div className="d-flex justify-content-center">
                                <Button style={{ backgroundColor: '#D37B22', height: '37px', width: '100px', borderRadius: '10vw', borderColor: '#D37B22' }} className="img-fluid btn mb-2 stretched-link" id={rl.workoutId} onClick={handleClick}>Go</Button>
                            </div>
                        </CardBody>
                    </div>
                </Card>
            );
        })

    }

    return (
        renderList
    );
}

export default class Schedule extends Component {

    constructor(props) {
        super(props)

        this.state = {
            redirectVar: false,
            result: [],
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            id: event.target.id,
            redirectVar: true,
        })
    }

    componentDidMount() {
        axios.defaults.withCredentials = true;
        axios.get('http://fitgenie.ml:5000/scheduleList')
            .then(response => {
                if (response.data.success) {
                    this.setState({
                        result: response.data.data,
                    })
                }
            })
            .catch(err => {
                alert(err);
            })
    }

    render() {

        if (this.state.redirectVar) {
            return (
                <Redirect to={`/schedule/${this.state.id}`} />
            )
        }

        return (
            <div>
                <Header />
                <div className="container">
                    <h2 className="mt-4">Pick your choice of workout for today!</h2>
                    <p style={{ color: "#6B7284", size: "10px" }}>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm to table. Franzen you probably have not heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>

                    <div className="row d-flex justify-content-center mb-2">
                        <DisplayExercise result={this.state.result} />
                    </div>
                </div>
            </div>
        )
    }
}
