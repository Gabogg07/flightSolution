import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {fetchCurrencies, fetchPlaces, fetchResults} from '../Services/APICalls';
import PickerWithTitle from '../Components/PickerWithTitle/PickerWithTitle';
import DatePickerWithTitle from '../Components/DatePickerWithTitle/DatePickerWithTitle';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {format} from 'date-fns';

class SearchFlight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originPlace: '',
      destinationPlace: '',
      originQuery: '',
      destinationQuery: '',
      departureDate: new Date(),
      arrivalDate: new Date(),
      currency: 'USD',
      showError: false,
      errorMessage: '',
    };
  }

  componentDidMount() {
    this.props.fetchCurrencies();
  }

  onChange = (key, value) => {
    let {state} = this;
    state[key] = value;
    this.setState(state);
  };

  onQueryChange = (key, value) => {
    let {currency} = this.state;
    this.onChange(key, value);
    this.props.fetchPlaces(value, currency, key);
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.currencies.error ||
      nextProps.originQuery.error ||
      nextProps.destinationQuery.error
    ) {
      return {
        errorMessage: 'There was a problem loading the data',
      };
    }

    return null;
  }

  onSearch = () => {
    const {state, props} = this;

    const {
      currency,
      originPlace,
      destinationPlace,
      departureDate,
      arrivalDate,
    } = state;

    if (destinationPlace === '' || originPlace === '') {
      state.showError = true;
      this.setState(state);
      return null;
    }

    state.showError = false;
    this.setState(state);
    let formatedDates = [
      format(departureDate, 'yyyy-MM-dd'),
      format(arrivalDate, 'yyyy-MM-dd'),
    ];
    this.props.fetchResults(
      currency,
      originPlace,
      destinationPlace,
      formatedDates[0],
      formatedDates[1],
    );
    props.navigation.navigate('SearchResults', {results: props.results});
  };

  render() {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <ScrollView>
          {this.state.showError && (
            <View style={styles.errorBox}>
              <Text style={styles.errorText}> Please fill all the fields</Text>
            </View>
          )}

          {this.state.errorMessage !== '' && (
            <View style={styles.errorBox}>
              <Text style={styles.errorText}>{this.state.errorMessage}</Text>
            </View>
          )}

          <PickerWithTitle
            title={'Currency'}
            data={this.props.currencies.data}
            initValue="Select desired currency"
            onPickerChange={(value) => this.onChange('currency', value)}
            keyExtractor={(item) => item.Code}
            labelExtractor={(item) => `${item.Code} - ${item.Symbol}`}
            selectedKey={this.state.currency}
            hideInput
            showError={this.state.showError}
          />
          <PickerWithTitle
            title={'Departure'}
            data={this.props.originQuery.data}
            initValue="Select place of origin"
            onPickerChange={(value) => this.onChange('originPlace', value)}
            onQueryChange={(query) => this.onQueryChange('originQuery', query)}
            keyExtractor={(item) => item.PlaceId}
            labelExtractor={(item) => item.PlaceName}
            showError={this.state.showError}
          />
          <PickerWithTitle
            title={'Arrival'}
            data={this.props.destinationQuery.data}
            initValue="Select place of arrival"
            onPickerChange={(value) => this.onChange('destinationPlace', value)}
            onQueryChange={(query) =>
              this.onQueryChange('destinationQuery', query)
            }
            keyExtractor={(item) => item.PlaceId}
            labelExtractor={(item) => item.PlaceName}
            showError={this.state.showError}
          />
          <View style={{flexDirection: 'row'}}>
            <DatePickerWithTitle
              title={'Departure Date'}
              onChange={(date) => this.onChange('departureDate', date)}
              minimumDate={new Date()}
              showError={this.state.showError}
            />
            <DatePickerWithTitle
              title={'Arrival Date'}
              onChange={(date) => this.onChange('arrivalDate', date)}
              minimumDate={this.state.departureDate}
              showError={this.state.showError}
            />
          </View>

          <TouchableWithoutFeedback
            style={styles.searchButton}
            onPress={this.onSearch}>
            <Text style={styles.buttonText}>Search flights</Text>
          </TouchableWithoutFeedback>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.currencies,
  originQuery: state.originQuery,
  destinationQuery: state.destinationQuery,
  results: state.results,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrencies()),
  fetchPlaces: (query, currency, key) =>
    dispatch(fetchPlaces(query, currency, key)),
  fetchResults: (currency, origin, destination, outDate, inDate) =>
    dispatch(fetchResults(currency, origin, destination, outDate, inDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchFlight);

const styles = StyleSheet.create({
  SafeAreaView: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: 'midnightblue'
  },
  searchButton: {
    backgroundColor: 'mediumturquoise',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 15,
  },
  errorBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 5,
  },
});
