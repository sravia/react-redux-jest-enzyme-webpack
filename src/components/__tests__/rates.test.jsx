import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Rates from '../rates/Rates';
import { TEST_API_RESPONSE } from '../../constants/responses';

const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

describe('<Rates />', () => {
  it('renders <Rates /> component', () => {
    const wrapper = shallow(<Rates rates={TEST_API_RESPONSE} />);
    expect(
      wrapper.equals(
        <div className="rates">
          <table>
            <tbody>
              {Object.keys(TEST_API_RESPONSE).map(key => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{TEST_API_RESPONSE[key]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    ).toEqual(true);
  });
});
