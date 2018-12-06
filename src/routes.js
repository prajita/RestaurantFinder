import React from "react";
import {  Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import CollectionContainer from './containers/CollectionContainer';
import RestaurantContainer from './containers/RestaurantContainer';
import createBrowserHistory from 'history';
import history from './history';

export default (
    <Router history={history} >
        <div>
            <Route exact path="/" component={Dashboard} />
            <Route path="/city/:cityId/collection/:collectionId" component={CollectionContainer} />
            <Route path="/collections/restaurants/:resid" component={RestaurantContainer}/>
        </div>
    </Router>


)