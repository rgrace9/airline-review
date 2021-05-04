import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from './AirlineHeader';

const INITIAL_DATA = {
  data: {},
  included: []
}
const Airline = (props) => {

  const [selectedAirline, setSelectedAirline] = useState(INITIAL_DATA);
  const [loaded, setLoaded] = useState(false);
  const {match: {params: {slug}}} = props;
  useEffect(() => {
    console.log(slug)
    axios.get(`/api/v1/airlines/${slug}`).then(resp => {
      setSelectedAirline(resp.data)
      setLoaded(true)
    })
       .catch(resp => console.log('err', resp))
  }, [])

  console.log(loaded)

  return (
    <div className='wrapper'>
      <div className='column'>
        {loaded && (
          <Header
            attributes={selectedAirline.data.attributes}
            reviewsCount={selectedAirline.included.length}
          />
        )}
      </div>
      <div className='column'>
        <div>Review Form Goes Here</div>
      </div>

    </div>
  );
};

export default Airline;