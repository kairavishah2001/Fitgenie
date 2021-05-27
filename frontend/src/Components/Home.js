import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <h2 className="d-flex justify-content-center">For the <span className="text-primary mx-2"> love </span> of fit</h2>
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
                <div className='d-flex justify-content-center'>
                    <div className="mt-3 col-8">
                        <Card style={{ border: 'white' }}>
                            <div className="row">
                                <h3 className="col-10" style={{ fontFamily: 'cursive' }}>Subscriptions</h3>
                                <a href="/" className="col-2 mt-1 text-decoration-none d-flex justify-content-end" role="button" style={{ fontFamily: 'cursive' }}>Explore</a>
                            </div>
                            <CardImg style={{ maxHeight: '50vh', maxWidth: '50vh' }} src="https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/6285c073-5e3d-4abf-9189-21403628a1f4.png" />
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;