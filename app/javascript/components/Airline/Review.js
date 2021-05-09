import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import Rating from '../Rating/Rating';
const StyledWrapper = styled.div`
  padding: 20px;
  border: 1px solid rgba(0,0,0,0.1);
  margin: 0 0 20px 0;
  
`

const StyledRatingContainer = styled.div`
  display: flex;
  flex-direction: row;
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
      <StyledRatingContainer>
        <Rating score={score} /> 
      </StyledRatingContainer>
      <StyledTitle><p>{title}</p></StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledWrapper>
  );
};

Review.propTypes = {
  
};

export default Review;