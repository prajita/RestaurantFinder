import React from "react";
import { BrowserRouter , Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import RestaurantDashboard from './RestaurantDashboard';
import OutletContainer from './containers/OutletContainer';

export default (
    <BrowserRouter history={browserHistory} >
        <Switch>
            <Route path="/" component={RestaurantDashboard} />
            <Route path="/collection" component={OutletContainer} />
        </Switch>
    </BrowserRouter>


)