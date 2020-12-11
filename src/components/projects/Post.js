import React from "react";
import PropTypes from "prop-types";
import PostElement from './PostElement';

export default function Post({reviews}) {
  return(
    <div>
      {reviews && reviews.map(review => {
        return(
          <PostElement review={review} />
        )
      })}
    </div>
  );
}
