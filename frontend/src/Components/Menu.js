import React, { Component, useState } from 'react';
import { Card, CardImg, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

function DisplayMenu({ result }) {
    const [redirectVar, changeRedirectVar] = useState(false);
    const [id, changeId] = useState(0);

    function description(event) {
        changeId(event.target.id);
        changeRedirectVar(true);
    }

    let renderList = result.map((rl) => {
        if (redirectVar) {
            return (
                <Redirect to={`/eat/${id}`} />
            );
        }
        return (
            <div className="col-md-4">
                <Card style={{ borderColor: 'white' }}>
                    <CardImg style={{ width: '90%', height: '60%', borderRadius: '7.5%' }} id={rl.dishId} role="button" onClick={description} src={rl.image} />
                    <p style={{ fontSize: '14px' }} className="mt-2">{rl.dishName}</p>
                    <div className="row">
                        <div className="col-md-6">
                            <p>	&#8377; {rl.price}</p>
                        </div>
                        <div className="d-flex justify-content-end col-6">
                            <Button style={{ height: '30px', width: '100px', borderRadius: '10vw', borderColor: 'red' }} className="btn-sm" color="white" onClick={() => { alert("ADDED") }}>ADD</Button>
                        </div>
                    </div>
                </Card>
            </div>
        );
    })
    return (
        <div className="row">
            {renderList}
        </div>
    );
}

export default class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/eat')
            .then(response => {
                if (response.data.success) {
                    this.setState({
                        result: response.data.data,
                    });
                }
            })
            .catch(err => {
                alert(err.message);
            })

    }

    render() {
        return (
            <div>
                <Header />
                <img style={{ width: '100vw' }} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/52dad53b-dd43-489f-9ed4-02fb2c3461be.jpeg" alt="Offer" />
                <div className="mt-5">
                    <div className="container">
                        <DisplayMenu result={this.state.result} />
                    </div>
                </div >
            </div >
        )
    }
}
