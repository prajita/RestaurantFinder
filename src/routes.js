import React from "react";
import {  Router, Route, Switch } from 'react-router-dom';
import RestaurantDashboard from './RestaurantDashboard';
import CollectionContainer from './containers/CollectionContainer';
import createBrowserHistory from 'history';
import history from './history';

export default (
    <Router history={history} >
        <div>
            <Route exact path="/" component={RestaurantDashboard} />
            <Route path="/city/:cityId/collection/:collectionId" component={CollectionContainer} />
        </div>
    </Router>


)