import React, {useState} from 'react';
import {
  View,
  Button,
  Platform,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {formatDate, formatTime} from '../helper';

export default MyDatePicker = props => {
  const {date, onChange, fieldName, showDate = true, showTime = true} = props;
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    onChange(fieldName, currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      {showDate && (
        <View style={styles.datePickerRow}>
          <Text style={styles.date}>{formatDate(date)}</Text>
          <TouchableOpacity style={styles.addButton} onPress={showDatepicker}>
            <Text style={styles.addButtonText}>Tarih Seç</Text>
          </TouchableOpacity>
        </View>
      )}

      {showTime && (
        <View style={styles.datePickerRow}>
          <Text style={styles.date}>{formatTime(date)}</Text>

          <TouchableOpacity style={styles.addButton} onPress={showTimepicker}>
            <Text style={styles.addButtonText}>Saat Seç</Text>
          </TouchableOpacity>
        </View>
      )}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChangeDate}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  datePickerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  date: {
    fontSize: 17,
    margin: 5,
    flex: 1,
    textAlign: 'center',
  },
  addButton: {
    padding: 5,
    margin: 10,
    borderWidth: 1,
    backgroundColor: 'yellow',
    flex: 1,
  },
  addButtonText: {
    textAlign: 'center',
    fontSize: 15,
  },
});
