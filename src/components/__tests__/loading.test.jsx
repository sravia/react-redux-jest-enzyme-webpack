import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../loading/Loading';

describe('<Loading />', () => {
  it('renders <Loading /> component', () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
