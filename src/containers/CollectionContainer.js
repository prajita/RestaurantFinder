import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class CollectionContainer extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="col-4"><img src={img} className="styleImg" /></div>
          <div className="col-8" >
            <h1>Welcome !! choose your favourite cuisine !</h1>
            <div className="flex-container ">{listofCities}
            </div>
          </div>
        </div>
        <p>cddd</p>
        <Link to="/"><button class="btn btn-success">Back to dashboard</button></Link>
      </div>
    )
  }
}
