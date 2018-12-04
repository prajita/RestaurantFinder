import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function fetchCollectionsReducer(state=initialState.collections,action) {
    switch (action.type) {
        case types.FETCH_COLLECTIONS:
            return [...state, ...action.payload];
        default:
            return state;
    }

    console.log("hello::: inside fetchCollection Reducer");
    return state;
}
