import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {fetchCurrencies, fetchCountries} from '../Services/APICalls';
import PickerWithTitle from '../Components/PickerWithTitle/PickerWithTitle';

class SearchFlight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destinationCountry: '',
      arrivalCountry: '',
    };
  }

  componentDidMount() {
    this.props.fetchCurrencies();
    this.props.fetchCountries();
  }

  onPickerChange = (key, value) => {
    let {state} = this;
    console.log(key, value);
    state[key] = value;
    this.setState(state);
  };

  render() {
    return (
      <SafeAreaView>
        <PickerWithTitle
          title={'Departure'}
          data={this.props.countries.data}
          initValue="Select place of origin"
          onChange={(option) => this.onPickerChange('arrivalCountry', option.Code)}
        />
        <PickerWithTitle
          title={'Arrival'}
          data={this.props.countries.data}
          initValue="Select place of arrival"
          onChange={(option) => this.onPickerChange('destinationCountry', option.Code)}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.currencies,
  countries: state.countries,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrencies()),
  fetchCountries: () => dispatch(fetchCountries()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchFlight);
