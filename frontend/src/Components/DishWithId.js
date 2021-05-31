import axios from 'axios'
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Header from './Header';

export default class DishWithId extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishName: '',
            price: 0,
            image: '',

        }
    }

    componentDidMount() {
        axios.get('http://162.245.221.122:5000/getDish', { headers: { id: this.props.dishId } })
            .then(response => {
                if (response.data.success) {
                    this.setState({
                        dishName: response.data.data[0].dishName,
                        price: response.data.data[0].price,
                        image: response.data.data[0].image,
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

                <div className="container mt-5">

                    <div className="row">
                        <div className="col-md-6">
                            <img style={{ width: '100%', height: '75%', borderRadius: '5%' }} className="img-fluid" alt="Food_Image" src={this.state.image} />
                        </div>
                        <div className="col-md-6">
                            <div style={{ height: '11vh' }} className="row">
                                <div className="col-md-6 d-flex justify-content-start">
                                    <h3><strong style={{ fontFamily: 'cursive' }}>{this.state.dishName}</strong></h3>
                                </div>
                                <div className="col-md-6 d-flex justify-content-end">
                                    <h3 style={{ color: '#ff3278' }}>&#8377; {this.state.price}</h3>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <Button style={{ height: '40px', width: '100px', borderRadius: '10vw', borderColor: '#ff3278', backgroundColor: '#ff3278' }}>ADD</Button>
                            </div>
                            <div className="pt-3">
                                <hr />
                                <div className="col-md-6 d-flex justify-content-start pb-4">
                                    <h4><strong style={{ fontFamily: 'cursive' }}>Nutritional Info.</strong></h4>
                                </div>
                                <img src="https://cdn.discordapp.com/attachments/772136891709521943/848122168911200296/Demo_Pie.PNG" alt="demo" />
                                <div>
                                    <p>
                                        Eat fit’s Indian touch to burger with regional favourites - kulcha and butter paneer <br />
                                masala is an absolute sensation. This innovative and new age kulcha burger retains it's desi core
                                flavour while you enjoy the layers of whole wheat kulcha, butter paneer masala and sauteed veggies
                                together.
                                <br />
                                        <br />
                                Allergen Information: Dairy, Vinegar, Soy, Gluten, Nut, Seeds, Nutmeg.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
