import React, {useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GorevCard from '../components/GorevCard';
import IlacCard from '../components/IlacCard';
import MyList from '../components/MyList';
import RandevuCard from '../components/RandevuCard';
import {getRandevu} from '../store/randevu/actions';
import {getGorev} from '../store/gorev/actions';
import {getIlac} from '../store/ilac/actions';
import {useDispatch, useSelector} from 'react-redux';
import {getHastaneById} from '../store/hospital/actions/hospital.action';

const HastaneDetail = ({navigation, route, ...props}) => {
  const {data} = route.params;

  const dispatch = useDispatch();

  const hastane = useSelector(state => state.hospitalReducer.item);

  useEffect(() => {
    if (!navigation) {
      return;
    }

    const willFocusSubscription = navigation.addListener('focus', () => {
      console.log('çek2');
      dispatch(getHastaneById(data.hastaneId));
    });

    return willFocusSubscription;
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{hastane.title}</Text>

      <MyList
        component={<RandevuCard />}
        headerText="Randevular"
        onLongPressPath="Randevu Güncelle"
        navigation={navigation}
        reducer={'randevuReducer'}
        getData={getRandevu}
        hastaneId={data.hastaneId}
      />

      <MyList
        component={<IlacCard />}
        headerText="İlaçlar"
        onLongPressPath="İlaç Güncelle"
        navigation={navigation}
        reducer={'ilacReducer'}
        getData={getIlac}
        hastaneId={data.hastaneId}
      />

      <MyList
        component={<GorevCard />}
        headerText="Görevler"
        onLongPressPath="Görev Güncelle"
        navigation={navigation}
        reducer={'gorevReducer'}
        getData={getGorev}
        hastaneId={data.hastaneId}
      />

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Yeni Randevu', {
              data: {hastaneId: data.hastaneId},
            });
          }}>
          <Text style={styles.text}>Randevu Ekle</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Yeni İlaç', {
              data: {hastaneId: data.hastaneId},
            });
          }}>
          <Text style={styles.text}>İlaç Ekle</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Yeni Görev', {
              data: {hastaneId: data.hastaneId},
            });
          }}>
          <Text style={styles.text}>Görev Ekle</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HastaneDetail;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  bottomNav: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 'auto',
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
  text: {
    color: 'rgb(255,255,200)',
    fontSize: 15,
  },
  title: {
    fontSize: 18,
    margin: 5,
    paddingBottom: 10,
    paddingTop: 10,
  },
});
