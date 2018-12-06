import initialState from './initialState';

import { FETCH_COLLECTIONS, REQUEST_COLLECTIONS, REQUEST_COLLECTION_DETAILS, FETCH_COLLECTION_DETAILS, SET_CITY_DETAILS, SET_CITY_DETAILS_BY_LOCATION } from '../actions/actionTypes';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case REQUEST_COLLECTIONS:
            return {
                ...state,
                loading: action.loading,
                currentCityName: action.cityName
            };
        case FETCH_COLLECTIONS:
            return {
                ...state,
                payload: action.payload,
                collections: action.payload.collections,
                loading: action.loading
            };
        case SET_CITY_DETAILS:
            return {
                ...state,
                currentCityId: action.cityId
            };
        case SET_CITY_DETAILS_BY_LOCATION:
            return {
                ...state,
                currentCityId: action.cityId,
                currentCityName: action.cityName
            };

        case REQUEST_COLLECTION_DETAILS:
            return {
                ...state,
                loading: action.loading
            };

        case FETCH_COLLECTION_DETAILS:
            return {
                ...state,
                loading: action.loading,
                restaurants: action.payload
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