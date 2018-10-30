import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Loading from '../loading/Loading';
import Error from '../error/Error';
import Rates from '../rates/Rates';

export default class App extends PureComponent {
  static propTypes = {
    error: PropTypes.string,
    exchange: PropTypes.shape({
      date: PropTypes.string,
      rates: PropTypes.object,
      base: PropTypes.string
    }),
    loading: PropTypes.bool,
    onLoadRates: PropTypes.func.isRequired
  };

  static defaultProps = {
    error: '',
    exchange: {
      date: 'latest'
    },
    loading: false
  };

  onPreviousClick = () => {
    const {
      onLoadRates,
      exchange: { date }
    } = this.props;

    const newDate = moment(date).subtract(1, 'day');
    onLoadRates(newDate.format('YYYY-MM-DD'));
  };

  onNextClick = () => {
    const {
      onLoadRates,
      exchange: { date }
    } = this.props;
    const newDate = moment(date).add(1, 'day');
    onLoadRates(newDate.format('YYYY-MM-DD'));
  };

  onLoadRatesClick = () => {
    const { onLoadRates } = this.props;
    onLoadRates();
  };

  render() {
    const { error, exchange, loading } = this.props;

    let template;
    if (error) template = <Error error={error} />;
    if (loading) template = <Loading />;
    if (exchange.rates) template = <Rates rates={exchange.rates} />;

    return (
      <div>
        <button type="button" onClick={this.onLoadRatesClick}>
          Load exchange
        </button>

        {exchange.rates && (
          <>
            <button type="button" onClick={this.onPreviousClick}>
              Previous
            </button>
            <button type="button" onClick={this.onNextClick}>
              Next
            </button>
          </>
        )}
        {template}
      </div>
    );
  }
}
