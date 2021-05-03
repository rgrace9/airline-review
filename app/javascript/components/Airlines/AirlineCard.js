import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const StyledCardContainer = styled.div`
  border: 1px solid #efefef;
  background-color: #fff;
`
const StyledAirlineLogo = styled.div`
  img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid #efefef;
    object-fit: contain;
  }
`
const StyledAirlineName = styled.div`
  padding: 20px 0 10px 0;
`
const StyledAirlineLink = styled.div`
  margin: 30px 0 20px 0;
  min-height: 50px;
  a {
    /* color: #fff;
    background-color: #000; */
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid transparent;
  }
`

const AirlineCard = (props) => {
  const {
    attributes: {
      image_url,
      name,
      avg_score,
      slug
    }
  } = props.data;
  return (
    <StyledCardContainer>
      <StyledAirlineLogo>
        <img src={image_url} alt='' />
      </StyledAirlineLogo>
      <StyledAirlineName>{name}</StyledAirlineName>
      <div className='airline-score'>{avg_score}</div>
      <StyledAirlineLink>
        <Link to={`/airlines/${slug}`}>View Airline</Link>
      </StyledAirlineLink>
    </StyledCardContainer>
  );
};

export default AirlineCard;