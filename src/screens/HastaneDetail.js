import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import GorevCard from '../components/GorevCard';
import IlacCard from '../components/IlacCard';
import MyList from '../components/MyList';
import RandevuCard from '../components/RandevuCard';
import {addRandevu, getRandevu} from '../store/randevu/actions';
import {addGorev, getGorev} from '../store/gorev/actions';
import {addIlac, getIlac} from '../store/ilac/actions';
import {useDispatch, useSelector} from 'react-redux';
import {getHastaneById} from '../store/hospital/actions/hospital.action';
import moment from 'moment';
import 'moment/locale/tr';
import MyPicker from '../components/MyPicker';
moment.locale('tr');

const HastaneDetail = ({navigation, route, ...props}) => {
  const {data} = route.params;

  const dispatch = useDispatch();
  const hastane = useSelector(state => state.hospitalReducer.item);
  const buttons = [
    {navigate: 'Yeni Randevu', label: 'Randevu Ekle'},
    {navigate: 'Yeni İlaç', label: 'İlaç Ekle'},
    {navigate: 'Yeni Görev', label: 'Görev Ekle'},
  ];

  const quickAdd = [
    {
      label: 'Kan Ekle',
      onChange: () =>
        dispatch(
          addGorev({
            title: 'Kan',
            desc: 'Kan Verilecek',
            endDate: new Date(),
            complete: false,
            hastaneId: hastane.hastaneId,
          }),
        ),
    },
    {
      label: 'İlaç Ekle',
      onChange: () =>
        dispatch(
          addIlac({
            title: 'İlaç verilecek',
            desc: '2 tane potasyum ilacı verilecek',
            endDate: moment().add(2, 'days').format(),
            frequency: 'Günde 1',
            hastaneId: hastane.hastaneId,
          }),
        ),
    },
    {
      label: 'Randevu Ekle',
      onChange: () =>
        dispatch(
          addRandevu({
            title: 'Kemoterapi',
            rezDate: moment().add(21, 'days').format(),
            doctor: 'Hülya Ertaş',
            hastaneId: hastane.hastaneId,
          }),
        ),
    },
  ];

  useEffect(() => {
    if (!navigation) {
      return;
    }

    const willFocusSubscription = navigation.addListener('focus', () => {
      dispatch(getHastaneById(data.hastaneId));
    });

    return willFocusSubscription;
  }, []);

  useEffect(() => {
    if (!navigation) {
      return;
    }

    navigation.setParams({date: moment(new Date(hastane.date)).format('LLL')});
  }, [hastane]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{hastane?.title}</Text>

      <View style={styles.pickerGroup}>
        <MyPicker
          data={buttons}
          label="Ayrıntılı Ekle"
          onChange={val => {
            navigation.navigate(val.navigate, {
              data: {hastaneId: data.hastaneId},
            });
          }}
          component={({item}) => (
            <Text style={styles.option}>{item.label}</Text>
          )}
        />
        <MyPicker
          data={quickAdd}
          label="Hızlı Ekle"
          onChange={val => {
            val.onChange();
          }}
          component={({item}) => (
            <Text style={styles.option}>{item.label}</Text>
          )}
        />
      </View>

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
    marginBottom: 10,
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
    color: 'rgb(55,55,200)',
    fontSize: 15,
  },
  option: {
    color: 'black',
    padding: 10,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    margin: 5,
    paddingBottom: 10,
    paddingTop: 10,
  },
  pickerGroup: {
    display: 'flex',
    flexDirection: 'row',
  },
});
