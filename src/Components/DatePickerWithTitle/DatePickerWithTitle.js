import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

class DatePickerWithTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,

    };
  }

   showDatePicker = () => {
    this.setState({isVisible: true})
  };

   hideDatePicker = () => {
    this.setState({isVisible: false})
  };

   handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    this.hideDatePicker();
  };

  onChange = (date)=>{
    console.log(date)
    this.setState({date})
  } 

  render() {
    const show=true;

  
    return (
      <View>
        {/* <View>
          <Button onPress={showDatepicker} title="Show date picker!" />
        </View>
        <View>
          <Button onPress={showTimepicker} title="Show time picker!" />
        </View> */}
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            mode='date'
            value={this.state.date || new Date()}
            onChange={this.onChange}
          />
        )}
    </View>
    );
  }
}

export default DatePickerWithTitle;
