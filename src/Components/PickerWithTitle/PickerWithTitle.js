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
    this.setState({
      option,
    });
  };

  render() {
    const {props, state} = this;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}: </Text>
        {!props.hideInput && (
          <TextInput
            onChangeText={this.onChangeText}
            onEndEditing={this.onSubmit}
            value={this.state.query}
            style={[
              styles.textInput,
              props.showError &&
                state.query === '' &&
                !props.hideInput &&
                styles.errorContainer,
            ]}
            placeholderTextColor="black"
            placeholder="Search for values"
            {...this.props}
          />
        )}
        {props.data.length !== 0 && (
          <ModalSelector
            data={props.data}
            initValue={props.initValue}
            onChange={this.onChange}
            style={
              (styles.modalSelector,
              props.showError &&
                !state.option &&
                !props.hideInput &&
                styles.errorContainer)
            }
            touchableStyle={styles.modalTouchable}
            {...this.props}
          />
        )}
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
    color: 'white',
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
    backgroundColor: 'white',
  },
  modalSelector: {
    backgroundColor: 'white',
  },
  modalTouchable: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  errorContainer: {
    borderColor: 'red',
    borderWidth: 1,
  },
});
