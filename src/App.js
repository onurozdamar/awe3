import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Detail from './screens/RecordDetail';
import AddNewRecord from './screens/AddNewRecord';
import AddAppointment from './screens/AddAppointment';
import AddDrag from './screens/AddDrag';
import AddTask from './screens/AddTask';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {setOpenModal} from './store/record/actions';
import {routes} from './contants';
import Settings from './screens/Settings';
import AddNote from './screens/AddNote';

const Stack = createStackNavigator();

const Menu = ({addQuick}) => {
  const dispatch = useDispatch();

  return (
    <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
      <TouchableOpacity
        style={{margin: 15}}
        hitSlop={{top: 15, bottom: 15, left: 20, right: 20}}
        onPress={() => {
          dispatch(setOpenModal({delete: true}));
        }}>
        <Icon name={'trash'} size={30} color={'red'} />
      </TouchableOpacity>
      {addQuick && (
        <TouchableOpacity
          style={{margin: 15}}
          hitSlop={{top: 15, bottom: 15, left: 20, right: 20}}
          onPress={() => {
            dispatch(setOpenModal({addQuick: true}));
          }}>
          <Icon name={'ellipsis-v'} size={30} color={'black'} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={routes.home}
          component={Home}
          options={{header: () => {}}}
        />
        <Stack.Screen
          name={routes.recordDetail}
          component={Detail}
          options={({navigation, route}) => ({
            headerRight: () => (
              <Text style={{fontSize: 14, margin: 10}}>
                {route.params.date}
              </Text>
            ),
          })}
        />
        <Stack.Screen name={routes.newRecord} component={AddNewRecord} />
        <Stack.Screen name={routes.newAppointment} component={AddAppointment} />
        <Stack.Screen name={routes.newDrag} component={AddDrag} />
        <Stack.Screen name={routes.newTask} component={AddTask} />
        <Stack.Screen name={routes.newNote} component={AddNote} />
        <Stack.Screen
          name={routes.updateRecord}
          component={AddNewRecord}
          options={{
            headerRight: () => <Menu addQuick />,
          }}
        />
        <Stack.Screen
          name={routes.updateAppointment}
          component={AddAppointment}
          options={{
            headerRight: () => <Menu addQuick />,
          }}
        />
        <Stack.Screen
          name={routes.updateDrag}
          component={AddDrag}
          options={{
            headerRight: () => <Menu addQuick />,
          }}
        />
        <Stack.Screen
          name={routes.updateTask}
          component={AddTask}
          options={{
            headerRight: () => <Menu />,
          }}
        />
        <Stack.Screen
          name={routes.updateNote}
          component={AddNote}
          options={{
            headerRight: () => <Menu />,
          }}
        />
        <Stack.Screen name={routes.settings} component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
