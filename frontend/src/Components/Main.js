import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

class Main extends Component {
    render() {
        return (
            <Switch location={window.location} key={window.location.pathname}>
                <Header />
                <Route path="/home" component={Home} />
                <Redirect to="/home" />
            </Switch>
        );
    }
}

export default Main;
