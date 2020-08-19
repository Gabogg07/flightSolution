import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import ModalSelector from 'react-native-modal-selector';

class PickerWithTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  onChangeText = (text) => {
    this.setState({
      query: text,
    });
  };

  onSubmit = () => {
    this.props.onQueryChange(this.state.query);
  };

  onChange = (option) => {
    this.props.onPickerChange(option.PlaceId);
  };

  render() {
    const {props} = this;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}: </Text>
        {!props.hideInput && (
          <TextInput
            onChangeText={this.onChangeText}
            onEndEditing={this.onSubmit}
            value={this.state.query}
            style={styles.textInput}
            placeholderTextColor="black"
            placeholder="Search for values"
            {...this.props}
          />
        )}
        {props.data.length !== 0 &&
          <ModalSelector
            data={props.data}
            initValue={props.initValue}
            onChange={this.onChange}
            {...this.props}
          />
        }
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
  container: {
    marginVertical: 5,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
