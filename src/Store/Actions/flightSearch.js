import {
  TOGGLE_CURRENCIES_LOADING_STATUS,
  CURRENCIES_LOAD_SUCCESS,
  CURRENCIES_LOAD_ERROR,
  TOGGLE_COUNTRIES_LOADING_STATUS,
  COUNTRIES_LOAD_SUCCESS,
  COUNTRIES_LOAD_ERROR,
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

export const toggleCountriesLoading = () => {
  return {
    type: TOGGLE_COUNTRIES_LOADING_STATUS,
  };
};

export const countriesLoadSuccess = (countries) => {
  return {
    type: COUNTRIES_LOAD_SUCCESS,
    countries,
  };
};

export const countriesLoadError = (error) => {
  return {
    type: COUNTRIES_LOAD_ERROR,
    error,
  };
};
