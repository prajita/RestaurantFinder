import initialState from './initialState';

import { FETCH_COLLECTIONS, REQUEST_COLLECTIONS, REQUEST_COLLECTION_DETAILS, FETCH_COLLECTION_DETAILS } from '../actions/actionTypes';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_COLLECTIONS:
            return { ...state, loading: action.loading };
            
        case REQUEST_COLLECTION_DETAILS:
            return { ...state, loading: action.loading };

        case FETCH_COLLECTIONS:
            return { ...state, payload: action.payload, collections: action.payload.collections, loading: action.loading };

        case FETCH_COLLECTION_DETAILS:
            return { ...state, loading: action.loading };


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