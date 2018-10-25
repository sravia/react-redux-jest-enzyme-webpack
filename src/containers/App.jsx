import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as exchangeActionCreator from '../actions/exchange';
import AppComponent from '../components/app/App';

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
)(AppComponent);
