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
  addRandevu,
  deleteRandevu,
  getRandevuById,
  updateRandevu,
} from '../store/randevu/actions';
import MyModal from '../components/MyModal';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddRandevu({navigation, route, ...props}) {
  const editing = route?.params?.editing;
  const data = route?.params?.data;

  const dispatch = useDispatch();
  const randevu = useSelector(state => state.randevuReducer.item);

  useEffect(() => {
    dispatch(getRandevuById(data.id));
  }, []);

  const [show, setShow] = useState(false);

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
    <ScrollView style={styles.container}>
      <MyModal
        onSuccess={() => {
          dispatch(deleteRandevu(data.id));
          navigation.goBack();
        }}
      />
      <Formik
        initialValues={{
          title: data.id ? randevu?.title : '',
          rezDate: data.id ? new Date(randevu?.rezDate) : new Date(),
        }}
        onSubmit={values => {
          if (data?.id) {
            dispatch(
              updateRandevu({
                ...values,
                hastaneId: data.hastaneId,
                id: data.id,
              }),
            );
            navigation.goBack();
          } else {
            dispatch(addRandevu({...values, hastaneId: data.hastaneId}));
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
              <Text style={styles.inputLabel}>Randevu Tarihi</Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    display: 'flex',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                    }}>
                    {formatDate(values.rezDate)}
                  </Text>
                </View>
                <TouchableOpacity
                  style={[styles.addButton, {flex: 1}]}
                  onPress={() => {
                    setShow(true);
                  }}>
                  <Text style={styles.addButtonText}>Tarih Seç</Text>
                </TouchableOpacity>
              </View>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={values.rezDate}
                  display="default"
                  mode="date"
                  onChange={val => {
                    setFieldValue(
                      'rezDate',
                      val.nativeEvent.timestamp || values.rezDate,
                    );
                    setShow(false);
                  }}
                />
              )}
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
