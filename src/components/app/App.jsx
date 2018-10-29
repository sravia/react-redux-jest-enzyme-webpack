import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Loading from '../loading/Loading';
import Error from '../error/Error';
import Rates from '../rates/Rates';

export class App extends PureComponent {
  handleClick = () => {
    const { exchangeActions } = this.props;
    exchangeActions.get();
  };

  render() {
    const { error, exchange, loading } = this.props;

    let template;
    if (error) template = <Error error={error} />;
    if (loading) template = <Loading />;
    if (exchange.rates) template = <Rates rates={exchange.rates} />;

    return (
      <div>
        <button type="button" onClick={() => this.handleClick()}>
          Load exchange
        </button>
        {template}
      </div>
    );
  }
}

App.propTypes = {
  error: PropTypes.string,
  exchange: PropTypes.shape({
    date: PropTypes.string,
    rates: PropTypes.object,
    base: PropTypes.string
  }),
  loading: PropTypes.bool,
  exchangeActions: PropTypes.object.isRequired
};

App.defaultProps = {
  error: '',
  exchange: {},
  loading: false
};

export default App;
