import React, { Component } from 'react'

class PostElement extends Component {
    
    render() {
        
        const thisReview = this.props.review;


        console.log(thisReview);
        return (
            <div>
                {thisReview.reviewFirstName}
                {thisReview.reviewLastName}
                {thisReview.title ? thisReview.title : null}
            </div>
        );
    }
}

export default PostElement;
