import React, { Component } from 'react';

export default class RowComponent extends Component {
    render() {
        return (
            <div className="card" style={{ width: "20rem" }}>
                <img className="card-img-top imageBorder" src={this.props.data.image_url} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.data.title}</h5>
                    <p className="card-text">{this.props.data.description}</p>
                    <a href="#" onClick={this.props.checkoutlet} className="btn btn-primary">check this</a>
                </div>
            </div>

        )
    }
}
