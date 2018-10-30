import { connect } from 'react-redux';
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

const mapDispatchToProps = {
  onLoadRates: exchangeActionCreator.get
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
