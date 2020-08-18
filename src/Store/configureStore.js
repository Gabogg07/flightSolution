import {configureStore} from '@reduxjs/toolkit';
import reducer from './Reducers/flightSearch';

const store = configureStore({
  reducer: reducer,
});

export default store;
