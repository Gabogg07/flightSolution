import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';

class SearchResultsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={{backgroundColor: 'midnightblue', flex: 1}}>
        <Text> SearchResultsScreen </Text>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  results: state.results,
});

export default connect(mapStateToProps, null)(SearchResultsScreen);
