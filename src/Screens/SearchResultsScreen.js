import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ResultRow from '../Components/ResultRow/ResultRow';

class SearchResultsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {results} = this.props;
    const resultLength = results.data.length;

    if (resultLength === 0) {
      return (
        <SafeAreaView style={styles.emptyResultsContainer}>
          <Text> No available flights for search parameters</Text>
        </SafeAreaView>
      );
    }

    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <Text style={styles.text}>Available Quote Number: {resultLength}</Text>
        {results.data.map((quote) => (
          <ResultRow price={quote.MinPrice} direct={quote.Direct} />
        ))}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  results: state.results,
});

export default connect(mapStateToProps, null)(SearchResultsScreen);

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: 'midnightblue',
    flex: 1,
  },
  emptyResultsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
});
