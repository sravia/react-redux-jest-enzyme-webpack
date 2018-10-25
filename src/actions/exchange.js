import axios from 'axios';

import {
  GET_RATES_REQUEST,
  GET_RATES_SUCCESS,
  GET_RATES_FAILURE
} from '../constants/ActionTypes';
import { API_ERROR } from '../constants/Responses';

const API = 'https://api.exchangeratesapi.io/latest';

export const getRatesSuccess = payload => ({
  type: GET_RATES_SUCCESS,
  payload
});

export const getRatesFailure = error => ({
  type: GET_RATES_FAILURE,
  error
});

export const getRatesRequest = () => ({
  type: GET_RATES_REQUEST
});

export const get = () => dispatch => {
  dispatch(getRatesRequest());

  return axios.get(API).then(
    response => {
      dispatch(getRatesSuccess(response.data));
    },
    () => {
      dispatch(getRatesFailure(API_ERROR));
    }
  );
};
