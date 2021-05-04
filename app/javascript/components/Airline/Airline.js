import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from './AirlineHeader';
import styled from 'styled-components';

const INITIAL_DATA = {
  data: {},
  included: []
}

const StyledWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const StyledColumn = styled.div`
  background-color: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background-color: #000;
  }
`

const StyledMainContent = styled.main`
  padding-left: 50px;
`
const Airline = (props) => {

  const [selectedAirline, setSelectedAirline] = useState(INITIAL_DATA);
  const [loaded, setLoaded] = useState(false);
  const {match: {params: {slug}}} = props;
  useEffect(() => {
    axios.get(`/api/v1/airlines/${slug}`).then(resp => {
      setSelectedAirline(resp.data)
      setLoaded(true)
    })
       .catch(resp => console.log('err', resp))
  }, [])

  return (
    <StyledWrapper>
      <StyledColumn>
        <StyledMainContent>
          {loaded && (
            <Header
              attributes={selectedAirline.data.attributes}
              reviewsCount={selectedAirline.included.length}
            />
          )}
        </StyledMainContent>
      </StyledColumn>
      <StyledColumn>
        <div role='region' aria-label='Add Review'>Review Form Goes Here</div>
      </StyledColumn>

    </StyledWrapper>
  );
};

export default Airline;