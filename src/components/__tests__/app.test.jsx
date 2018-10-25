import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { API_ERROR, TEST_API_RESPONSE } from '../../constants/Responses';
import { App } from '../app/App';

const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

describe('AppContainer', () => {
  it('with error', () => {
    const props = {
      exchangeActions: {},
      error: API_ERROR
    };

    const wrapper = shallow(<App {...props} />);
    const errorComponent = wrapper.find('Error').length;

    expect(errorComponent).toEqual(1);
  });

  it('loading', () => {
    const props = {
      exchangeActions: {},
      loading: true
    };

    const wrapper = shallow(<App {...props} />);
    const loadingComponent = wrapper.find('Loading').length;

    expect(loadingComponent).toEqual(1);
  });

  it('rates', () => {
    const cb = {
      get: jest.fn()
    };

    const props = {
      exchange: TEST_API_RESPONSE,
      exchangeActions: cb
    };

    const wrapper = shallow(<App {...props} />);

    const ratesComponent = wrapper.find('Rates').length;
    expect(ratesComponent).toEqual(1);
  });
});
