import React from 'react';
import { fetchAllCollectionApi, fetchCityDetailsApi, fetchCityDetailsByLocationApi } from '../utils/fetchDetails';
import { REQUEST_COLLECTIONS, REQUEST_COLLECTIONS_BY_LOCATION, FETCH_COLLECTIONS, FETCH_COLLECTION_DETAILS } from './actionTypes';


export const requestCollections = () => {
    return {
        type: REQUEST_COLLECTIONS,
        loading: true
    }
}

export const requestCollectionsByLocation = () => {
    return {
        type: REQUEST_COLLECTIONS_BY_LOCATION,
        loading: true
    }
}
export const getCollectionsByCitySuccess = (collections) => {
    return {
        type: FETCH_COLLECTIONS,
        payload: collections,
        loading: false
    }
}

export const requestEachCollectionDetails = () => {
    return {
        type: REQUEST_COLLECTION_DETAILS,
        loading: true
    }
}
export const getEachCollectionDetails = (collectionDetails) => {
    return {
        type: FETCH_COLLECTION_DETAILS,
        payload: collectionDetails,
        loading:false
    }
}


export const loadCollections = (cityName) => {
    return function (dispatch) {
        dispatch(requestCollections());
        fetchCityDetailsApi(cityName, (cityDetails) => {
            fetchAllCollectionApi(cityDetails.id, (data) => {
                dispatch(getCollectionsByCitySuccess(data));
            });


        });
    }
}

export const loadCollectionsByLocation = (lat, long) => {

    return function (dispatch) {
        dispatch(requestCollectionsByLocation());
        fetchCityDetailsByLocationApi(lat,long, (cityDetails) => {
            fetchAllCollectionApi(cityDetails.location.city_id, (data) => {
                dispatch(getCollectionsByCitySuccess(data));
            });


        });
    }
}

export const fetchOutlet = () => {

    return function (dispatch) {
        dispatch(requestCollectionsByLocation());
        fetchCityDetailsByLocationApi(lat,long, (cityDetails) => {
            fetchAllCollectionApi(cityDetails.location.city_id, (data) => {
                dispatch(getCollectionsByCitySuccess(data));
            });


        });
    }
}
