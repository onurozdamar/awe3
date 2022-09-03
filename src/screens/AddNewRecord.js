import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addRecord, deleteRecord, updateRecord} from '../store/record/actions';
import MyModal from '../components/MyModal';
import {Formik} from 'formik';
import MyDatePicker from '../components/MyDatePicker';

export default function AddNewRecord({navigation, route, ...props}) {
  const editing = route?.params?.editing;
  const data = route?.params?.data;

  const dispatch = useDispatch();

  return (
    <ScrollView style={styles.container}>
      <MyModal
        onSuccess={() => {
          dispatch(deleteRecord(data.id));
          navigation.navigate('Ana Sayfa');
        }}
      />
      <Formik
        initialValues={{
          title: data?.id ? data.title : '',
          date: data?.id ? new Date(data.date) : new Date(),
        }}
        onSubmit={values => {
          if (data?.id) {
            dispatch(
              updateRecord({
                ...values,
                date: values.date.toISOString(),
                id: data.id,
              }),
            );
          } else {
            dispatch(addRecord({...values, date: values.date.toISOString()}));
          }
          navigation.navigate('Ana Sayfa');
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

            {data?.id && (
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Appointment Tarihi</Text>

                <MyDatePicker
                  date={values.date}
                  onChange={setFieldValue}
                  fieldName="date"
                />
              </View>
            )}

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
