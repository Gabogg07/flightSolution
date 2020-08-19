const API_URL =
  'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices';

export const GET_CURRENCIES = `${API_URL}/reference/v1.0/currencies/`;
export const GET_PLACES = (currency, query) =>
  `${API_URL}/autosuggest/v1.0/US/${currency}/en-US/?query=${query}`;
export const GET_RESULTS = (currency, origin, destination, outDate, inDate) =>
  `${API_URL}/browsequotes/v1.0/US/${currency}/en-US/${origin}/${destination}/${outDate}?inboundpartialdate=${inDate}`;
