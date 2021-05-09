import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledWrapper = styled.div`
  padding: 20px;
  border: 1px solid rgba(0,0,0,0.1);
  margin: 0 0 20px 0;
  
`

const StyledRatingContainer = styled.div`

`
const StyledTitle = styled.div`
  padding: 20px 0 0 0;
  font-size: 18px;
`
const StyledDescription = styled.div`
  padding: 0 0 20px 0;
  font-size: 14px;
`
const Review = props => {
  const {
    title,
    description,
    score
  } = props.attributes;
  return (
    <StyledWrapper>
      <div className='rating-container'>
        <p>Rating: {score}</p> 
      </div>
      <StyledTitle><p>{title}</p></StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledWrapper>
  );
};

Review.propTypes = {
  
};

export default Review;