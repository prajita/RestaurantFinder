import React from "react";
import {  Router, Route, Switch } from 'react-router-dom';
import RestaurantDashboard from './RestaurantDashboard';
import OutletContainer from './containers/OutletContainer';
import createBrowserHistory from 'history';
import history from './history'

export default (
    <Router history={history} >
        <Switch>
            <Route path="/" component={RestaurantDashboard} />
            <Route path="/collection" component={OutletContainer} />
        </Switch>
    </Router>


)