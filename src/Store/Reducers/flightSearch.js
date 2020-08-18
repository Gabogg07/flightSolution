import {
  TOGGLE_CURRENCIES_LOADING_STATUS,
  CURRENCIES_LOAD_SUCCESS,
  CURRENCIES_LOAD_ERROR,
  TOGGLE_PLACES_LOADING_STATUS,
  PLACES_LOAD_SUCCESS,
  PLACES_LOAD_ERROR,
} from '../Actions/actionTypes';

const initialState = {
  currency: '',
  currencies:{
    loading: false,
    error: false,
    data: []
  }
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
    default:
      return state;
  }
};

export default reducer;
