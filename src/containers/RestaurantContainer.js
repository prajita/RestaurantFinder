import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    loadReviewsByRestaurantId
} from '../actions';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SpinnerComponent from '../components/SpinnerComponent';
import ReviewComponent from '../components/ReviewComponent';
import history from '../history';
import NavHeader from '../components/NavHeader';
import '../style.css';
import StarRatingComponent from 'react-star-rating-component';
import ReduxLazyScroll from 'redux-lazy-scroll';

class RestaurantContainer extends Component {

    fetchRestaurantReviews(restaurantId) {
        this.props.loadReviewsByRestaurantId(restaurantId, this.props.reviewStart, this.props.reviewCount);
    }
    componentWillUpdate(nextProps) {
        return this.props.reviews.length !== nextProps.reviews.length;
    }

    render() {
        let restaurantId = this.props.match.params.resid;
        let inputData = this.props.restaurants.filter((e) => e.restaurant.id === restaurantId)[0].restaurant || {};
        let ratingVal = inputData.user_rating ? parseInt(inputData.user_rating.aggregate_rating) : 0;

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
                                    {'users'}<span>{' commented - '}</span>
                                    <span className="card-text backDarkBrown font-italic">{inputData.user_rating.rating_text}
                                    </span>
                                </p>
                                <div>
                                    <span>Overall User Rating</span>
                                    <span>   <StarRatingComponent
                                        name="rate1"
                                        starCount={5}
                                        value={ratingVal}
                                    /></span>
                                </div>

                                <p>{'Total votes - '}
                                    <span className="card-text" style={{ color: "backDarkBrown" }}>{inputData.user_rating.votes}</span>
                                </p>
                                <div><button className="btn btn-success"
                                    onClick={()=>this.fetchRestaurantReviews(restaurantId)}>check Reviews</button></div>
                                {this.props.showReviews &&

                                    <div className="container posts-lazy-scroll">
                                        <ReduxLazyScroll
                                            isFetching={this.props.isFetching}
                                            loadMore={()=>this.fetchRestaurantReviews(restaurantId)}
                                            hasMore={this.props.hasMore}
                                        >
                                            <ReviewComponent reviewData={this.props.reviews} />
                                        </ReduxLazyScroll>
                                        <div className="row posts-lazy-scroll__messages">
                                            {(this.props.isFetching && this.props.hasMore) && <div className="alert alert-info"> Loading more posts... </div>}

                                            {!this.props.hasMore &&
                                                <div className="alert alert-success">All the posts has been loaded successfully.</div>
                                            }
                                        </div>
                                    </div>

                                }
                            </div>
                        </div>
                    </div>



                </div>
            </div >
        )
    }
}

RestaurantContainer.propTypes = {
    restaurants: PropTypes.array,
    loadReviewsByRestaurantId: PropTypes.func,
    reviews: PropTypes.array,
    reviewStart: PropTypes.number,
    reviewCount: PropTypes.number,
    showReviews: PropTypes.bool,
    loading: PropTypes.bool,
    hasMore: PropTypes.bool,
    isFetching: PropTypes.bool
};

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants,
        loading: state.loading,
        reviews: state.reviews,
        reviewStart: state.reviewStart,
        reviewCount: state.reviewCount,
        showReviews: state.showReviews,
        isFetching: state.isFetching,
        hasMore: state.hasMore

    };
}
const mapDispatchToProps = (dispatch) => {
    return (
        bindActionCreators(
            {
                loadReviewsByRestaurantId
            }, dispatch
        )
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantContainer);
