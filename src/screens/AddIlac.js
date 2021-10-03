import {Formik} from 'formik';
import React, {useEffect, useState} from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MyModal from '../components/MyModal';
import {
  addIlac,
  deleteIlac,
  getIlacById,
  updateIlac,
} from '../store/ilac/actions';
import DateTimePicker from '@react-native-community/datetimepicker';
import MyDatePicker from '../components/MyDatePicker';

export default function AddIlac({navigation, route, ...props}) {
  const editing = route?.params?.editing;
  const data = route?.params?.data;

  const dispatch = useDispatch();
  const ilac = useSelector(state => state.ilacReducer.item);

  useEffect(() => {
    dispatch(getIlacById(data.id));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <MyModal
        onSuccess={() => {
          dispatch(deleteIlac(data.id));
          navigation.goBack();
        }}
      />
      <Formik
        initialValues={{
          title: data.id ? ilac?.title : '',
          frequency: data.id ? ilac?.frequency : '',
          endDate: data.id ? new Date(ilac?.endDate) : new Date(),
        }}
        onSubmit={values => {
          if (data?.id) {
            dispatch(
              updateIlac({
                ...values,
                hastaneId: data.hastaneId,
                id: data.id,
              }),
            );
            navigation.goBack();
          } else {
            dispatch(
              addIlac({
                ...values,
                hastaneId: data.hastaneId,
              }),
            );
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
              <Text style={styles.inputLabel}>Kullanım Sıklığı</Text>
              <TextInput
                style={styles.input}
                value={values.frequency}
                onBlur={handleBlur('frequency')}
                onChangeText={handleChange('frequency')}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Kullanma Tarihi</Text>
              <MyDatePicker
                date={values.endDate}
                onChange={setFieldValue}
                fieldName="endDate"
                showTime={false}
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
