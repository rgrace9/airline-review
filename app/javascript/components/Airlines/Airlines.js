import React, {useState, useEffect} from 'react';
import axios from 'axios';
import AirlineCard from './AirlineCard';
import styled from 'styled-components';

const StyledHome = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: 30px auto;
`
const StyledHeader = styled.div`
  padding: 100px;
  padding-bottom: 10px;
  h1 {
    font-size: 42px;
  }
`
const StyledSubheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`
const StyledList = styled.ul`
  display: grid;
  list-style-type: none;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  /* width: 100%; */
  padding: 20px;
`

const Airlines = () => {
  const [airlinesList, setAirlinesList] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/airlines.json').then(resp => {
      setAirlinesList(resp.data.data)
    })
       .catch(resp => console.log('err', resp))
  }, [airlinesList.length])
  
  return (
    <StyledHome>
    <StyledHeader>
      <h1>Airline Review</h1>
      <StyledSubheader>
        <p>Honest airline reviews</p>
      </StyledSubheader>
    </StyledHeader>

    <StyledList role='list'>
      {airlinesList.map(item => {
        return (<li key={item.id}><AirlineCard data={item} /></li>)
      })}

    </StyledList>


    </StyledHome>
  );
};

export default Airlines;