import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import DailyCard from '../components/DailyCard';
import MyFlatlist from '../components/MyFlatlist';
import {BaseManager} from '../database/index';
import {getHastane as getHastaneAction} from '../store/hospital/actions/hospital.action';

const Feed = ({navigation}) => {
  const manager = new BaseManager();

  const dispatch = useDispatch();

  const data = useSelector(state => {
    return state.hospitalReducer.data;
  });

  const loading = useSelector(state => {
    return state.hospitalReducer.loading;
  });

  useEffect(() => {
    manager.createHastaneTable();
    manager.createRandevuTable();
    manager.createIlacTable();
    manager.createGorevTable();
  }, []);

  useEffect(() => {
    if (!navigation) {
      return;
    }

    const willFocusSubscription = navigation.addListener('focus', () => {
      console.log('çek2');
      dispatch(getHastaneAction());
    });

    return willFocusSubscription;
  }, []);

  return (
    <View style={styles.container}>
      <MyFlatlist
        data={data}
        loading={loading}
        onPressPath="Detail"
        onLongPressPath="Kayıt Güncelle"
        navigation={navigation}
        component={<DailyCard />}
      />
      <TouchableOpacity
        style={styles.floatActionButton}
        onPress={() => {
          console.log('as');
          navigation.navigate('Yeni Kayıt');
        }}>
        <Icon name={'plus'} size={30} color={'green'} />
      </TouchableOpacity>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'green',
    textAlign: 'center',
    height: 50,
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 5,
  },
  text: {},
  floatActionButton: {
    backgroundColor: 'rgba(51,125,52,.5)',
    width: 50,
    height: 50,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgb(51,125,52)',
    borderRadius: 99,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 10,
    margin: 5,
  },
});
