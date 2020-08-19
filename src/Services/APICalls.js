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
        dispatch(placesLoadSuccess(res.Places, key));
        return res.data;
      })
      .catch((err) => {
        dispatch(placesLoadError(err, key));
      });
  };
}

export function fetchResults(currency, origin, destination, outDate, inDate) {
  console.log(APIUrls.GET_RESULTS(currency, origin, destination, outDate, inDate))
  return (dispatch) => {

    dispatch(toggleResultsLoading());
    fetch(APIUrls.GET_RESULTS(currency, origin, destination, outDate, inDate), {
      method: 'GET',
      headers: {
        'x-rapidapi-host': API_HOST,
        'x-rapidapi-key': API_KEY,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          console.log(res)
          throw res.error;
        }
        if(res.ValidationErrors){
          console.log(res.ValidationErrors)
          throw res.ValidationErrors[0].Message
        }
        dispatch(resultsLoadSuccess(res));
        return res.data;
      })
      .catch((err) => {
        dispatch(resultsLoadError(err));
      });
  };
}

