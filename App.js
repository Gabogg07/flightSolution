import React from 'react';
import {Provider} from 'react-redux';
import store from './src/Store/configureStore';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchFlightScreen from './src/Screens/SearchFlightScreen';
import SearchResultsScreen from './src/Screens/SearchResultsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'midnightblue',
            },
            headerTintColor: 'white',
          }}>
          <Stack.Screen
            name="SearchFlight"
            component={SearchFlightScreen}
            options={{
              title: 'Flight Solution',
            }}
          />
          <Stack.Screen
            name="SearchResults"
            component={SearchResultsScreen}
            options={{
              title: 'Search Results',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

//
