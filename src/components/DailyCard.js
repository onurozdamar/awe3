import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {months} from '../contants';

export default function DailyCard(props) {
  const {data, onPress, onLongPress} = props;

  function formatDate(dateStr) {
    if (!dateStr) {
      return '';
    }

    var date = new Date(dateStr);
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();

    return dd + '/' + mm + '/' + yyyy;
  }

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text style={styles.text}>{data?.title}</Text>
      <View style={styles.infoGroup}>
        <Text style={styles.month}>
          {months[new Date(data.date).getMonth()]} Ayı{' '}
          {Math.ceil(new Date(data.date).getDate() / 7)}. Hafta
        </Text>
        <View>
          <Text style={styles.dateInfo}>Eklenme Tarihi</Text>
          <Text style={styles.date}>{formatDate(data?.date)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgb(151,251,155)',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  infoGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    margin: 5,
    fontSize: 18,
    fontWeight: '400',
  },
  month: {
    color: 'rgb(11,51,10)',
    alignSelf: 'flex-end',
    textAlign: 'right',
    margin: 5,
    fontWeight: '300',
  },
  date: {
    color: 'rgb(11,51,10)',
    textAlign: 'right',
    marginTop: 5,
    marginRight: 3,
    fontWeight: '300',
  },
  dateInfo: {
    color: 'rgb(61,51,60)',
    textAlign: 'right',
    marginTop: 5,
    marginRight: 3,
    fontWeight: '200',
  },
});
