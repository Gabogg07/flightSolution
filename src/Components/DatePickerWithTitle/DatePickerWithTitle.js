import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

class DatePickerWithTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      date: ''
    };
  }

   showDatePicker = () => {
    this.setState({isVisible: true})
  };

   hideDatePicker = () => {
    this.setState({isVisible: false})
  };

   handleConfirm = (date) => {
    this.setState({date})
    this.hideDatePicker();
  };

  render() {
    const {props} = this
    return (
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <TouchableWithoutFeedback onPress={this.showDatePicker} style={styles.dateField}>
          <Text>{`${this.state.date}` || "Pick a date"}</Text>
        </TouchableWithoutFeedback>
        <DateTimePickerModal
          isVisible={this.state.isVisible}
          mode="date"
          onConfirm={this.handleConfirm}
          onCancel={this.hideDatePicker}
        />
    </View>
    );
  }
}

export default DatePickerWithTitle;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  container: {
    marginVertical: 5,
  },
  dateField: {
    height: 40,
    borderColor: 'lightgrey',
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
  },
});