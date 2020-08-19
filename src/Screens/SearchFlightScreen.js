import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {fetchCurrencies, fetchPlaces, fetchResults} from '../Services/APICalls';
import PickerWithTitle from '../Components/PickerWithTitle/PickerWithTitle';
import DatePickerWithTitle from '../Components/DatePickerWithTitle/DatePickerWithTitle';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import { format } from "date-fns";

class SearchFlight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      originPlace: '',
      destinationPlace: '',
      originQuery: '',
      destinationQuery: '',
      currency: 'USD',
    };
  }

  componentDidMount() {
    this.props.fetchCurrencies();
  }

  onChange = (key, value) => {
    let {state} = this;
    state[key] = value;
    console.log('CHANING', key,value)
    this.setState(state);
  };

  onQueryChange = (key, value) => {
    let {currency} = this.state;
    this.onChange(key, value);
    this.props.fetchPlaces(value, currency, key);
  };

  onSearch = () => {
    const {
      currency,
      originPlace,
      destinationPlace,
      departureDate,
      arrivalDate,
    } = this.state;

    console.log(departureDate, arrivalDate)
    let formatedDates = [
      format(departureDate, "yyyy-mm-dd"),
      format(arrivalDate, "yyyy-mm-dd")
    ]
    this.props.fetchResults(
      currency,
      originPlace,
      destinationPlace,
      formatedDates[0],
      formatedDates[1],
    );
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
            onPickerChange={(value) => this.onChange('originPlace', value)}
            onQueryChange={(query) => this.onQueryChange('originQuery', query)}
            keyExtractor={(item) => item.PlaceId}
            labelExtractor={(item) => item.PlaceName}
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
          />
          <View style={{flexDirection: 'row'}}>
            <DatePickerWithTitle
              title={'Departure Date'}
              onChange={(date) => this.onChange('departureDate', date)}
            />
            <DatePickerWithTitle
              title={'Arrival Date'}
              onChange={(date) => this.onChange('arrivalDate', date)}
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
  places: state.places,
  originQuery: state.originQuery,
  destinationQuery: state.destinationQuery,
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
  },
  searchButton: {
    backgroundColor: '#83bce5',
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
});
