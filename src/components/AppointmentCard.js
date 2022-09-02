import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AppointmentCard(props) {
  const {data, onPress, onLongPress} = props;

  const active = new Date(data?.rezDate) < new Date();

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

  function formatTime(dateStr) {
    if (!dateStr) {
      return '';
    }

    var date = new Date(dateStr);
    var h = String(date.getHours()).padStart(2, '0');
    var m = String(date.getMinutes()).padStart(2, '0');

    return h + ':' + m;
  }

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text style={styles.text}>{data?.title}</Text>
      {data?.doctor !== '' && <Text style={styles.text}>{data?.doctor}</Text>}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <Text style={styles.dateInfo}>Appointment Tarihi</Text>
        <Text style={styles.dateInfo}>Appointment Saati</Text>
        <Text style={styles.dateInfo}>Eklenme Tarihi</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <Text style={styles.date}>{formatDate(data?.rezDate)}</Text>
        <Text style={styles.date}>{formatTime(data?.rezDate)}</Text>
        <Text style={styles.date}>{formatDate(data?.date)}</Text>
      </View>
      <Icon
        name={active ? 'check' : 'pause'}
        size={20}
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
  active: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
