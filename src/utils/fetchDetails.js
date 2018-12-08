import React from 'react';
export const fetchCityDetailsApi = (cityName, callback) => {

    let xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function () {

        if (xhr.readyState !== 4) return;
        if (xhr.readyState === 4 && this.status === 200) {
            let resp = JSON.parse(this.responseText);
            callback((resp.location_suggestions && resp.location_suggestions.length) ?
                resp.location_suggestions[0] : [])
        } else {
            console.log('error', xhr);
            alert('Error in Api...Please Try again');
        }
    }
    let url = `https://developers.zomato.com/api/v2.1/cities?q=${cityName}`;
    xhr.open('GET', url, true);
    xhr.setRequestHeader("user-key", "47eaacfb989f806c7525d42eb60a47be");
    xhr.send();


}


export const fetchAllCollectionApi = (cityId, callback) => {
    let xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function () {
        // Only run if the request is complete
        if (xhr.readyState !== 4) return;
        if (xhr.readyState === 4 && this.status === 200) {
            let resp = JSON.parse(this.responseText);
            callback(resp);
        } else {
            console.log('error', xhr);
            alert('Error in Api...Please Try again');
        }
    }
    let url = `https://developers.zomato.com/api/v2.1/collections?city_id=${cityId}`;
    xhr.open('GET', url, true);
    xhr.setRequestHeader("user-key", "47eaacfb989f806c7525d42eb60a47be");
    xhr.send();


}

export const fetchCityDetailsByLocationApi = (lat, long, callback) => {
    let xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function () {
        // Only run if the request is complete
        if (xhr.readyState !== 4) return;
        if (xhr.readyState === 4 && this.status === 200) {
            let resp = JSON.parse(this.responseText);
            callback(resp);
        } else {
            console.log('error', xhr);
            alert('Error in Api...Please Try again');
        }
    }
    let url = `https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${long}`;
    xhr.open('GET', url, true);
    xhr.setRequestHeader("user-key", "47eaacfb989f806c7525d42eb60a47be");
    xhr.send();

}

export const fetchEachCollectionDetailsApi = (collectionId, cityId, callback) => {
    let xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function () {
        // Only run if the request is complete
        if (xhr.readyState !== 4) return;
        if (xhr.readyState === 4 && this.status === 200) {
            let resp = JSON.parse(this.responseText);
            callback(resp);
        } else {
            console.log('error', xhr);
            alert('Error in Api...Please Try again');
        }
    }
    let url = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&collection_id=${collectionId}&sort=cost&order=desc`;
    xhr.open('GET', url, true);
    xhr.setRequestHeader("user-key", "47eaacfb989f806c7525d42eb60a47be");
    xhr.send();

}

export const fetchReviewsApi = (resId, reviewStart, reviewCount, callback) => {
    let xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function () {
        // Only run if the request is complete
        if (xhr.readyState !== 4) return;
        if (xhr.readyState === 4 && this.status === 200) {
            let resp = JSON.parse(this.responseText);
            callback(resp);
        } else {
            console.log('error', xhr);
            alert('Error in Api...Please Try again');
        }
    }
    let url = `https://developers.zomato.com/api/v2.1/reviews?res_id=${resId}&start=${reviewStart}&count=${reviewCount}`
    xhr.open('GET', url, true);
    xhr.setRequestHeader("user-key", "47eaacfb989f806c7525d42eb60a47be");
    xhr.send();
}


//fetch("https://developers.zomato.com/api/v2.1/cities?q=Kolkata",
  //   {       
  //     method: "POST", // *GET, POST, PUT, DELETE, etc.
  //     mode: "cors", // no-cors, cors, *same-origin
  //     cache: "no-cache",
  //     headers: {
  //       'user-key': "47eaacfb989f806c7525d42eb60a47be",
  //       'X-Zomato-API-Key': "47eaacfb989f806c7525d42eb60a47be"
  //     }
  //   }
  // )
  //   .then(
  //     res => JSON.stringify(res))
  //   .then(
  //     data => console.log(data))
