import axios from 'axios';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function RandevuCard(props) {
  const {data, onPress, onLongPress} = props;

  const [active, setActive] = useState(data.active === 'true');

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
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <Text style={styles.rezDate}>{formatDate(data?.rezDate)}</Text>
        <Text style={styles.date}>{formatDate(data?.date)}</Text>
      </View>
      <Icon
        name={active ? 'check' : 'close'}
        size={25}
        color={active ? 'green' : 'red'}
        style={styles.active}
      />
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
    color: 'rgb(11,51,10)',
    marginTop: 5,
    marginRight: 3,
  },
  rezDate: {
    color: 'rgb(11,11,10)',
    marginTop: 5,
    marginLeft: 3,
  },
  active: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 5,
  },
});
