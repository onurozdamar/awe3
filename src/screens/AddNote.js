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
import MyDatePicker from '../components/MyDatePicker';
import {
  addNote,
  deleteNote,
  getNoteById,
  updateNote,
} from '../store/note/actions';

export default function AddNote({navigation, route, ...props}) {
  const editing = route?.params?.editing;
  const data = route?.params?.data;

  const dispatch = useDispatch();
  const note = useSelector(state => state.noteReducer.item);

  console.log(data, note);

  useEffect(() => {
    data.id && dispatch(getNoteById(data.id));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <MyModal
        onSuccess={() => {
          dispatch(deleteNote(data.id));
          navigation.goBack();
        }}
        reducerKey="delete"
      />

      <Formik
        initialValues={{
          desc: data.id ? note?.desc : '',
          date: data.id ? new Date(note?.date) : new Date(),
        }}
        onSubmit={values => {
          if (data?.id) {
            dispatch(
              updateNote({
                ...values,
                recordId: data.recordId,
                date: values.date.toISOString(),
                id: data.id,
              }),
            );
            navigation.goBack();
          } else {
            dispatch(
              addNote({
                ...values,
                date: values.date.toISOString(),
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
              <Text style={styles.inputLabel}>Açıklama</Text>
              <TextInput
                style={styles.input}
                value={values.desc}
                onBlur={handleBlur('desc')}
                onChangeText={handleChange('desc')}
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
