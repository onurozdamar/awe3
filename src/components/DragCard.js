import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {formatDate} from '../helper';

export default function DragCard(props) {
  const {data, onPress, onLongPress} = props;

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text style={styles.text}>{data?.title}</Text>
      <Text style={styles.frequency}>{data?.frequency}</Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <Text style={styles.dateInfo}>İlaç Bitiş Tarihi</Text>
        <Text style={styles.dateInfo}>Eklenme Tarihi</Text>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <Text style={styles.date}>{formatDate(data?.endDate)}</Text>
        <Text style={styles.date}>{formatDate(data?.date)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgb(151,251,155)',
    padding: 5,
    margin: 5,
    marginTop: 0,
    borderRadius: 5,
  },
  text: {
    margin: 5,
    fontSize: 16,
    paddingRight: 40,
    textAlign: 'justify',
  },
  date: {
    color: 'rgb(11,11,10)',
    marginTop: 5,
    marginLeft: 3,
    fontWeight: '300',
  },
  dateInfo: {
    color: 'rgb(11,11,10)',
    marginTop: 5,
    marginLeft: 3,
    fontWeight: '200',
  },
  frequency: {
    margin: 5,
    fontSize: 16,
    paddingRight: 40,
    color: 'red',
    textAlign: 'justify',
  },
});
