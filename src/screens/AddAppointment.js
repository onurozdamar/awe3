import {Formik} from 'formik';
import React, {useEffect, useState} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addAppointment,
  deleteAppointment,
  getAppointmentById,
  updateAppointment,
} from '../store/appointment/actions';
import MyModal from '../components/MyModal';
import MyDatePicker from '../components/MyDatePicker';

export default function AddAppointment({navigation, route, ...props}) {
  const editing = route?.params?.editing;
  const data = route?.params?.data;

  const dispatch = useDispatch();
  const appointment = useSelector(state => state.appointmentReducer.item);

  useEffect(() => {
    dispatch(getAppointmentById(data.id));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <MyModal
        onSuccess={() => {
          dispatch(deleteAppointment(data.id));
          navigation.goBack();
        }}
      />
      <Formik
        initialValues={{
          title: data.id ? appointment?.title : '',
          doctor: data.id ? appointment?.doctor : '',
          rezDate: data.id ? new Date(appointment?.rezDate) : new Date(),
        }}
        onSubmit={values => {
          if (data?.id) {
            dispatch(
              updateAppointment({
                ...values,
                recordId: data.recordId,
                id: data.id,
              }),
            );
            navigation.goBack();
          } else {
            dispatch(addAppointment({...values, recordId: data.recordId}));
            navigation.goBack();
          }
        }}
        enableReinitialize={true}>
        {({handleChange, handleBlur, handleSubmit, setFieldValue, values}) => (
          <View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Başlık</Text>
              <TextInput
                style={styles.input}
                value={values.title}
                onBlur={handleBlur('title')}
                onChangeText={handleChange('title')}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Doktor</Text>
              <TextInput
                style={styles.input}
                value={values.doctor}
                onBlur={handleBlur('doctor')}
                onChangeText={handleChange('doctor')}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Appointment Tarihi</Text>

              <MyDatePicker
                date={values.rezDate}
                onChange={setFieldValue}
                fieldName="rezDate"
              />
            </View>

            <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
              <Text style={styles.addButtonText}>
                {editing ? 'Güncelle' : 'Ekle'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(151,251,155)',
    padding: 5,
    margin: 5,
    borderRadius: 5,
    height: '100%',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 25,
    marginTop: 10,
  },
  input: {
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
    paddingRight: 36,
  },
  inputLabel: {
    marginBottom: 5,
    fontWeight: '500',
    fontSize: 20,
  },
  addButton: {
    padding: 5,
    margin: 5,
    borderWidth: 1,
    backgroundColor: 'yellow',
  },
  addButtonText: {
    textAlign: 'center',
    fontSize: 15,
  },
});
