import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {fetchCurrencies, fetchPlaces, fetchResults} from '../Services/APICalls';
import PickerWithTitle from '../Components/PickerWithTitle/PickerWithTitle';

class SearchFlight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      destinationPlace: '',
      arrivalPlace: '',
      destinationQuery: '',
      arrivalQuery: '',
      currency: 'USD',
    };
  }

  componentDidMount() {
    this.props.fetchCurrencies();
  }

  onChange = (key, value) => {
    console.log('LLEGYE', key, value);
    let {state} = this;
    state[key] = value;
    this.setState(state);
  };

  onQueryChange = (key, value) => {
    let {currency} = this.state;
    this.onChange(key, value);
    this.props.fetchPlaces(value, currency, key);
  };

  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <ScrollView>
          <PickerWithTitle
            title={'Currency'}
            data={this.props.currencies.data}
            initValue="Select desired currency"
            onPickerChange={(option) => this.onChange('currency', option.Code)}
            keyExtractor={(item) => item.Code}
            labelExtractor={(item) => `${item.Code} - ${item.Symbol}`}
            selectedKey={this.state.currency}
            hideInput
          />
          <PickerWithTitle
            title={'Departure'}
            data={this.props.originQuery.data}
            initValue="Select place of origin"
            onPickerChange={(option) =>
              this.onChange('originPlace', option.Code)
            }
            onQueryChange={(query) => this.onQueryChange('originQuery', query)}
            keyExtractor={(item) => item.PlaceId}
            labelExtractor={(item) => item.PlaceName}
          />
          <PickerWithTitle
            title={'Arrival'}
            data={this.props.destinationQuery.data}
            initValue="Select place of arrival"
            onPickerChange={(option) =>
              this.onChange('destinationPlace', option.Code)
            }
            onQueryChange={(query) =>
              this.onQueryChange('destinationQuery', query)
            }
            keyExtractor={(item) => item.PlaceId}
            labelExtractor={(item) => item.PlaceName}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.currencies,
  places: state.places,
  originQuery: state.originQuery,
  destinationQuery: state.destinationQuery,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrencies()),
  fetchPlaces: (query, currency, key) =>
    dispatch(fetchPlaces(query, currency, key)),
  fetchResults: () => dispatch(fetchResults()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchFlight);

const styles = StyleSheet.create({
  SafeAreaView: {
    marginHorizontal: 20,
  },
});
