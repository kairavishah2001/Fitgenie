import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText } from 'reactstrap';
import Aos from 'aos';
import "aos/dist/aos.css";
import Header from './Header';

class Home extends Component {
    componentDidMount() {
        Aos.init({duration: 1000});
    }

    render() {
        return (
            <div>
            <Header/>
            <div className="container" data-aos="fade-up">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <h2 className="d-flex mt-2 justify-content-center">For the <span className="text-primary mx-2"> love </span> of fit</h2>
                        <p className="mx-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse id ex elit. Suspendisse laoreet
                            venenatis malesuada. Ut venenatis in nisi a semper.
                            Nam vitae sodales mauris, fringilla ullamcorper
                            metus. Sed vel vulputate metus, molestie volutpat
                            mauris. Integer luctus aliquam ornare. Maecenas
                            malesuada nunc mollis, pellentesque neque in,
                            eleifend nunc. Proin fringilla laoreet iaculis.
                            Mauris posuere ex pharetra, scelerisque ligula
                            vitae, sodales arcu. Nam scelerisque lorem augue,
                            id dapibus massa ultricies porttitor. Nam eu rutrum
                            eros. Suspendisse et lectus ut sapien aliquet
                            placerat. Pellentesque rhoncus quis orci quis
                            posuere. Quisque at semper nisi. Cras auctor,
                            lorem non molestie faucibus, purus eros consequat
                            mi, eget maximus eros orci vitae ipsum.
                        </p>
                    </div>
                    <div className="col-md-3">
                        <img alt="Home_Image" className="img-fluid" src="https://cdn.discordapp.com/attachments/700657636718149735/847435279879241738/Fitness_tracker-bro.png" />
                    </div>
                </div>
                <div className='d-flex justify-content-center' data-aos="fade-up">
                    <div className="mt-3 col-md-6">
                        <Card style={{ border: 'white' }}>
                            <div className="row">
                                <h3 className="col-10" style={{ fontFamily: 'cursive' }}>Eat</h3>
                                <a href="/eat" className="stretched-link col-2 mt-1 text-decoration-none d-flex justify-content-end" role="button" style={{ fontFamily: 'cursive' }}>Explore</a>
                            </div>
                            <h6>Healthy, Tasty, Everyday Food!</h6>
                            <p style={{fontSize: '10px'}}>Indulge in healthy meals that are both nutritious and delicious</p>
                            <div className="d-flex justify-content-center mb-2">
                                
                                <CardImg style={{borderRadius: '2%'}} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/257e0d59-ebf5-406d-a775-ba22ed951dc8.png" />
                                <CardImgOverlay>
                                    <CardText>
                                        <div className="text-light pt-5 mt-5">
                                            <CardText><strong>Home Style</strong></CardText>
                                            <small style={{color: 'whitesmoke'}}>Nothing can beat the Great Indian Thali. Enjoy <br />
                                                homestyle food just like mum's, made with less <br />
                                                oil and mild spices. <br />
                                            </small>
                                        </div>
                                    </CardText>
                                </CardImgOverlay>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className='d-flex justify-content-center' data-aos="fade-up">
                    <div className="mt-3 col-md-6">
                        <Card style={{ border: 'white' }}>
                            <div className="row">
                                <h3 className="col-10" style={{ fontFamily: 'cursive' }}>Care</h3>
                                <a href="/" className="stretched-link col-2 mt-1 text-decoration-none d-flex justify-content-end" role="button" style={{ fontFamily: 'cursive' }}>Explore</a>
                            </div>
                            <h6>Making health rasy and accessible</h6>
                            <p style={{fontSize: '10px'}}>Book online doctor consultations and schedule diagnostic tests at home.</p>
                            <div className="d-flex justify-content-center mb-2">
                                
                                <CardImg style={{borderRadius: '2%'}} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/0f4c194a-3d2c-453c-8a3a-fdf20bd03699.png" />
                                <CardImgOverlay>
                                    <CardText>
                                        <div className="pt-5 mt-5">
                                            <CardText><strong>Online Doctor Consultation</strong></CardText>
                                            <small>Consilt with our doctors and specialists <br />
                                                orthopedics, pediatricians and gynaecologists <br />
                                                for all your medical needs with minimum wait <br />
                                                time.
                                            </small>
                                        </div>
                                    </CardText>
                                </CardImgOverlay>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Home;