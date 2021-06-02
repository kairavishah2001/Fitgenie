import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import {Button, Card, CardImg} from 'reactstrap';
import Aos from 'aos';
import "aos/dist/aos.css";

class Recomendations extends Component {

    constructor(props){
        super(props);
        this.state={
            data: []
        }

        this.renderDishes = this.renderDishes.bind(this);
    }

    

    renderDishes(){
        let renderList = this.state.map((rl) => {
            return (
                <div className="col-md-3">
                    <Card style={{ borderColor: 'white' }}>
                        <div className="d-flex justify-content-center">
                            <CardImg style={{ width: '90%', height: '60%', borderRadius: '7.5%' }} id={rl.dishId} role="button"  src={rl.image} />
                        </div>
                        <p style={{ fontSize: '14px' }} className="mt-2">{rl.dishName}</p>
                        <div className="row">
                            <div className="col-6">
                                <p>	&#8377; {rl.price}</p>
                            </div>
                            <div className="d-flex justify-content-end col-6">
                                <Button style={{ height: '30px', width: '100px', borderRadius: '10vw', borderColor: 'red' }} className="btn-sm" color="white" id={rl.dishId} >ADD</Button>
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

    componentDidMount(){
        Aos.init({ duration: 1000 });
        axios.get("http://fitgenie.ml:5000/getRecomendation", {headers: {id: this.props.id}})
        .then( response => {
            if(response.data.success){
                alert(JSON.stringify(response.data))
                this.setState({
                    data: response.data,
                })   
            }
        })
    }

    render() {

        if(this.state.data.length===0){
            return (
                <div>
                    <Header/>
                    You have no scheduled workout yet.
                </div>
            );
        }
        return (
            <div>
                <Header/>
                <div className="container"  data-aos="fade-up">
                    <h2 style={{color:"#D37B22"}}>Here are the best recommendations from our experts, best fitting to your preferences and your workout</h2>
                    {this.renderDishes}
                </div>
            </div>
        );
    }
}

export default Recomendations;
