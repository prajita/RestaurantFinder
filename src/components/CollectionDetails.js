import React, { Component } from 'react';
import RowComponent from './RowComponent';

export default class CollectionDetails extends Component {


    render() {
        let showData = [];
        if (this.props.collections) {
            this.props.collections.map((each, i) => {
                //just to handle my local data 
                if (each.collection.collection_id !== 274852) {
                    showData.push(
                        <div  key={i} className="col-4 cardPadding">
                            <RowComponent data={each.collection} checkoutlet={this.props.checkoutlet} ></RowComponent>
                        </div>)
                }
            })
        }

        return (
            <div className="container">
                <div className="card-group">
                    <div className="row">
                        {showData}
                    </div>
                </div>
            </div>

        )
    }
}
