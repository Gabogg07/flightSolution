import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {fetchCurrencies, fetchCountries} from '../Services/APICalls';

class SearchFlight extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchCurrencies();
    this.props.fetchCountries();
  }

  render() {
    return (
      <View>
        <Text> SearchFlight </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrencies()),
  fetchCountries: () => dispatch(fetchCountries()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchFlight);
