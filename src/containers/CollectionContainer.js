import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  loadDataByCollectionId
} from '../actions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SpinnerComponent from '../components/SpinnerComponent';
import { Redirect } from 'react-router-dom';
import history from '../history';

class CollectionContainer extends Component {

  componentWillMount() {
    this.props.loadDataByCollectionId(this.props.match.params.collectionId, this.props.match.params.cityId);
  }
  render() {

    let restaurantCards = this.props.restaurants.map(e => {
      return (
        <div className="row ">
          <div className="col-md-4">
            <img src={e.restaurant.featured_image} className="w-100" />
          </div>
          <div className="col-md-8 px-3">
            <div className="card-block px-3">
              <h4 className="card-title" style={{ color: "bisque" }}>{e.restaurant.name}</h4>
              <p className="card-text" style={{ color: "bisque" }}>{e.restaurant.cuisines} </p>
              <p className="card-text" style={{ color: "bisque" }}>{e.restaurant.cuisines}</p>
              <a href="#" className="btn btn-success">Read More</a>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div style={{ backgroundColor: "rgb(43,29,14)" }}>

        <div className="container">
          <div className="row">
            <div className="col-4"><Link to="/"><button className="btn btn-success">Back to dashboard</button></Link>
            </div>
            <div className="col-8" >
              <h1 style={{ color: "white" }}>choose your favourite restaurant !</h1>
              <div className="flex-container "></div>
            </div>
          </div>
        </div><br /><br />

        {restaurantCards}
        {this.props.loading &&
          <SpinnerComponent message="Loading collections..." />
        }
      </div>


    )
  }
}

CollectionContainer.propTypes = {
  restaurants: PropTypes.array,
  loadDataByCollectionId: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
    loading: state.loading

  };
}
const mapDispatchToProps = (dispatch) => {
  return (
    bindActionCreators(
      {
        loadDataByCollectionId

      }, dispatch
    )
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CollectionContainer);
