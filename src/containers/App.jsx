import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as exchangeActionCreator from '../actions/exchange';
import Loading from '../components/loading/Loading';
import Error from '../components/error/Error';
import Rates from '../components/rates/Rates';

export class Main extends Component {
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

Main.propTypes = {
  error: PropTypes.string,
  exchange: PropTypes.shape({
    date: PropTypes.string,
    rates: PropTypes.object,
    base: PropTypes.string
  }),
  loading: PropTypes.bool,
  exchangeActions: PropTypes.object.isRequired
};

Main.defaultProps = {
  error: '',
  exchange: {},
  loading: false
};

const mapStateToProps = state => {
  const { error, exchange, loading } = state.exchange;
  return {
    error,
    exchange,
    loading
  };
};

const mapDispatchToProps = (dispatch, state) => ({
  exchangeActions: bindActionCreators(exchangeActionCreator, dispatch, state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
