import React, {useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {addRecord} from '../store/record/actions';

function AddButton({navigation}) {
  const [visible, setVisible] = useState(false);
  const dimensions = useRef({width: 0, height: 0});

  const dispatch = useDispatch();

  const selectItems = [
    {id: 0, label: 'Yeni', navigate: 'Yeni Kayıt', onSelect: () => {}},
    {
      id: 1,
      label: 'Kemoterapi',
      navigate: '',
      onSelect: () =>
        dispatch(
          addRecord({title: 'Kemoterapi', date: new Date().toISOString()}),
        ),
    },
  ];

  return (
    <View style={styles.container} on>
      {visible && (
        <View
          style={{
            borderWidth: 2,
            borderRadius: 5,
          }}>
          {selectItems.map((item, index) => (
            <TouchableOpacity
              style={{
                ...styles.option,
                borderBottomWidth: index === selectItems.length - 1 ? 0 : 1,
              }}
              key={item.id}
              onPress={() => {
                setVisible(false);
                item.navigate && navigation.navigate(item.navigate);
                item.onSelect();
              }}>
              <Text style={styles.names}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      <TouchableOpacity
        style={styles.button}
        onLayout={event => {
          const {width, height} = event.nativeEvent.layout;
          dimensions.current.width = width;
          dimensions.current.height = height;
        }}
        onPress={() => {
          setVisible(v => !v);
        }}>
        <Icon name={'plus'} size={30} color={'green'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 5,
  },
  option: {
    padding: 10,
    paddingHorizontal: 5,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'rgb(151,251,155)',
    width: 50,
    height: 50,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(51,125,52)',
    borderRadius: 99,
    alignSelf: 'flex-end',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  names: {
    textAlign: 'center',
  },
});

export default AddButton;
