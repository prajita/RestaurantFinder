import React from 'react';
import {
    fetchAllCollectionApi,
    fetchCityDetailsApi,
    fetchCityDetailsByLocationApi,
    fetchEachCollectionDetailsApi
} from '../utils/fetchDetails';
import {
    REQUEST_COLLECTIONS,
    REQUEST_COLLECTION_DETAILS,
    REQUEST_COLLECTIONS_BY_LOCATION,
    FETCH_COLLECTIONS,
    FETCH_COLLECTION_DETAILS,
    SET_CITY_DETAILS,
    SET_CITY_DETAILS_BY_LOCATION
} from './actionTypes';


export const requestCollections = (cityName) => {
    return {
        type: REQUEST_COLLECTIONS,
        loading: true,
        cityName: cityName
    }
}

export const requestCollectionsByLocation = () => {
    return {
        type: REQUEST_COLLECTIONS_BY_LOCATION,
        loading: true
    }
}
export const getCollectionsByCitySuccess = (collections, cityId, cityName) => {
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
export const getEachCollectionDetails = (restaurants) => {
    return {
        type: FETCH_COLLECTION_DETAILS,
        payload: restaurants,
        loading: false
    }
}
export const setCityDetails = (cityId) => {
    return {
        type: SET_CITY_DETAILS,
        cityId: cityId
    }
}
export const setCityDetailsByLocation = (cityId, cityName) => {
    return {
        type: SET_CITY_DETAILS_BY_LOCATION,
        cityId: cityId,
        cityName: cityName
    }
}


export const loadCollections = (cityName) => {
    return function (dispatch) {
        dispatch(requestCollections(cityName));
        fetchCityDetailsApi(cityName, (cityDetails) => {
            dispatch(setCityDetails(cityDetails.id));
            fetchAllCollectionApi(cityDetails.id, (data) => {
                dispatch(getCollectionsByCitySuccess(data));
            });


        });
    }
}

export const loadCollectionsByLocation = (lat, long) => {

    return function (dispatch) {
        dispatch(requestCollectionsByLocation());
        fetchCityDetailsByLocationApi(lat, long, (cityDetails) => {
            dispatch(setCityDetailsByLocation(cityDetails.location.city_id, cityDetails.location.city_name));
            fetchAllCollectionApi(cityDetails.location.city_id, (data) => {
                dispatch(getCollectionsByCitySuccess(data));
            });


        });
    }
}

export const loadDataByCollectionId = (collectionId, cityId) => {

    return function (dispatch) {
        dispatch(requestEachCollectionDetails());
        fetchEachCollectionDetailsApi(collectionId, cityId, (result) => {
            dispatch(getEachCollectionDetails(result.restaurants));
        });
    }
}


