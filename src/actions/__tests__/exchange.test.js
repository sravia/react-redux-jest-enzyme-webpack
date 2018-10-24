import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import * as exchangeActions from '../exchange';
import * as types from '../../constants/ActionTypes';
import { TEST_API_RESPONSE } from '../../constants/Responses';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates GET_RATES_SUCCESS when fetching rates has been done', () => {
    fetchMock.getOnce('/latest', {
      body: TEST_API_RESPONSE,
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: types.GET_RATES_REQUEST },
      { type: types.GET_RATES_SUCCESS, payload: TEST_API_RESPONSE }
    ];
    const store = mockStore({ exchange: [] });

    return store.dispatch(exchangeActions.get()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
