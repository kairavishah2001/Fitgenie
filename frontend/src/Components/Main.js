import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import Cart from './Cart';
import DishWithId from './DishWithId';

class Main extends Component {
    render() {
        const DishWithId1 = ({match}) =>{
            return(
                <DishWithId dishId={match.params.dishId} />
            );
        }
        return (
            <div>
                <Header />
                <Switch location={window.location} key={window.location.pathname}>
                    <Route path="/home" component={Home} />
                    <Route path='/cart' component={Cart} />
                    <Route exact path="/eat" component={Menu} />
                    <Route path='/eat/:dishId' component={DishWithId1} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        );
    }
}

export default Main;
