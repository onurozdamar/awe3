import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MyFlatlist from '../components/MyFlatlist';
import RandevuCard from '../components/RandevuCard';
import {getAllRandevus} from '../store/randevu/actions';

const Randevular = ({navigation}) => {
  const dispatch = useDispatch();

  const data = useSelector(state => {
    return state.randevuReducer.allData;
  });

  const loading = useSelector(state => {
    return state.hospitalReducer.loading;
  });

  useEffect(() => {
    if (!navigation) {
      return;
    }

    const willFocusSubscription = navigation.addListener('focus', () => {
      console.log('çek2');
      dispatch(getAllRandevus());
    });

    return willFocusSubscription;
  }, []);

  return (
    <View style={styles.container}>
      <MyFlatlist
        data={data}
        loading={loading}
        onPressPath="Detail"
        navigation={navigation}
        component={<RandevuCard />}
      />
    </View>
  );
};

export default Randevular;

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
