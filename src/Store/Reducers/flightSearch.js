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
} from '../Actions/actionTypes';

const initialState = {
  currency: '',
  currencies: {
    loading: false,
    error: false,
    data: [],
  },
  originQuery: {
    loading: false,
    error: false,
    data: [],
  },
  destinationQuery: {
    loading: false,
    error: false,
    data: [],
  },
  results: {
    loading: false,
    error: false,
    data: [],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CURRENCIES_LOADING_STATUS:
      return {
        ...state,
        currencies: {
          ...state.currencies,
          loading: !state.currencies.loading,
        },
      };

    case CURRENCIES_LOAD_SUCCESS:
      return {
        ...state,
        currencies: {
          ...state.currencies,
          loading: false,
          error: false,
          data: action.currencies,
        },
      };

    case CURRENCIES_LOAD_ERROR:
      return {
        ...state,
        currencies: {
          ...state.currencies,
          loading: false,
          error: action.error,
        },
      };

    case TOGGLE_PLACES_LOADING_STATUS:
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          loading: !state[action.key].loading,
        },
      };

    case PLACES_LOAD_SUCCESS:
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          loading: false,
          error: false,
          data: action.places,
        },
      };

    case PLACES_LOAD_ERROR:
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          loading: false,
          error: action.error,
        },
      };

    case TOGGLE_RESULTS_LOADING_STATUS:
      return {
        ...state,
        results: {
          ...state.results,
          loading: !state.results.loading,
        },
      };

    case RESULTS_LOAD_SUCCESS:
      return {
        ...state,
        results: {
          ...state.results,
          loading: false,
          error: false,
          data: action.results,
        },
      };

    case RESULTS_LOAD_ERROR:
      return {
        ...state,
        results: {
          ...state.results,
          loading: false,
          error: action.error,
        },
      };

    default:
      return state;
  }
};

export default reducer;
