import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import {configureStore} from './store';  
import routes from './routes';


const store = configureStore();
var mountNode = document.getElementById("app");
ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    mountNode
);
