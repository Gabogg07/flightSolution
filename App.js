import React from 'react';
import {Provider} from 'react-redux';
import store from './src/Store/configureStore';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchFlightScreen from './src/Screens/SearchFlightScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="screen">
          <Stack.Screen name="SearchFlight" component={SearchFlightScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
