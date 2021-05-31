import React, { Component } from 'react';
import axios from 'axios';

class Recomendations extends Component {

    constructor(props){
        super(props);
    }
//1. back, workout sp req components
//2. remove all components with allergy
//3. find and print food

    componentDidMount(){
        axios.get("http://localhost:5000/getIngrediant", {headers: {id: this.props.id}})
        .then( response => {
            if(response.data.success){
                console.log("Dish Added");
            }
        })
    }

    render() {
        return (
            <div>
                 
            </div>
        );
    }
}

export default Recomendations;
