import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFieldSet = styled.div`
  display: flex;
  flex-direction: column;
`
const ReviewForm = props => {
  const {
    airlineName
  } = props;
  return (
    <div>
      <p>Have an experience with {airlineName}? Share your review!</p>
      <form>
 <StyledFieldSet>
  <legend>Review:</legend>
  <label htmlFor="reviewTitle">Title:</label>
  <input type="text" id="reviewTitle" name="reviewTitle" />
  <label htmlFor="description">Description:</label>
  <input type="text" id="description" name="description" />

  <input type="submit" value="Submit" />
 </StyledFieldSet>
</form>
    </div>
  );
};

ReviewForm.propTypes = {
  
};

export default ReviewForm;