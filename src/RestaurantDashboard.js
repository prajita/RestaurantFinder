import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import img from '../images/coffee.jpg';
import { Container, Row, Col } from 'reactstrap';
import CollectionDetails from './components/CollectionDetails';
import { loadCollections ,loadCollectionsByLocation} from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SpinnerComponent from './components/SpinnerComponent';
import { Redirect } from 'react-router-dom';
import { browserHistory } from 'history';


class RestaurantDashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.fetchAllCollectionByCity = this.fetchAllCollectionByCity.bind(this);
        this.showPosition = this.showPosition.bind(this);
    }
    fetchAllCollectionByCity(cityName) {
        this.props.loadCollections(cityName);

    }
    showPosition(position) {
        console.log("Latitude of your position::" + position.coords.latitude +
            "Longitude of your position:: " + position.coords.longitude);

        this.props.loadCollectionsByLocation(position.coords.latitude,position.coords.longitude);
    }
    checkoutlet(){
        console.log("routing to the outlet");
        // <Redirect to='/collection'/>
        browserHistory.push('/collection');
    }
    componentWillMount() {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
            this.props.loadCollections('Bangalore', (resp) => {
                console.log("response::", resp)
            });
        }   

    }
    render() {
        let cities = [
            { id: 1, name: "Kolkata" },
            { id: 2, name: "Pune" },
            { id: 3, name: "Chennai" },
            { id: 4, name: "Delhi" },
            { id: 5, name: "Bangalore" },
            { id: 6, name: "Ahmedabad" }
        ];
        let listofCities = [];
        cities.map((e, index) => listofCities.push(
            <button key={index} className="buttonCity"
                onClick={() => {
                    this.fetchAllCollectionByCity(e.name);
                }}>
                {e.name}
            </button>
        ))

        return (
            <div className="bck">
                <div className="container">
                    <div className="row header-style" >
                        <div className="col-4"><img src={img} className="styleImg" /></div>
                        <div className="col-8" >
                            <h1>Welcome !! choose your favourite cuisine !</h1>
                            <div className="flex-container ">{listofCities}
                            </div>
                        </div>
                    </div>
                </div>
                <span style={{ color: "bisque", paddingTop: "10%", marginLeft: "40%" }}>*select your city here</span>
                <br /><br />
                <CollectionDetails collections={this.props.collections} checkoutlet={this.checkoutlet}/>
                {this.props.loading &&
                    <SpinnerComponent message="Loading collections..."/>
                }
            </div>
        )
    }
}

RestaurantDashboard.propTypes = {
    collections: PropTypes.array,
    loadCollections: PropTypes.func,
    loadCollectionsByLocation: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        collections: state.collections,
        currentCityId: state.currentCityId,
        currentCityName: state.currentCityName,
        currentCityDetails: state.currentCityDetails,
        loading: state.loading

    };
}
const mapDispatchToProps = (dispatch) => {
    return (
        bindActionCreators(
            { loadCollections ,loadCollectionsByLocation}, dispatch
        )
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDashboard);