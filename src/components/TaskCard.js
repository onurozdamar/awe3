import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {formatDate, formatTime} from '../helper';
import {updateTaskComplete} from '../store/task/actions';

export default function TaskCard(props) {
  const {data, onPress, onLongPress} = props;

  const dispatch = useDispatch();

  function isTrue(value) {
    return value === 'true' || value === true;
  }

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text style={styles.text}>{data?.title}</Text>
      <Text style={styles.desc}>{data?.desc}</Text>
      <CheckBox
        style={styles.checkbox}
        value={isTrue(data.complete)}
        hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
        onValueChange={() => {
          dispatch(
            updateTaskComplete({
              id: data.id,
              complete: isTrue(data.complete) ? 'false' : 'true',
              recordId: data.recordId,
            }),
          );
        }}
      />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <Text style={styles.dateInfo}>Görev Tarihi</Text>
        <Text style={styles.dateInfo}>Görev Saati</Text>
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
        <Text style={styles.date}>{formatTime(data?.endDate)}</Text>
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
  desc: {
    margin: 5,
    fontSize: 16,
    paddingRight: 40,
    color: 'red',
    textAlign: 'justify',
  },
  checkbox: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
    margin: 10,
  },
});
