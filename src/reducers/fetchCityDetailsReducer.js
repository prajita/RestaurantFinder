import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function fetchCityDetailsReducer(state=initialState.currCityDetails,action) {
    switch (action.type) {
        case types.FETCH_CITY_DETAILS:
            return [...state, ...action.payload];
        default:
            return state;
    }

    console.log("hello::: inside fetchCollection Reducer");
    return state;
}
