import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Menu from './Menu';
import Cart from './Cart';
import DishWithId from './DishWithId';
import SignUp from './SignUp';
import Care from './Care';

class Main extends Component {
    render() {
        const DishWithId1 = ({ match }) => {
            return (
                <DishWithId dishId={match.params.dishId} />
            );
        }
        return (
            <div>
                <Switch location={window.location} key={window.location.pathname}>
                    <Route path="/home" component={Home} />
                    <Route path='/cart' component={Cart} />
                    <Route exact path="/eat" component={Menu} />
                    <Route path='/eat/:dishId' component={DishWithId1} />
                    <Route path="/login" component={Login} />
                    <Route path="/eat" component={Menu} />
                    <Route path="/signUp" component={SignUp} />
                    <Route path="/care" component={Care} />
                    <Redirect to="/login" />
                </Switch>
            </div>
        );
    }
}

export default Main;
