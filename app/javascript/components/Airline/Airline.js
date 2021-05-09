import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./AirlineHeader";
import styled from "styled-components";
import ReviewForm from "./ReviewForm";
import Review from './Review';

const INITIAL_DATA = {
  data: {},
  included: [],
};

const INITIAL_REVIEW_STATE = {
  title: '',
  description: '',
  score: '0',
}
const StyledWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const StyledColumn = styled.div`
  background-color: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background-color: #000;
    color: #fff;
  }
`;

const StyledMainContent = styled.main`
  padding: 0px 20px;
`;
const Airline = (props) => {
  const [selectedAirline, setSelectedAirline] = useState(INITIAL_DATA);
  const [loaded, setLoaded] = useState(false);
  const [review, setReview] = useState(INITIAL_REVIEW_STATE)
  const {
    match: {
      params: { slug },
    },
  } = props;
  useEffect(() => {
    axios
      .get(`/api/v1/airlines/${slug}`)
      .then((resp) => {
        setSelectedAirline(resp.data);
        setLoaded(true);
      })
      .catch((resp) => console.log("err", resp));
  }, []);

  const handleChange = (e) => {
    setReview(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  };

  const reviews = selectedAirline.included.filter(item => item.type === 'review').map(review => {
    return (
      <Review key={review.id} attributes={review.attributes}/>
    )
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
    const airline_id = selectedAirline.data.id;
    axios.post('/api/v1/reviews', {review, airline_id}).then(resp => {
      const included =  [...selectedAirline.included, resp.data.data]
      setSelectedAirline(prevState => {
        return {
          ...prevState,
          included
        }
      })
      setReview(INITIAL_REVIEW_STATE)
    }).catch(resp => {})
  };

  console.log(review)
  return (
    <StyledWrapper>
      {loaded && (
        <>
          <StyledColumn>
            <StyledMainContent>
              <Header
                attributes={selectedAirline.data.attributes}
                reviewsCount={selectedAirline.included.length}
              />
              <div>
              {reviews}
              </div>
            </StyledMainContent>
          </StyledColumn>
          <StyledColumn>
            <div role="region" aria-label="Add Review">
              <ReviewForm
                review={review}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                airlineName={selectedAirline.data.attributes.name}
              />
            </div>
          </StyledColumn>
        </>
      )}
    </StyledWrapper>
  );
};

export default Airline;
