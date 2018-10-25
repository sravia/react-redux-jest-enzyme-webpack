import React from 'react';
import renderer from 'react-test-renderer';
import { API_ERROR } from '../../constants/responses';
import Error from '../error/Error';

describe('<Error />', () => {
  it('renders <Error /> component', () => {
    const tree = renderer.create(<Error error={API_ERROR} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
