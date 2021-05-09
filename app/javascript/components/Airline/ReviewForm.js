import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledFieldSet = styled.div`
  display: flex;
  flex-direction: column;
`;
const ReviewForm = (props) => {
  const { reviewTitle, setReviewTitle } = useState("");
  const { reviewDescription, setReviewDescription } = useState("");
  const { airlineName } = props;

  const onTitleChange = (e) => {
    console.log(e);
  };
  const onDescriptionChange = (e) => {
    console.log(e);
  };

  const resetForm = () => {
    setReviewTitle("");
    setReviewDescription("");
  };
  return (
    <div>
      <p>Have an experience with {airlineName}? Share your review!</p>
      <form>
        <StyledFieldSet>
          <legend>Review:</legend>
          <div className="field">
            <label htmlFor="reviewTitle">Title:</label>
            <input
              required
              value={reviewTitle}
              onChange={onTitleChange}
              type="text"
              id="reviewTitle"
              name="reviewTitle"
            />
          </div>
          <div className="field">
            <label htmlFor="description">Description:</label>
            <input
              required
              value={reviewDescription}
              type="text"
              id="description"
              name="description"
              onChange={onDescriptionChange}
            />
          </div>
          <div className="field">
            <div className="rating-container">
              <label>Rate This Airline:</label>
            </div>
          </div>
          <button type="submit">Submit Your Review</button>
        </StyledFieldSet>
      </form>
    </div>
  );
};

ReviewForm.propTypes = {};

export default ReviewForm;
