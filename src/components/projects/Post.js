import React from "react";
import PropTypes from "prop-types";

function Post({reviews}) {
  return (
    
    <div className="Post">
      <div className="Post__title">{reviews.title}</div>
    </div>
  );
  
}
Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  deletePost: PropTypes.func.isRequired,
};
export default Post;
