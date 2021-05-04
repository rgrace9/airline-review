import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeaderWrapper = styled.header`
  padding: 50px 100px 50px 0;
  img {
    height: 60px;
    width: 60px;
    border-radius: 100%;
    border: 1px solid rgba(0,0,0.1);
    object-fit: contain;
    margin-right: 10px;
  }
  h1 {
    font-size: 30px;
    font-size: 30px;
    display: flex;
    align-items: center;
    width: 100%;
  }
`

const StyledTotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`

const StyledTotalOutOf = styled.div`
  font-size: 18px;
  padding: 10px 0;
  font-weight: bold;
`
const AirlineHeader = props => {
  const {
    attributes: { 
      name,
      image_url,
      avg_score
    },
    reviewsCount
  } = props;
  return (
    <StyledHeaderWrapper>
      <h1>
        <img src={image_url} alt='' />
        {name}
      </h1>
      <StyledTotalReviews>{reviewsCount || 'No'} Review{reviewsCount !== 1 && 's'}</StyledTotalReviews>
      <div className='starRating'></div>
      <StyledTotalOutOf>{avg_score} of out 5 Stars</StyledTotalOutOf>
    </StyledHeaderWrapper>
  );
};

AirlineHeader.propTypes = {
  
};

export default AirlineHeader;