import axios from 'axios';

import {
  GET_RATES_REQUEST,
  GET_RATES_SUCCESS,
  GET_RATES_FAILURE
} from '../constants/actionTypes';
import { API_ERROR } from '../constants/responses';

const API = 'https://api.exchangeratesapi.io/';

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

export const get = (date = 'latest') => dispatch => {
  dispatch(getRatesRequest());

  return axios.get(`${API}${date}`).then(
    response => {
      dispatch(getRatesSuccess(response.data));
    },
    () => {
      dispatch(getRatesFailure(API_ERROR));
    }
  );
};
