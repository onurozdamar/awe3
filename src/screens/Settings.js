import React from 'react';
import {useRef} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AppointmentCard from '../components/AppointmentCard';
import DailyCard from '../components/DailyCard';
import DragCard from '../components/DragCard';
import MyModal from '../components/MyModal';
import TaskCard from '../components/TaskCard';
import {types} from '../contants';
import {deleteQuickAdd} from '../store/quick-add/actions/quickAdd.action';
import {setOpenModal} from '../store/record/actions';

const Feed = ({navigation}) => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => {
    return state.quickAddReducer;
  });

  const idRef = useRef(null);

  function handleDelete(id) {
    idRef.current = id;
    dispatch(setOpenModal({delete: true}));
  }

  return (
    <ScrollView style={styles.container}>
      {data.map((d, i) => {
        const object = JSON.parse(d.object);
        switch (object.type) {
          case types.record:
            return (
              <DailyCard
                key={i}
                data={object.data}
                onLongPress={() => handleDelete(d.id)}
              />
            );
          case types.appointment:
            return (
              <AppointmentCard
                key={i}
                data={object.data}
                onLongPress={() => handleDelete(d.id)}
              />
            );
          case types.drag:
            return (
              <DragCard
                key={i}
                data={object.data}
                onLongPress={() => handleDelete(d.id)}
              />
            );
          case types.task:
            return (
              <TaskCard
                key={i}
                data={object.data}
                onLongPress={() => handleDelete(d.id)}
              />
            );

          default:
            return <Text key={i}>Bilinmeyen type!</Text>;
        }
      })}
      <MyModal
        onSuccess={() => {
          dispatch(deleteQuickAdd(idRef.current));
        }}
      />
    </ScrollView>
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
