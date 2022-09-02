import CheckBox from '@react-native-community/checkbox';
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
  addTask,
  deleteTask,
  getTaskById,
  updateTask,
} from '../store/task/actions';

export default function AddTask({navigation, route, ...props}) {
  const editing = route?.params?.editing;
  const data = route?.params?.data;

  const dispatch = useDispatch();
  const task = useSelector(state => state.taskReducer.item);

  useEffect(() => {
    dispatch(getTaskById(data.id));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <MyModal
        onSuccess={() => {
          dispatch(deleteTask(data.id));
          navigation.goBack();
        }}
      />
      <Formik
        initialValues={{
          title: data.id ? task?.title : '',
          desc: data.id ? task?.desc : '',
          endDate: data.id ? new Date(task?.endDate) : new Date(),
          complete: data.id ? task?.complete === 'true' : false,
        }}
        onSubmit={values => {
          if (data?.id) {
            dispatch(
              updateTask({
                ...values,
                recordId: data.recordId,
                id: data.id,
              }),
            );
            navigation.goBack();
          } else {
            dispatch(
              addTask({
                ...values,
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
              <Text style={styles.inputLabel}>Açıklama</Text>
              <TextInput
                style={styles.input}
                value={values.desc}
                onBlur={handleBlur('desc')}
                onChangeText={handleChange('desc')}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Tamamlanma Tarihi</Text>
              <MyDatePicker
                date={values.endDate}
                onChange={setFieldValue}
                fieldName="endDate"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Tamamlandı</Text>
              <CheckBox
                style={styles.input}
                value={values.complete}
                onBlur={handleBlur('complete')}
                onValueChange={val => {
                  setFieldValue('complete', val);
                }}
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
