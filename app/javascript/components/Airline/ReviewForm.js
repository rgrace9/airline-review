import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  padding: 40px 0 10px 0;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  color: black;
  align-items: center;
`;

const StyledLegend = styled.legend`
  padding-top: 20px;
`
const StyledRatingContainer = styled.div`
  #star_rating svg {
	width: 1em;
	height: 1em;
	fill: currentColor;
	stroke: currentColor;
}
#star_rating label, #star_rating output {
	display: block;
	float: left;
	font-size: 2em;
	height: 1.2em;
	color: #036;
	cursor: pointer;
	/* Transparent border-bottom avoids jumping
	   when a colored border is applied
		 on :hover/:focus */
	border-bottom: 2px solid transparent;
}
#star_rating output {
	font-size: 1.5em;
	padding: 0 1em;
}
#star_rating input:checked ~ label {
	color: #999;
}
#star_rating input:checked + label {
	color: #036;
	border-bottom-color: #036;
}
#star_rating input:focus + label {
	border-bottom-style: dotted;
}
#star_rating:hover input + label {
	color: #036;
}
#star_rating input:hover ~ label,
#star_rating input:focus ~ label,
#star_rating input[id="rating-0"] + label {
	color: #999;
}
#star_rating input:hover + label,
#star_rating input:focus + label {
	color: #036;
}
#star_rating input[id="rating-0"]:checked + label {
	color: #ff2d21;
}
#star_rating [type="submit"] {
	float: none;
}

.visuallyhidden {
  border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}
`

const StyledTitle = styled.h2`
font-size: 20px;
padding-bottom: 20px;
font-weight: bold;
`

const StyledRatingBox = styled.div`

`

const StyledButton = styled.button`
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  padding: 12px;
  font-size: 18px;
  text-align: center;
  transition: ease-in-out 0.1s;
  width: 100%;
  &:hover {
    background-color: #fff;
    color: #333;
  }
`
const StyledFormField = styled.div`
  border-radius: 4px;
  display: flex;
    flex-direction: column;
  input {
    min-height: 50px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px 0;
    padding: 12px;
  }

  textarea {
    min-height: 80px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px 0;
    padding: 12px;
  }
`

const StyledWrapper = styled.div`
  padding: 20px;
  height: 100vh;
`
const ReviewForm = (props) => {
  const { airlineName, handleSubmit, handleChange, review } = props;

  const ratingOptions = [0, 1, 2, 3, 4, 5].map((score, index) => {
    return (
      <Fragment key={`score-input-${score}`}>
      <input className='visuallyhidden' checked={score.toString() === review.score} id={`rating-${score}`} onChange={handleChange} type='radio' value={score} name='score'/>
      <label htmlFor={`rating-${score}`}>
        <span className='visuallyhidden'>{score} Star{score !== 1 && 's' }</span>
      {score === 0 ? (
		<svg viewBox="0 0 512 512">
    <g strokeWidth="70" strokeLinecap="square">
      <path d="M91.5,442.5 L409.366489,124.633512"></path>
      <path d="M90.9861965,124.986197 L409.184248,443.184248"></path>
    </g>
  </svg>
      ) : (
        <svg viewBox="0 0 512 512"><path d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z"></path></svg>

      )}
      </label>

      </Fragment>
    )

  })

  return (
    <StyledWrapper>
      <StyledTitle>Have an experience with {airlineName}? Share your review!</StyledTitle>
      <form onSubmit={handleSubmit}>
   
          <StyledFormField>
            <label htmlFor="title">Title:</label>
            <input
              required
              value={review.title}
              onChange={handleChange}
              type="text"
              id="title"
              name="title"
            />
          </StyledFormField>
          <StyledFormField>
            <label htmlFor="description">Description:</label>
            <textarea
              required
              value={review.description}
              type="text"
              id="description"
              name="description"
              onChange={handleChange}
            />
          </StyledFormField>
          <StyledFieldSet>
          <StyledLegend>Rate This Airline:</StyledLegend>
          <StyledFormField>
            <StyledRatingContainer>
              <div id='star_rating'>


              {ratingOptions}

              </div>
            </StyledRatingContainer>
          </StyledFormField>
          </StyledFieldSet>
          <StyledButton type="submit">Submit Your Review</StyledButton>
      </form>
    </StyledWrapper>
  );
};

ReviewForm.propTypes = {};

export default ReviewForm;
