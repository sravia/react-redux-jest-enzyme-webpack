import React from 'react';
import renderer from 'react-test-renderer';
import Rates from '../rates/Rates';
import { TEST_API_RESPONSE } from '../../constants/responses';

describe('<Rates />', () => {
  it('renders <Rates /> component', () => {
    const tree = renderer
      .create(<Rates rates={TEST_API_RESPONSE.rates} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
