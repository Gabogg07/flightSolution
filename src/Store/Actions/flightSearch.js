import {
  TOGGLE_CURRENCIES_LOADING_STATUS,
  CURRENCIES_LOAD_SUCCESS,
  CURRENCIES_LOAD_ERROR,
  TOGGLE_PLACES_LOADING_STATUS,
  PLACES_LOAD_SUCCESS,
  PLACES_LOAD_ERROR,
} from './actionTypes';

export const toggleCurrenciesLoading = () => {
  return {
    type: TOGGLE_CURRENCIES_LOADING_STATUS,
  };
};

export const currenciesLoadSuccess = (currencies) => {
  console.log('RECIBI', currencies)
  return {
    type: CURRENCIES_LOAD_SUCCESS,
    currencies,
  };
};

export const currenciesLoadError = (error) => {
  return {
    type: CURRENCIES_LOAD_ERROR,
    error,
  };
};
