import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFieldSet = styled.div`
  display: flex;
  flex-direction: column;
`
const ReviewForm = props => {
  const {reviewTitle, setReviewTitle} = useState('')
  const {reviewDescription, setReviewDescription} = useState('')
  const {
    airlineName
  } = props;

  onTitleChange = (e) => {
    console.log(e)
  }
  onDescriptionChange = (e) => {
    console.log(e)
  }

  const resetForm = () => {
    setReviewTitle('');
    setReviewDescription('')
  }
  return (
    <div>
      <p>Have an experience with {airlineName}? Share your review!</p>
      <form>
 <StyledFieldSet>
  <legend>Review:</legend>
  <label htmlFor="reviewTitle">Title:</label>
  <input required value={reviewTitle} onChange={onTitleChange} type="text" id="reviewTitle" name="reviewTitle" />
  <label htmlFor="description">Description:</label>
  <input required value={reviewDescription} type="text" id="description" name="description" onChange={onDescriptionChange}  />

  <input type="submit" value="Submit" />
 </StyledFieldSet>
</form>
    </div>
  );
};

ReviewForm.propTypes = {
  
};

export default ReviewForm;