import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class ResultRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getDirectText = (value) => {
    if (value) {
      return ' Direct Flight';
    } else {
      return ' Not a Direct Flight';
    }
  };

  render() {
    const {props} = this;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Price: {props.price} -- {this.getDirectText(props.direct)}{' '}
        </Text>
      </View>
    );
  }
}

export default ResultRow;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 5,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});
