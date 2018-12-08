import initialState from './initialState';

import {
    FETCH_COLLECTIONS, REQUEST_COLLECTIONS,
    REQUEST_COLLECTION_DETAILS, FETCH_COLLECTION_DETAILS,
    SET_CITY_DETAILS, SET_CITY_DETAILS_BY_LOCATION,
    REQUEST_REVIEWS, FETCH_REVIEWS
} from '../actions/actionTypes';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case REQUEST_COLLECTIONS:
            return {
                ...state,
                loading: action.loading,
                currentCityName: action.cityName,
                showReviews: action.showReviews
            };
        case FETCH_COLLECTIONS:
            return {
                ...state,
                payload: action.payload,
                collections: action.payload.collections,
                loading: action.loading,
                showReviews: action.showReviews
            };
        case SET_CITY_DETAILS:
            return {
                ...state,
                currentCityId: action.cityId,
                showReviews: action.showReviews
            };
        case SET_CITY_DETAILS_BY_LOCATION:
            return {
                ...state,
                currentCityId: action.cityId,
                currentCityName: action.cityName,
                showReviews: action.showReviews
            };

        case REQUEST_COLLECTION_DETAILS:
            return {
                ...state,
                loading: action.loading,
                showReviews: action.showReviews               
            };

        case FETCH_COLLECTION_DETAILS:
            return {
                ...state,
                loading: action.loading,
                restaurants: action.payload,
                showReviews: action.showReviews
            };
        case REQUEST_REVIEWS:
            return {
                ...state,
                loading: action.loading,
                isFetching: action.isFetching,
                reviewStart: action.reviewStart,
                reviewCount: action.reviewCount,
                hasMore: action.hasMore
            };
        case FETCH_REVIEWS:
            return {
                ...state,
                reviews: action.payload,
                showReviews: action.showReviews,
                isFetching: action.isFetching,
                hasMore: action.hasMore
            };

        default:
            return state;
    }
};


export default rootReducer;

// import  fetchCollectionsReducer from './fetchCollectionsReducer'
// import  fetchCityDetailsReducer from './fetchCityDetailsReducer'

// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//     fetchCollectionsReducer,
//     fetchCityDetailsReducer
// })