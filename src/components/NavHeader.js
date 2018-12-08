import React, { Component } from 'react';
import '../style.css';
import {Link} from 'react-router-dom';

export default class NavHeader extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-sm Bckbisque navbar-dark">
        <ul className="navbar-nav">
            <li className="nav-item active ">
                <Link className="nav-link colorDarkChocolate" to='/'>Home</Link>
            </li>
            <li className="nav-item active ">
                <Link className="nav-link colorDarkChocolate" to='/'>Back to Collections</Link>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle colorDarkChocolate" href="javascript:void(0)" id="navbardrop" data-toggle="dropdown">
                Order your food
            </a>
            <div className="dropdown-menu">
                <a className="dropdown-item" href="javascript:void(0)">Breakfast</a>
                <a className="dropdown-item" href="javascript:void(0)">Lunch</a>
                <a className="dropdown-item" href="javascript:void(0)">Dinner</a>
                <a className="dropdown-item" href="javascript:void(0)">Beverages</a>
                <a className="dropdown-item" href="javascript:void(0)">Desserts & bakes</a>
            </div>
            </li>
        </ul>
    </nav>
    )
  }
}
