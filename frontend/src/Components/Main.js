import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Menu from './Menu';
import Cart from './Cart';
import DishWithId from './DishWithId';
import SignUp from './SignUp';
import Care from './Care';
import Profile from './Profile';
import Schedule from './Schedule';
import ScheduleWithId from './ScheduleWithId';
import Questionnair from './Questionnair';

class Main extends Component {
    render() {
        const DishWithId1 = ({ match }) => {
            return (
                <DishWithId dishId={match.params.dishId} />
            );
        }

        const ScheduleWithId1 = ({match}) => {
            return(
                <ScheduleWithId scheduleId = {match.params.scheduleId} />
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
                    <Route path='/profile' component={Profile} />
                    <Route exact path='/schedule' component={Schedule} />
                    <Route path='/schedule/:scheduleId' component={ScheduleWithId1} />
                    <Route path='/questionnair' component={Questionnair} />
                    <Redirect to="/login" />
                </Switch>
            </div>
        );
    }
}

export default Main;
