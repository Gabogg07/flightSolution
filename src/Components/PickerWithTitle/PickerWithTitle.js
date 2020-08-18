import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ModalSelector from 'react-native-modal-selector';

class PickerWithTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {props} = this;
    return (
      <View>
        <Text style={styles.title}>{props.title}: </Text>
        <ModalSelector
          data={props.data}
          initValue={props.initValue}
          onChange={props.onChange}
          keyExtractor={(item) => item.Code}
          labelExtractor={(item) => item.Name}
        />
      </View>
    );
  }
}

export default PickerWithTitle;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
});
