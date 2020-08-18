import {
  TOGGLE_CURRENCIES_LOADING_STATUS,
  CURRENCIES_LOAD_SUCCESS,
  CURRENCIES_LOAD_ERROR,
  TOGGLE_PLACES_LOADING_STATUS,
  PLACES_LOAD_SUCCESS,
  PLACES_LOAD_ERROR,
  TOGGLE_RESULTS_LOADING_STATUS,
  RESULTS_LOAD_SUCCESS,
  RESULTS_LOAD_ERROR,
} from './actionTypes';

export const toggleCurrenciesLoading = () => {
  return {
    type: TOGGLE_CURRENCIES_LOADING_STATUS,
  };
};

export const currenciesLoadSuccess = (currencies) => {
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

export const togglePlacesLoading = (key) => {
  return {
    type: TOGGLE_PLACES_LOADING_STATUS,
    key,
  };
};

export const placesLoadSuccess = (places, key) => {
  return {
    type: PLACES_LOAD_SUCCESS,
    places,
    key,
  };
};

export const placesLoadError = (error, key) => {
  return {
    type: PLACES_LOAD_ERROR,
    error,
    key,
  };
};

export const toggleResultsLoading = () => {
  return {
    type: TOGGLE_RESULTS_LOADING_STATUS,
  };
};

export const resultsLoadSuccess = (results) => {
  return {
    type: RESULTS_LOAD_SUCCESS,
    results,
  };
};

export const resultsLoadError = (error) => {
  return {
    type: RESULTS_LOAD_ERROR,
    error,
  };
};
