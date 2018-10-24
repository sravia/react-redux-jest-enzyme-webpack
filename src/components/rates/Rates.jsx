import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Rates = ({ rates }) => (
  <div className="rates">
    <table>
      <tbody>
        {Object.keys(rates).map(key => (
          <tr key={key}>
            <td>{key}</td>
            <td>{rates[key]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

Rates.propTypes = {
  rates: PropTypes.object.isRequired
};

export default Rates;
