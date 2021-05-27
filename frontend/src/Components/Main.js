import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch location={window.location} key={window.location.pathname}>
                    <Route exact path="/home" component={Home} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default Main;
