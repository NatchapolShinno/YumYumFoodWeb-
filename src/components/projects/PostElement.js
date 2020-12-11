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
                        <td>
                            <div className="reviewDetail">
                                <div style={{float: "left"}}>
                                    <Avatar className="avatar">{thisReview.reviewFirstName[0]}{thisReview.reviewLastName[0]}</Avatar>
                                </div>
                                <div style={{float: "right"}}>
                                <h6 className="header reviewerName">{thisReview.reviewFirstName} {thisReview.reviewLastName}</h6>
                                </div>
                            </div>
                        </td>

                        <td>
                            <div className="reviewContent">
                                {/*thisReview.createdAt.toDate().toString()*/}
                                <br></br>
                                {thisReview.title ? thisReview.title : null}
                            </div>
                        </td>
                    </tr>
                </table>
                <hr></hr>
            </div>
        );
    }
}

export default PostElement;
