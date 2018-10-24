import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Error from '../error/Error';
import { API_ERROR } from '../../constants/Responses';

const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

describe('<Error />', () => {
  it('renders <Error /> component', () => {
    const wrapper = shallow(<Error error={API_ERROR} />);
    expect(
      wrapper.equals(
        <div>
          <span>{API_ERROR}</span>
        </div>
      )
    ).to.equal(true);
  });
});
