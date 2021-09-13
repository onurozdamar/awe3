import axios from 'axios';
import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

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
      <Text style={styles.date}>{formatDate(data?.date)}</Text>
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
  text: {
    margin: 5,
    fontSize: 16,
  },
  date: {
    color: 'rgb(11,51,10)',
    textAlign: 'right',
    marginTop: 5,
    marginRight: 3,
  },
});
