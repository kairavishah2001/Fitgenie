import React, { Component } from 'react';
import { Card } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="d-flex justify-content-center">For the love of fit</h2>
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
                <div className="mt-3" id="container">
                    <Card style={{border: 'white'}}>
                        <div className="row">
                            <h3 className="col-10" style={{ fontFamily: 'cursive' }}>Subscriptions</h3>
                            <a href="/" className="col-2 mt-1 text-decoration-none d-flex justify-content-end" role="button" style={{ fontFamily: 'cursive' }}>Explore</a>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Home;