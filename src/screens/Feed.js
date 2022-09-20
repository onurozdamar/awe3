import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import DailyCard from '../components/DailyCard';
import MyFlatlist from '../components/MyFlatlist';
import AddButton from '../components/AddButton';
import {getRecord as getRecordAction} from '../store/record/actions/record.action';
import {
  RecordService,
  AppointmentService,
  DragService,
  TaskService,
  QuickAddService,
  NoteService,
} from '../database/business';
import {routes} from '../contants';
import {getQuickAdd} from '../store/quick-add/actions/quickAdd.action';

const Feed = ({navigation}) => {
  const recordService = new RecordService();
  const appointmentService = new AppointmentService();
  const dragService = new DragService();
  const taskService = new TaskService();
  const noteService = new NoteService();
  const quickAddService = new QuickAddService();

  const dispatch = useDispatch();

  const data = useSelector(state => {
    return state.recordReducer.data;
  });

  const loading = useSelector(state => {
    return state.recordReducer.loading;
  });

  useEffect(() => {
    recordService.create();
    appointmentService.create();
    dragService.create();
    taskService.create();
    noteService.create();
    quickAddService.create();
    dispatch(getQuickAdd());
  }, []);

  useEffect(() => {
    if (!navigation) {
      return;
    }

    const willFocusSubscription = navigation.addListener('focus', () => {
      dispatch(getRecordAction());
    });

    return willFocusSubscription;
  }, []);

  return (
    <View style={styles.container}>
      <MyFlatlist
        data={data}
        loading={loading}
        onPress={val => {
          navigation.navigate(routes.recordDetail, {
            data: val.item,
          });
        }}
        onLongPress={val => {
          navigation.navigate(routes.updateRecord, {
            editing: true,
            data: val.item,
          });
        }}
        component={<DailyCard />}
        onRefresh={() => dispatch(getRecordAction())}
      />
      <AddButton navigation={navigation} />
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
    backgroundColor: 'rgb(151,251,155)',
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
