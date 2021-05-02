import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import Airline from '../components/Airline/Airline'
import Airlines from '../components/Airlines/Airlines'
const App = props => {
  return (
    <Switch>
      <Route exact path='/' component={Airlines} />
      <Route exact path='/airlines/:slug' component={Airline} />

    </Switch>
  );
};

App.propTypes = {
  
};

export default App;