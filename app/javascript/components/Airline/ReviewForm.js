import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledFieldSet = styled.div`
  display: flex;
  flex-direction: column;
`;
const ReviewForm = (props) => {
  const { airlineName, handleSubmit, handleChange, review } = props;


  return (
    <div>
      <p>Have an experience with {airlineName}? Share your review!</p>
      <form onSubmit={handleSubmit}>
        <StyledFieldSet>
          <legend>Review:</legend>
          <div className="field">
            <label htmlFor="title">Title:</label>
            <input
              required
              value={review.title}
              onChange={handleChange}
              type="text"
              id="title"
              name="title"
            />
          </div>
          <div className="field">
            <label htmlFor="description">Description:</label>
            <input
              required
              value={review.description}
              type="text"
              id="description"
              name="description"
              onChange={handleChange}
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
