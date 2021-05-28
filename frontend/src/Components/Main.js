import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Menu from './Menu';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch location={window.location} key={window.location.pathname}>
                    <Route path="/home" component={Home} />
                    <Route path="/eat" component={Menu} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default Main;
