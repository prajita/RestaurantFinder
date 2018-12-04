import React from "react";
import { BrowserRouter , Router, Route, Switch } from 'react-router-dom';
import RestaurantDashboard from './RestaurantDashboard';
import OutletContainer from './containers/OutletContainer';
import createBrowserHistory from 'history/createBrowserHistory';

export default (
    <BrowserRouter >
        <Switch>
            <Route path="/" component={RestaurantDashboard} />
            <Route path="/collection" component={OutletContainer} />
        </Switch>
    </BrowserRouter>


)