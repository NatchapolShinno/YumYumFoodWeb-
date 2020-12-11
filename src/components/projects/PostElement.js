import React, { Component } from 'react'
import {Card, ListGroup} from 'react-bootstrap'
import { Icon, Avatar } from "@material-ui/core";

import './PostElement.css';

class PostElement extends Component {
    
    render() {
        
        const thisReview = this.props.review;


        console.log(thisReview);
        return (
            <div className="oneReview">
                <table>
                    <tr>
                        <td className="reviewDetail">
                            <Avatar className="avatar">{thisReview.reviewFirstName[0]}{thisReview.reviewLastName[0]}</Avatar>
                        </td>

                        <td className="reviewDetail">
                            <h5 className="header">{thisReview.reviewFirstName} {thisReview.reviewLastName}</h5>
                        </td>

                        <td className="reviewContent">
                            {/*thisReview.createdAt.toDate().toString()*/}
                            <br></br>
                            {thisReview.title ? thisReview.title : null}
                        </td>
                    </tr>
                </table>
                <hr></hr>
            </div>
        );
    }
}

export default PostElement;
