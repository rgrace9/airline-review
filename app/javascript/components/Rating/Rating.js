import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './Rating.css';

const Rating = props => {
  const {score} = props;
  const formattedScore = score/5 * 100;
  
  return (
    <span className='star-wrapper'>
      
      <span style={{width: `${formattedScore}%`}} className='stars' />
    </span>
  );
};

Rating.propTypes = {
  
};

export default Rating;