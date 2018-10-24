import {
  GET_RATES_REQUEST,
  GET_RATES_SUCCESS,
  GET_RATES_FAILURE
} from '../constants/ActionTypes';

import { API_ERROR } from '../constants/Responses';

export const initialState = {
  exchange: {},
  loading: false,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RATES_REQUEST:
      return {
        ...state,
        loading: true,
        exchange: {},
        error: ''
      };
    case GET_RATES_SUCCESS:
      return {
        ...state,
        exchange: action.payload,
        error: '',
        loading: false
      };
    case GET_RATES_FAILURE:
      return {
        ...state,
        error: API_ERROR,
        loading: false,
        exchange: {}
      };
    default:
      return state;
  }
};
