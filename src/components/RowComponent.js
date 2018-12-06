import React, { Component } from 'react';

export default class RowComponent extends Component {
    
    render() {
        return (
            <div className="card" style={{ width: "20rem" }}>
                <img className="card-img-top imageBorder" src={this.props.data.image_url} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.data.title}</h5>
                    <p className="card-text">{this.props.data.description}</p>
                    <a href="javascript:void(0)" onClick={() => this.props.checkCollection(this.props.data.collection_id)} className="btn btn-success">check this</a>
                </div>
            </div>

        )
    }
}
