import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  loadDataByCollectionId
} from '../actions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SpinnerComponent from '../components/SpinnerComponent';
import NavHeader from '../components/NavHeader';

class CollectionContainer extends Component {
 
  componentWillMount() {
    this.props.loadDataByCollectionId(this.props.match.params.collectionId, this.props.match.params.cityId);
  }
  render() {
    let namelist = this.props.restaurants.map(e => e.restaurant.name);
    let restaurantCards = this.props.restaurants.map((e, index) => {
      return (
        <React.Fragment key={index}>
          <div className="row " style={{ border: "5px solid bisque" }}>
            <div className="col-4">
              <img src={e.restaurant.featured_image} className="w-100" />
            </div><br />
            <div className="col-8 px-3">
              <div className="card-block px-3">
                <Link to={"/collections/restaurants/" + e.restaurant.id} className="card-title" style={{ color: "bisque", fontSize: '20pt', fontWeight: 'Bold' }}>
                  {e.restaurant.name}</Link>
                <p className="card-text" style={{ color: "bisque" }}>{e.restaurant.cuisines} </p>
                <p className="card-text" style={{ color: "bisque" }}>{e.restaurant.location.address}</p>
                <p className="card-text" style={{ color: "bisque" }}>{e.restaurant.location.locality + ',' + e.restaurant.location.city}</p>
                <p className="card-text" style={{ color: "bisque" }}>{'Avg cost for 2 people : Rs.' + e.restaurant.average_cost_for_two}</p>
                <Link to={"/collections/restaurants/" + e.restaurant.id} className="btn btn-success">Read More</Link>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    })

    return (
      <div style={{ backgroundColor: "rgb(43,29,14)" }}>
        <NavHeader />
        <div className="container">
          <div className="row">
            <div className="col-4"><Link to="/">
              <button className="btn btn-success">Back to dashboard</button></Link>
            </div>
            <div className="col-8" >
              <h1 style={{ color: "white" }}>choose your favourite restaurant !</h1>
              <div className="flex-container "></div>
            </div>
          </div>
        </div><br /><br />
        {restaurantCards}
        {this.props.loading &&
          <SpinnerComponent message="Loading restaurants..." />
        }
      </div>


    )
  }
}

CollectionContainer.propTypes = {
  restaurants: PropTypes.array,
  loadDataByCollectionId: PropTypes.func,
  loading: PropTypes.bool
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
