import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setOpenModal} from '../store/record/actions';

const MyModal = props => {
  const {
    onSuccess,
    label = 'Silmek İstediğinize Emin misiniz?',
    okLabel = 'Sil',
    cancelLabel = 'İptal',
    reducerKey = 'delete',
  } = props;

  const dispatch = useDispatch();
  const openModal = useSelector(state => state.recordReducer.openModal);
  console.log(openModal);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal[reducerKey] ?? false}
        onRequestClose={() => {
          dispatch(setOpenModal({reducerKey: false}));
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{label}</Text>
            <View style={styles.actions}>
              <TouchableOpacity
                style={[styles.button, styles.buttonDelete]}
                onPress={() => {
                  onSuccess && onSuccess();
                  dispatch(setOpenModal({reducerKey: false}));
                }}>
                <Text style={styles.textStyle}>{okLabel}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonCancel]}
                onPress={() => dispatch(setOpenModal({reducerKey: false}))}>
                <Text style={styles.textStyle}>{cancelLabel}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    margin: 10,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonCancel: {
    backgroundColor: '#2196F3',
  },
  buttonDelete: {
    backgroundColor: '#F2311F',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default MyModal;
