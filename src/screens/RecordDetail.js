import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import TaskCard from '../components/TaskCard';
import DragCard from '../components/DragCard';
import MyList from '../components/MyList';
import AppointmentCard from '../components/AppointmentCard';
import {addAppointment, getAppointment} from '../store/appointment/actions';
import {addTask, getTask} from '../store/task/actions';
import {addDrag, getDrag} from '../store/drag/actions';
import {useDispatch, useSelector} from 'react-redux';
import {getRecordById} from '../store/record/actions/record.action';
import moment from 'moment';
import 'moment/locale/tr';
import MyPicker from '../components/MyPicker';
moment.locale('tr');

const RecordDetail = ({navigation, route, ...props}) => {
  const {data} = route.params;

  const dispatch = useDispatch();
  const record = useSelector(state => state.recordReducer.item);
  const buttons = [
    {navigate: 'Yeni Appointment', label: 'Appointment Ekle'},
    {navigate: 'Yeni İlaç', label: 'İlaç Ekle'},
    {navigate: 'Yeni Görev', label: 'Görev Ekle'},
  ];

  const quickAdd = [
    {
      label: 'Kan Ekle',
      onChange: () =>
        dispatch(
          addTask({
            title: 'Kan',
            desc: 'Kan Verilecek',
            endDate: new Date(),
            complete: false,
            recordId: data.id,
          }),
        ),
    },
    {
      label: 'İlaç Ekle',
      onChange: () =>
        dispatch(
          addDrag({
            title: 'İlaç verilecek',
            desc: '2 tane potasyum ilacı verilecek',
            endDate: moment().add(2, 'days').format(),
            frequency: 'Günde 1',
            recordId: data.id,
          }),
        ),
    },
    {
      label: 'Appointment Ekle',
      onChange: () =>
        dispatch(
          addAppointment({
            title: 'Kemoterapi',
            rezDate: moment().add(21, 'days').format(),
            doctor: 'Hülya Ertaş',
            recordId: data.id,
          }),
        ),
    },
  ];

  useEffect(() => {
    if (!navigation) {
      return;
    }

    const willFocusSubscription = navigation.addListener('focus', () => {
      dispatch(getRecordById(data.id));
    });

    return willFocusSubscription;
  }, []);

  useEffect(() => {
    if (!navigation) {
      return;
    }

    navigation.setParams({date: moment(new Date(record.date)).format('LLL')});
  }, [record]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{record?.title}</Text>

      <View style={styles.pickerGroup}>
        <MyPicker
          data={buttons}
          label="Ayrıntılı Ekle"
          onChange={val => {
            navigation.navigate(val.navigate, {
              data: {recordId: data.id},
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
        component={<AppointmentCard />}
        headerText="Appointments"
        onLongPressPath="Appointment Güncelle"
        navigation={navigation}
        reducer={'appointmentReducer'}
        getData={getAppointment}
        recordId={data.id}
      />

      <MyList
        component={<DragCard />}
        headerText="İlaçlar"
        onLongPressPath="İlaç Güncelle"
        navigation={navigation}
        reducer={'dragReducer'}
        getData={getDrag}
        recordId={data.id}
      />

      <MyList
        component={<TaskCard />}
        headerText="Görevler"
        onLongPressPath="Görev Güncelle"
        navigation={navigation}
        reducer={'taskReducer'}
        getData={getTask}
        recordId={data.id}
      />
    </ScrollView>
  );
};

export default RecordDetail;

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
