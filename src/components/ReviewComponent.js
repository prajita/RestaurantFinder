import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import '../style.css';

export default class ReviewComponent extends Component {
    render() {
        let data = this.props.reviewData;
        let showReviewsData = [];
        data.map((each,i) => {
            showReviewsData.push(
                <React.Fragment key={i}>
                    <div className="row " style={{ border: "5px solid bisque" }}>
                        <div className="col-4"  >
                            <img src={each.review.user.profile_image} className="w-100" />
                        </div><br />
                        <div className="col-8 px-3">
                            <div className="card-block px-3">
                                <p className="card-title" style={{ color: "rgb(43, 29, 14)", fontSize: '20pt', fontWeight: 'Bold' }}>
                                    {each.review.user.name}</p>
                                <p className="card-text" style={{ color: "rgb(43, 29, 14)" }}><span>{each.review.user.foodie_level}</span>
                                    <span>{` rated it  ${each.review.review_time_friendly}`}</span></p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={each.review.rating}
                                />
                                <p className="card-text" style={{ color: "rgb(43, 29, 14)" }}><span>{`rating text - ${each.review.rating_text}`}</span></p>
                                <p className="card-text" style={{ color: "rgb(43, 29, 14)" }}>{'review : ' + each.review.review_text}</p>

                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        })
        return (
            <React.Fragment>{showReviewsData}</React.Fragment>
        )
    }
}
