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
                    <CardImg id={rl.dishId} role="button" onClick={description} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6108/primary/5_1.jpg" />
                    <p style={{ fontSize: '14px' }} className="mt-2">{rl.dishName}</p>
                    <div className="row">
                        <div className="col-6">
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
                        <div className="row">
                            <div className="col-2">
                                <a href='/eat' role="button" className="text-dark text-decoration-none">Kulcha Burger</a><br /><br />
                                <a href='/' role="button" className="text-dark text-decoration-none">Pizzas</a><br /><br />
                                <a href='/' role="button" className="text-dark text-decoration-none">Indian Meals</a><br /><br />
                                <a href='/' role="button" className="text-dark text-decoration-none">3 Layer Rice Bowls</a><br /><br />
                                <a href='/' role="button" className="text-dark text-decoration-none">Biryani and Kebab</a><br /><br />
                                <a href='/' role="button" className="text-dark text-decoration-none">Bread and Rice</a><br /><br />
                                <a href='/' role="button" className="text-dark text-decoration-none">Veg Curries</a><br /><br />
                                <a href='/' role="button" className="text-dark text-decoration-none">Ice Creams</a><br /><br />
                                <a href='/' role="button" className="text-dark text-decoration-none">Rolls and Po</a><br /><br />
                                <a href='/' role="button" className="text-dark text-decoration-none">All-Day Breakfast</a><br /><br />
                            </div>
                            <div className="col-10">
                                <DisplayMenu result={this.state.result} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
