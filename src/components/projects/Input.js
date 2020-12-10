import React, { useState } from "react";
import PropTypes from "prop-types";
import { createReview } from "../../store/actions/projectActions";
import { connect } from "react-redux";

function Input({ addPost }) {
  const [input, setInput] = useState("");
  function onChange(event) {
    setInput(event.target.value);
  }
  function onKeyDown(event) {
    const title = event.target.value;
    if (event.key === "Enter" && title) {
      addPost(title);
      console.log(title);
      createReview(title);
      setInput("");
    }
  }

  return (
    <div className="Input">
      <div className="Input__header">Create Post</div>
      <input
        className="Input__field"
        type="text"
        value={input}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

Input.propTypes = {
  addPost: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    createReview: (title) => dispatch(createReview(title)),
  };
};
export default connect(null, mapDispatchToProps)(Input);
