
import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/Store/configureStore';

function App() {
  return (
    <Provider store={store}>
      <View>
        <Text>Hola</Text>
      </View>
    </Provider>
  );
}

export default App;
