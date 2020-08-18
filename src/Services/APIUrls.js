const API_URL =
  'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices';

export const GET_CURRENCIES = `${API_URL}/reference/v1.0/currencies/`;
export const GET_PLACES = (currency, query) => `${API_URL}/autosuggest/v1.0/UK/${currency}/en-GB/?query=${query}`;


