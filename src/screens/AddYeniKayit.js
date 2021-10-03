import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  addHastane,
  deleteHastane,
  updateHastane,
} from '../store/hospital/actions';
import MyModal from '../components/MyModal';

export default function AddYeniKayit({navigation, route, ...props}) {
  const editing = route?.params?.editing;
  const data = route?.params?.data;

  const [inputValue, setInputValue] = useState(data?.title ?? '');

  const dispatch = useDispatch();

  return (
    <ScrollView style={styles.container}>
      <MyModal
        onSuccess={() => {
          dispatch(deleteHastane(data.hastaneId));
          navigation.navigate('Ana Sayfa');
        }}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
          {editing ? 'Düzenle' : 'Yeni Kayıt'}
        </Text>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={val => {
            setInputValue(val);
          }}
        />
      </View>

      <TouchableOpacity
        style={styles.addButton}
        disabled={inputValue === ''}
        onPress={() => {
          if (editing) {
            dispatch(updateHastane({title: inputValue, id: data.hastaneId}));
            navigation.navigate('Ana Sayfa');
          } else {
            dispatch(addHastane({title: inputValue}));
            navigation.navigate('Ana Sayfa');
          }
        }}>
        <Text style={styles.addButtonText}>
          {editing ? 'Güncelle' : 'Ekle'}
        </Text>
      </TouchableOpacity>
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
