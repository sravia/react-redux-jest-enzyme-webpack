import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as exchangeActions from '../exchange';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates GET_RATES_SUCCESS when fetching rates has been done', () => {
    fetchMock.getOnce('/latest', {
      headers: { 'content-type': 'application/json' }
    });

    const store = mockStore({ exchange: [] });

    return store.dispatch(exchangeActions.get()).then(() => {
      const actions = store.getActions();

      expect(Object.keys(actions[1].payload)).toEqual([
        'date',
        'rates',
        'base'
      ]);
    });
  });
});
