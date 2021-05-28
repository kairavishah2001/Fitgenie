import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Menu from './Menu';
import SignUp from './SignUp';

class Main extends Component {
    render() {
        return (
            <div>
                <Switch location={window.location} key={window.location.pathname}>
                    <Route exact path="/home" component={Home} />
                    <Route path = "/login" component={Login} />
                    <Route path="/eat" component={Menu} />
                    <Route path="/signUp" component={SignUp} />
                    <Redirect to="/login" />
                </Switch>
            </div>
        );
    }
}

export default Main;
