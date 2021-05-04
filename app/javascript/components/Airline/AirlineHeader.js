import React from 'react';
import PropTypes from 'prop-types';

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
    <header>
      <h1>
        <img src={image_url} alt='' />
        {name}
      </h1>
      <div className='totalReviews'>{reviewsCount || 'No'} Review{reviewsCount !== 1 && 's'}</div>
      <div className='starRating'></div>
      <div className='totalOutOf'>{avg_score} of out 5 Stars</div>
    </header>
  );
};

AirlineHeader.propTypes = {
  
};

export default AirlineHeader;