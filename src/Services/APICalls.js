import {
  toggleCurrenciesLoading,
  currenciesLoadSuccess,
  currenciesLoadError,
  togglePlacesLoading,
  placesLoadSuccess,
  placesLoadError,
  toggleResultsLoading,
  resultsLoadSuccess,
  resultsLoadError,
} from '../Store/Actions/flightSearch';
import * as APIUrls from './APIUrls';

const API_KEY = '014a286311msha624aa971032cf7p199d47jsn20ae7ceaa1b2';
const API_HOST = 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com';

export function fetchCurrencies() {
  return (dispatch) => {
    dispatch(toggleCurrenciesLoading());
    fetch(APIUrls.GET_CURRENCIES, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': API_HOST,
        'x-rapidapi-key': API_KEY,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(currenciesLoadSuccess(res.Currencies));
        return res.data;
      })
      .catch((err) => {
        dispatch(currenciesLoadError(err));
      });
  };
}

export function fetchPlaces(query, currency, key) {
  return (dispatch) => {
    dispatch(togglePlacesLoading(key));
    console.log(APIUrls.GET_PLACES('GBP', query))
    fetch(APIUrls.GET_PLACES(currency, query), {
      method: 'GET',
      headers: {
        'x-rapidapi-host': API_HOST,
        'x-rapidapi-key': API_KEY,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        console.log(res)
        dispatch(placesLoadSuccess(res.Places, key));
        return res.data;
      })
      .catch((err) => {
        dispatch(placesLoadError(err, key));
      });
  };
}

export function fetchResults(currency, origin, destination, outDate, inDate) {
  return (dispatch) => {
    dispatch(toggleResultsLoading());
    fetch(APIUrls.GET_PLACES, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': API_HOST,
        'x-rapidapi-key': API_KEY,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(resultsLoadSuccess(res.Places));
        return res.data;
      })
      .catch((err) => {
        dispatch(resultsLoadError(err));
      });
  };
}

