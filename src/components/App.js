import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RestaurantCard from './card';
import './App.css';

import Form from '../containers/form'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Form />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
