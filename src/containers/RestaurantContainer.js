import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    loadDataByRestaurantId
} from '../actions';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SpinnerComponent from '../components/SpinnerComponent';
import history from '../history';
import NavHeader from '../components/NavHeader';
import '../style.css'
class RestaurantContainer extends Component {

    render() {
        let restaurantId = this.props.match.params.resid;
        let inputData = this.props.restaurants.filter((e) => e.restaurant.id === restaurantId)[0].restaurant;
        let rating_percentage = inputData.user_rating.aggregate_rating ? parseInt(inputData.user_rating.aggregate_rating) * 20 : 0;
        var prct = classNames({
            'width': '65%'
        });
        return (
            <div>
                <div style={{ backgroundColor: "rgb(43,29,14)" }}>
                    <NavHeader />
                </div>

                <div className="row BckdarkChocolate">
                    <div className="col-2" />
                    <div className="col-10" >
                        <h1 style={{ color: "bisque" }}>{inputData.name}</h1>
                        <div className="flex-container "></div>
                    </div>
                </div>

                <div className="container">

                    <div id="carouselSlide" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselSlide" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselSlide" data-slide-to="1"></li>
                            <li data-target="#carouselSlide" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={inputData.featured_image} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={inputData.featured_image} alt="Third slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselSlide" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselSlide" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div className="card-block px-3 Bckbisque">
                        <div className="row ml10p"><br />
                            <span style={{ fontWeight: 'bold' }}>Address</span>
                            <ul>
                                <li>
                                    <span>{inputData.location.address} </span>
                                </li>
                                <li>
                                    <span>{inputData.location.locality} </span>
                                    <span>{inputData.location.zipcode} </span>
                                </li>
                                <li>
                                    <span>{inputData.location.city} </span>
                                </li>
                            </ul>
                        </div>
                        <div className="row ml10p"><br />
                            <span style={{ fontWeight: 'bold' }}>{'Average cost for two people ::'} </span>
                            <span>{inputData.currency}</span>
                            <span>{inputData.average_cost_for_two} </span>
                        </div>
                    </div>

                    {/* <div className="row">
                        <img className="img-fluid" src={inputData.photos[0].thumb_url} />
                    </div> */}



                    <div className="row " style={{ border: "5px solid bisque" }}>
                        <div className="col-12 px-3">
                            <div className="card-block px-3">
                                <p className="card-title backDarkBrown" style={{ fontSize: '20pt' }}>
                                    {'users'}<span>{' commented '}</span>
                                <span className="card-text backDarkBrown">{inputData.user_rating.rating_text} </span></p>
                                
                                <div className="star-ratings-sprite"><span className="star-ratings-sprite-rsting prct"></span></div>
                                
                                <p>{'Total votes::::'}
                                    <span className="card-text" style={{ color: "backDarkBrown" }}>{inputData.user_rating.votes}</span>
                                </p>
                            </div>
                        </div>
                    </div>



                </div>
            </div >
        )
    }
}

RestaurantContainer.propTypes = {
    restaurants: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants,
        loading: state.loading

    };
}
// const mapDispatchToProps = (dispatch) => {
//     return (
//             bindActionCreators(
//         {
//             loadDataByCollectionId

//           }, dispatch
//         )
//       )
//     }

export default connect(mapStateToProps)(RestaurantContainer);
