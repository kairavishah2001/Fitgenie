import React, { Component } from 'react';
import Header from './Header';
import { Card, CardBody, CardImg, Button } from 'reactstrap';
import { Redirect } from 'react-router';

export default class Schedule extends Component {

    constructor(props) {
        super(props)

        this.state = {
            redirectVar: false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            id: event.target.id,
            redirectVar: true,
        })
    }

    render() {

        if (this.state.redirectVar) {
            return(
                <Redirect to={`/schedule/${this.state.id}`} />
            )
        }

        return (
            <div>
                <Header />
                <div className="container">
                    <h2 className="mt-4">Pick your choice of workout for today!</h2>
                    <p style={{ color: "#6B7284", size: "10px" }}>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm to table. Franzen you probably have not heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>

                    <div className="row d-flex justify-content-center ">
                        <Card className="m-2 col-md-3" style={{ backgroundColor: "#F3F4F6", borderColor: "#F3F4F6" }}>
                            <div>
                                <CardImg className="mt-2" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_600,c_fit/dpr_2/v1/cult-media/v2web/workouts/22_id/PRODUCT_BNR_2020-03-04T11:36:46.263Z.png"></CardImg>
                                <CardBody>
                                    <p style={{ color: "#F59E0B", size: "7px" }}>SUBTITLE</p>
                                    <h5>San Francisco</h5>
                                    <p className="mt-3" style={{ color: "#6B7284", size: "10px" }}>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                    <Button className="btn stretched-link mb-2" id="1" onClick={this.handleClick}  style={{ backgroundColor: "#D37B22" }} >Go</Button>
                                </CardBody>
                            </div>
                        </Card>
                        <Card className="m-2 col-md-3" style={{ backgroundColor: "#F3F4F6", borderColor: "#F3F4F6" }}>
                            <div>
                                <CardImg className="mt-2" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_600,c_fit/dpr_2/v1/cult-media/v2web/workouts/22_id/PRODUCT_BNR_2020-03-04T11:36:46.263Z.png"></CardImg>
                                <CardBody>
                                    <p style={{ color: "#F59E0B", size: "7px" }}>SUBTITLE</p>
                                    <h5>San Francisco</h5>
                                    <p className="mt-3" style={{ color: "#6B7284", size: "10px" }}>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </CardBody>
                            </div>
                        </Card>
                        <Card className="m-2 col-lg-3 col-md-3 col-10" style={{ backgroundColor: "#F3F4F6", borderColor: "#F3F4F6" }}>
                            <div>
                                <CardImg className="mt-2" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_600,c_fit/dpr_2/v1/cult-media/v2web/workouts/22_id/PRODUCT_BNR_2020-03-04T11:36:46.263Z.png"></CardImg>
                                <CardBody>
                                    <p style={{ color: "#F59E0B", size: "7px" }}>SUBTITLE</p>
                                    <h5>San Francisco</h5>
                                    <p className="mt-3" style={{ color: "#6B7284", size: "10px" }}>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </CardBody>
                            </div>
                        </Card>
                        <Card className="m-2 col-md-3" style={{ backgroundColor: "#F3F4F6", borderColor: "#F3F4F6" }}>
                            <div>
                                <CardImg className="mt-2" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_600,c_fit/dpr_2/v1/cult-media/v2web/workouts/22_id/PRODUCT_BNR_2020-03-04T11:36:46.263Z.png"></CardImg>
                                <CardBody>
                                    <p style={{ color: "#F59E0B", size: "7px" }}>SUBTITLE</p>
                                    <h5>San Francisco</h5>
                                    <p className="mt-3" style={{ color: "#6B7284", size: "10px" }}>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </CardBody>
                            </div>
                        </Card>
                        <Card className="m-2 col-md-3" style={{ backgroundColor: "#F3F4F6", borderColor: "#F3F4F6" }}>
                            <div>
                                <CardImg className="mt-2" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_600,c_fit/dpr_2/v1/cult-media/v2web/workouts/22_id/PRODUCT_BNR_2020-03-04T11:36:46.263Z.png"></CardImg>
                                <CardBody>
                                    <p style={{ color: "#F59E0B", size: "7px" }}>SUBTITLE</p>
                                    <h5>San Francisco</h5>
                                    <p className="mt-3" style={{ color: "#6B7284", size: "10px" }}>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </CardBody>
                            </div>
                        </Card>
                        <Card className="m-2 col-md-3" style={{ backgroundColor: "#F3F4F6", borderColor: "#F3F4F6" }}>
                            <div>
                                <CardImg className="mt-2" src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_600,c_fit/dpr_2/v1/cult-media/v2web/workouts/22_id/PRODUCT_BNR_2020-03-04T11:36:46.263Z.png"></CardImg>
                                <CardBody>
                                    <p style={{ color: "#F59E0B", size: "7px" }}>SUBTITLE</p>
                                    <h5>San Francisco</h5>
                                    <p className="mt-3" style={{ color: "#6B7284", size: "10px" }}>Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                                </CardBody>
                            </div>
                        </Card>
                    </div>


                </div>
            </div>
        )
    }
}
