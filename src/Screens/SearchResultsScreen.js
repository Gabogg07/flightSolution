import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import {connect} from 'react-redux';

class SearchResultsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView>
        <Text> SearchResultsScreen </Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  results: state.results,
});

const mapDispatchToProps = (dispatch) => ({
  fetchResults: () => dispatch(fetchResults()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsScreen);
