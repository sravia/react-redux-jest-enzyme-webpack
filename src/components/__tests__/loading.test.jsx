import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Loading from '../loading/Loading';

const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

describe('<Loading />', () => {
  it('renders <Loading /> component', () => {
    const wrapper = shallow(<Loading />);
    expect(
      wrapper.equals(
        <div>
          <span>Loading...</span>
        </div>
      )
    ).toEqual(true);
  });
});
