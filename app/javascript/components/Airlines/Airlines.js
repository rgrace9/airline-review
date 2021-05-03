import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Airlines = () => {
  const [airlinesList, setAirlinesList] = useState([]);

  const getAirlines = async() => {
    try {
      const res = await axios.get('/api/v1/airlines.json')

    } catch(err) {

      console.error(err)
    }
  }
  useEffect(() => {
    axios.get('/api/v1/airlines.json').then(resp => {
      setAirlinesList(resp.data.data)
    })
       .catch(resp => console.log('err', resp))
  }, [airlinesList.length])
  console.log({airlinesList})
  return (
    <div className='home'>
    <header className='header'>
      <h1>Airline Review</h1>
      <div className='subheader'>
        <p>Honest airline reviews</p>
      </div>
    </header>
    <div className='grid'>
      {airlinesList.map(item => {
        return (<li key={item.id}>{item.attributes.name}</li>)
      })}

    </div>
    </div>
  );
};

export default Airlines;