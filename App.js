
import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/Store/configureStore';

import SearchFlight from './src/Screens/SearchFlight'

function App() {
  return (
    <Provider store={store}>
      <SearchFlight/>
    </Provider>
  );
}

export default App;
