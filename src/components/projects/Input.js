import React, { useState } from "react";
import PropTypes from "prop-types";
import { createReview } from "../../store/actions/projectActions";
import { connect } from "react-redux";

function Input({ addPost, auth }) {
  const [input, setInput] = useState("");
  function onChange(event) {
    setInput(event.target.value);
  }
  function onKeyDown(event) {
    const title = event.target.value;
    if (event.key === "Enter" && title) {
      addPost(title);
      setInput("");
    }
  }

  return (
    <div className="Input">
      <div className="Input__header"><b>Post a Review</b></div>
      <input
        className="Input__field"
        type="text"
        value={input}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={auth ? false : true}
        placeholder={auth ? "Write your review here." : "Please signin to leave a review."}
        style={{fontSize: "1em"}}
      />
    </div>
  );
}

Input.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default Input;
