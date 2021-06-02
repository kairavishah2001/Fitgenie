import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import {Button, Card, CardImg} from 'reactstrap';

function RenderDishes({data}) {
        let renderList = data.map((rl) => {
            if(rl.dishId== 'MN201' || rl.dishId== 'MV203' || rl.dishId== 'MV205' || rl.dishId== 'MN103' ){
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
            );}
        })
        return (
            <div className="row">
                {renderList}
            </div>
        );
}

class Recomendations extends Component {

    constructor(props){
        super(props);
        this.state={
            data: []
        }
    }

    

    

    componentDidMount(){
        axios.get("http://fitgenie.ml:5000/getRecomendation", {headers: {id: this.props.id}})
        .then( response => {
            if(response.data.success){
                this.setState({
                    data: response.data.data,
                })   
            }
        })
    }

    render() {

        if(this.state.data.length===0){
            return (
                <div>
                    <Header/>
                    <div className="container mt-5 "> 
                    <h4 className="d-flex justify-content-center" style={{color:"#D37B22"}}> Your health is up to date since you maintained streak to intake healthy diet and and be consistent in your workout</h4>
                    <h6>Today is your cheat day</h6>
                    <Button className="btn btn-success">go</Button>
                    </div>
                </div>
            );
        }
        return (
            <div>
                <Header/>
                <div className="container">
                    <h2 style={{color:"#D37B22"}}>Here are the best recommendations from our experts, best fitting to your preferences and your workout</h2>
                    <RenderDishes data={this.state.data} />
                </div>
            </div>
        );
    }
}

export default Recomendations;
