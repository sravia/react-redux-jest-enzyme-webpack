import reducer from '../exchange';
import * as types from '../../constants/ActionTypes';
import { API_ERROR, TEST_API_RESPONSE } from '../../constants/Responses';

describe('exchange reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      exchange: {},
      loading: false,
      error: ''
    });
  });

  it('should handle GET_RATES_REQUEST', () => {
    expect(
      reducer([], {
        type: types.GET_RATES_REQUEST
      })
    ).toEqual({
      exchange: {},
      loading: true,
      error: ''
    });
  });

  it('should handle GET_RATES_SUCCESS', () => {
    expect(
      reducer([], {
        type: types.GET_RATES_SUCCESS,
        payload: TEST_API_RESPONSE
      })
    ).toEqual({
      exchange: TEST_API_RESPONSE,
      loading: false,
      error: ''
    });
  });

  it('should handle GET_RATES_FAILURE', () => {
    expect(
      reducer([], {
        type: types.GET_RATES_FAILURE,
        error: API_ERROR
      })
    ).toEqual({
      exchange: {},
      loading: false,
      error: API_ERROR
    });
  });
});
