import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Rates = ({ rates }) => (
  <div className="rates">
    <table>
      <tbody>
        {Object.entries(rates).map(([symbol, rate]) => (
          <tr key={`${symbol}${rate}`}>
            <td>{symbol}</td>
            <td>{rate}</td>
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
