import {Formik} from 'formik';
import React, {useEffect} from 'react';
import {
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
  addDrag,
  deleteDrag,
  getDragById,
  updateDrag,
} from '../store/drag/actions';
import MyDatePicker from '../components/MyDatePicker';

export default function AddDrag({navigation, route, ...props}) {
  const editing = route?.params?.editing;
  const data = route?.params?.data;

  const dispatch = useDispatch();
  const drag = useSelector(state => state.dragReducer.item);

  useEffect(() => {
    data.id && dispatch(getDragById(data.id));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <MyModal
        onSuccess={() => {
          dispatch(deleteDrag(data.id));
          navigation.goBack();
        }}
      />
      <Formik
        initialValues={{
          title: data.id ? drag?.title : '',
          frequency: data.id ? drag?.frequency : '',
          date: data.id ? new Date(drag?.date) : new Date(),
          endDate: data.id ? new Date(drag?.endDate) : new Date(),
        }}
        onSubmit={values => {
          if (data?.id) {
            dispatch(
              updateDrag({
                ...values,
                recordId: data.recordId,
                date: values.date.toISOString(),
                endDate: values.endDate.toISOString(),
                id: data.id,
              }),
            );
            navigation.goBack();
          } else {
            dispatch(
              addDrag({
                ...values,
                date: values.date.toISOString(),
                endDate: values.endDate.toISOString(),
                recordId: data.recordId,
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

            {data?.id && (
              <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Ekleme Tarihi</Text>
                <MyDatePicker
                  date={values.date}
                  onChange={setFieldValue}
                  fieldName="date"
                  showTime={false}
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
